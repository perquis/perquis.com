import { PrismaAdapter } from '@next-auth/prisma-adapter';
import type { AuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

import { prismaClient } from 'prisma/prismaClient';

const secret = process.env.NEXTAUTH_SECRET;

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prismaClient),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
  ],
  callbacks: {
    async session({ session }) {
      session.user.isAdmin = session.user.email === process.env.EMAIL;
      const user = await prismaClient.user.findFirst({ where: { email: session.user.email } });
      session.user.id = user?.id ?? null;

      return session;
    },
  },
  session: {
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
    strategy: 'jwt',
  },
  jwt: {
    secret,
  },
};

export default NextAuth(authOptions);
