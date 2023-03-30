import type { NextApiRequest, NextApiResponse } from 'next';

import { createComment } from '@libraries/api/comments';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      return createComment(req, res);
    default:
      return res.status(400).json({ message: 'Invalid method.' });
  }
};
