import type { NextApiRequest, NextApiResponse } from 'next';

import { prismaClient } from '@prisma/prismaClient';

export const getAllPosts = async (req: NextApiRequest, res: NextApiResponse, slug: string) => {
  const posts = await prismaClient.post.findMany({ where: { articleId: slug } });
  if (posts.length === 0) return res.status(404).send({ message: 'Not Found.' });

  const [post] = posts;

  res.send(post);
};

export const createPost = async (req: NextApiRequest, res: NextApiResponse, slug: string) => {
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) res.status(401).send({ message: 'Invalid token.' });

  const posts = await prismaClient.post.findMany({ where: { articleId: slug } });
  if (posts.length === 0) {
    await prismaClient.post.create({ data: { articleId: slug } });
    res.status(201).end();
  } else res.status(200).end();
};
