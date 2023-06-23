import type { NextApiRequest, NextApiResponse } from 'next';

import { getAllPosts } from '@libraries';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;
  if (!slug) res.status(400).send({ message: 'Bad request.' });

  switch (req.method) {
    case 'GET':
      return getAllPosts(req, res, String(slug));
    default:
      return res.status(400).json({ message: 'Invalid method.' });
  }
};
