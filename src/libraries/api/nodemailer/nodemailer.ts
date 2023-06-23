import type { NextApiRequest, NextApiResponse } from 'next';
import { createTransport } from 'nodemailer';
import { prismaClient } from 'prisma/prismaClient';

import { isValidatedEmail } from '@data';

export const nodemailerTransporter = createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_APP_EMAIL,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export const sendNewsletterToSubscribers = async (req: NextApiRequest, res: NextApiResponse) => {
  const { text, html, subject } = req.body;
  if (!text && !html && !subject) return res.status(400).send({ message: 'Bad request.' });

  try {
    const subscribers = await prismaClient.newsletter.findMany({ select: { email: true }, where: { status: 'SUBSCRIBE' } });
    if (subscribers.length === 0) return res.status(200).send({ message: 'The subscribers list is empty now.' });

    const to = subscribers.map(({ email }) => email);

    await nodemailerTransporter.sendMail({ from: process.env.GMAIL_APP_EMAIL, to, text, html, subject });
    return res.status(200).end();
  } catch (err) {
    return res.status(500).send({ message: 'Internal Server Error' });
  }
};

export const subscribeNewsletter = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;
  if (!email && !isValidatedEmail(email)) return res.status(400).send({ message: 'Bad request.' });

  try {
    const subscriber = await prismaClient.newsletter.findFirst({ where: { email } });

    if (subscriber) return res.status(400).send({ message: 'Bad request.' });
    await prismaClient.newsletter.create({ data: { email, status: 'SUBSCRIBE' } });

    return res.status(200).end();
  } catch (err) {
    return res.status(500).send({ message: 'Internal Server Error' });
  }
};

export const unsubscribeNewsletter = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;
  if (!email && !isValidatedEmail(email)) return res.status(400).send({ message: 'Bad request.' });

  try {
    const subscriber = await prismaClient.newsletter.findFirst({ where: { email } });

    if (subscriber) return res.status(400).send({ message: 'Bad request.' });
    await prismaClient.newsletter.update({ where: { email }, data: { status: 'UNSUBSCRIBE' } });

    return res.status(200).end();
  } catch (err) {
    return res.status(500).send({ message: 'Internal Server Error' });
  }
};
