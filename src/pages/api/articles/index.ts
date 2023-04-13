import type { NextApiRequest, NextApiResponse } from 'next';

import { searchForArticles } from '@libraries/api/articles';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      return searchForArticles(req, res);
    default:
      return res.status(400).json({ message: 'Invalid method.' });
  }
};
