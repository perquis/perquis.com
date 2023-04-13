/* eslint-disable */
import type { NextApiRequest, NextApiResponse } from 'next';

import { prismaClient } from 'prisma/prismaClient';

import { textAreaMaxLength } from '@data/validations';

export const getAllCommentsList = async (req: NextApiRequest, res: NextApiResponse) => {
  const { postId, skip } = req.query;
  if (!skip && !postId) return res.status(400).send({ message: 'Bad request.' });

  try {
    const limit = 6;
    const comments = await prismaClient.comment.findMany({
      where: { postId: String(postId) },
      include: { user: true },
      skip: Number(skip),
      take: limit,
      orderBy: { createdAt: 'desc' },
    });
    const nextComments = await prismaClient.comment.findMany({ where: { postId: String(postId) }, include: { user: true }, skip: Number(skip) + limit, take: limit });
    if (!comments) return res.status(404).send({ message: 'Not Found.' });

    return res.send({
      comments: comments
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .map(({ user, ...rest }) => {
          if (user) {
            const { id, image, name } = user;

            return { ...rest, user: { id, image, name } };
          }

          return { ...rest };
        }),
      skipPage: nextComments.length > 0 ? Number(skip) + limit : false,
    });
  } catch (err) {
    return res.status(500).send({ message: 'Internal Server Error' });
  }
};

export const createComment = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, content, postId } = req.body;
  if (!content && !email && !postId) return res.status(400).send({ message: 'Bad request.' });
  if (content.length > textAreaMaxLength) return res.status(400).send({ message: 'Bad request.' });

  try {
    const user = await prismaClient.user.findFirst({ where: { email } });

    if (user) {
      const userId = user.id;
      await prismaClient.comment.create({ data: { content, postId, userId } });

      res.status(201).end();
    } else return res.status(404).send({ message: 'Not Found.' });
  } catch (err) {
    return res.status(500).send({ message: 'Internal Server Error' });
  }
};

export const updateComment = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, userId, content } = req.body;
  if (!id && !userId && !content) return res.status(400).send({ message: 'Bad request.' });

  try {
    const user = await prismaClient.user.findFirst({ where: { id: userId } });
    const comment = await prismaClient.comment.findFirst({ where: { id, userId } });

    if (user && comment) {
      await prismaClient.comment.update({ where: { id }, data: { content } });
      return res.status(200).end();
    }

    return res.status(404).send({ message: 'Not Found.' });
  } catch (err) {
    return res.status(500).send({ message: 'Internal Server Error' });
  }
};

export const deleteComment = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, userId } = req.body;
  if (!id && !userId) return res.status(400).send({ message: 'Bad request.' });

  try {
    const comment = await prismaClient.comment.findFirst({ where: { id } });
    const user = await prismaClient.user.findFirst({ where: { id: userId } });
    const isAdmin = user?.email === process.env.EMAIL;

    if (comment && (isAdmin || comment.userId !== userId)) {
      await prismaClient.comment.delete({ where: { id } });
      return res.status(200).end();
    }

    return res.status(404).send({ message: 'Not Found.' });
  } catch (err) {
    return res.status(500).send({ message: 'Internal Server Error' });
  }
};
