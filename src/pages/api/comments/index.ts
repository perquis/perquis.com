import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';

import { createComment, deleteComment, updateComment } from '@libraries/api/comments';

import { authOptions } from '../auth/[...nextauth]';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);
  if (!session?.user) return res.status(403).json({ message: 'Forbidden.' });

  switch (req.method) {
    case 'POST':
      return createComment(req, res);
    case 'PUT':
      return updateComment(req, res);
    case 'DELETE':
      return deleteComment(req, res);
    default:
      return res.status(400).json({ message: 'Invalid method.' });
  }
};
