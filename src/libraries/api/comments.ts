import type { NextApiRequest, NextApiResponse } from 'next';

import { prismaClient } from 'prisma/prismaClient';

import { isValidatedUri } from '@data/regexes';

export const getAllCommentsList = async (req: NextApiRequest, res: NextApiResponse, slug: string) => {
  try {
    const posts = await prismaClient.post.findMany({ where: { articleId: slug }, include: { comments: { include: { user: true } } } });
    if (posts.length === 0) return res.status(404).send({ message: 'Not Found.' });

    const [post] = posts;
    return res.send(post.comments.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
  } catch (err) {
    return res.status(500).send({ message: 'Internal Server Error' });
  }
};

export const createComment = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, content, postId } = req.body;
  if (!content && !email && !postId) return res.status(400).send({ message: 'Bad request.' });
  if (isValidatedUri(content.trim())) return res.status(400).send({ message: 'Bad request.' });

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
