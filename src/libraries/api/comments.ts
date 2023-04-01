/* eslint-disable */
import type { NextApiRequest, NextApiResponse } from 'next';

import { prismaClient } from 'prisma/prismaClient';

import { isValidatedUri } from '@data/regexes';
import { textAreaMaxLength } from '@data/validations';

export const getAllCommentsList = async (req: NextApiRequest, res: NextApiResponse, slug: string) => {
  try {
    const posts = await prismaClient.post.findMany({ where: { articleId: slug }, include: { comments: { include: { user: true } } } });
    if (posts.length === 0) return res.status(404).send({ message: 'Not Found.' });

    const [post] = posts;
    return res.send(
      post.comments
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .map(({ user, ...rest }) => {
          if (user) {
            const { id, image, name } = user;

            return { ...rest, user: { id, image, name } };
          }

          return { ...rest };
        })
    );
  } catch (err) {
    return res.status(500).send({ message: 'Internal Server Error' });
  }
};

export const createComment = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, content, postId } = req.body;
  if (!content && !email && !postId) return res.status(400).send({ message: 'Bad request.' });
  if (isValidatedUri(content.trim())) return res.status(400).send({ message: 'Bad request.' });
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

export const deleteComment = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, userId } = req.body;
  if (!id && !userId) return res.status(400).send({ message: 'Bad request.' });

  try {
    const comment = await prismaClient.comment.findFirst({ where: { id } });
    const user = await prismaClient.user.findFirst({ where: { id: userId } });
    const isAdmin = user?.email === process.env.EMAIL;

    console.log(user);

    if (comment) {
      if (isAdmin || comment.userId !== userId) {
        await prismaClient.comment.delete({ where: { id } });
        return res.status(200).end();
      }

      return res.status(400).send({ message: 'Bad request.' });
    } else return res.status(404).send({ message: 'Not Found.' });
  } catch (err) {
    return res.status(500).send({ message: 'Internal Server Error' });
  }
};
