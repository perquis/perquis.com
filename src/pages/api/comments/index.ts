import type { NextApiRequest, NextApiResponse } from 'next';

import { createComment, deleteComment } from '@libraries/api/comments';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.cookies['next-auth.session-token']) return res.status(403).json({ message: 'Forbidden.' });

  switch (req.method) {
    case 'POST':
      return createComment(req, res);
    case 'DELETE':
      return deleteComment(req, res);
    default:
      return res.status(400).json({ message: 'Invalid method.' });
  }
};
