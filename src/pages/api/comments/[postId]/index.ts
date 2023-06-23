import type { NextApiRequest, NextApiResponse } from 'next';

import { getAllCommentsList } from '@libraries';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      return getAllCommentsList(req, res);
    default:
      return res.status(400).json({ message: 'Invalid method.' });
  }
};
