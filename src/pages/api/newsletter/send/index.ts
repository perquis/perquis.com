import type { NextApiRequest, NextApiResponse } from 'next';

import { sendNewsletterToSubscribers } from '@libraries/api/nodemailer';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.headers['api-key']) return res.status(401).send({ message: 'Unauthorized.' });
  if (req.headers['api-key'] !== process.env.MY_SECRET_TOKEN) return res.status(403).send({ message: 'Forbidden.' });

  switch (req.method) {
    case 'POST':
      return sendNewsletterToSubscribers(req, res);
    default:
      return res.status(400).json({ message: 'Invalid method.' });
  }
};
