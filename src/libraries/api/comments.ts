import type { NextApiRequest, NextApiResponse } from 'next';

import { prismaClient } from 'prisma/prismaClient';

export const getAllCommentsList = async (req: NextApiRequest, res: NextApiResponse, slug: string) => {
  try {
    const posts = await prismaClient.post.findMany({ where: { articleId: slug }, include: { comments: true } });
    if (posts.length === 0) return res.status(404).send({ message: 'Not Found.' });

    const [post] = posts;
    res.send(post.comments);
  } catch (err) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

export const createComment = async (req: NextApiRequest, res: NextApiResponse) => {
  const { avatar, content, nickname, postId } = req.body;
  if (!avatar && !content && !nickname && !postId) res.status(400).send({ message: 'Bad request.' });

  try {
    await prismaClient.comment.create({ data: { avatar, content, nickname, postId } });

    res.status(201).end();
  } catch (err) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
};
