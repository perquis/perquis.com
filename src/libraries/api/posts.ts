import type { NextApiRequest, NextApiResponse } from 'next';

import { prismaClient } from 'prisma/prismaClient';

export const getAllPosts = async (req: NextApiRequest, res: NextApiResponse, slug: string) => {
  try {
    const posts = await prismaClient.post.findMany({ where: { articleId: slug } });
    if (posts.length === 0) return res.status(404).send({ message: 'Not Found.' });

    const [post] = posts;
    return res.send(post);
  } catch (err) {
    return res.status(500).send({ message: 'Internal Server Error' });
  }
};

export const createPost = async (req: NextApiRequest, res: NextApiResponse, slug: string) => {
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) res.status(401).send({ message: 'Invalid token.' });

  try {
    const posts = await prismaClient.post.findMany({ where: { articleId: slug } });
    if (posts.length === 0) {
      await prismaClient.post.create({ data: { articleId: slug } });
      return res.status(201).end();
    } else res.status(200).end();
  } catch (err) {
    return res.status(500).send({ message: 'Internal Server Error' });
  }
};
