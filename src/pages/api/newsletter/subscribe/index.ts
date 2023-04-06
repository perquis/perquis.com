import type { NextApiRequest, NextApiResponse } from 'next';

import { subscribeNewsletter } from '@libraries/api/nodemailer';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      return subscribeNewsletter(req, res);
    default:
      return res.status(400).json({ message: 'Invalid method.' });
  }
};
