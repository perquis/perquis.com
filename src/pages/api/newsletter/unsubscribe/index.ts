import type { NextApiRequest, NextApiResponse } from 'next';

import { unsubscribeNewsletter } from '@libraries';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      return unsubscribeNewsletter(req, res);
    default:
      return res.status(400).json({ message: 'Invalid method.' });
  }
};
