import type { AuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

const secret = process.env.NEXTAUTH_SECRET;

export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user?.email) {
        token.isAdmin = user.email === process.env.EMAIL;
      }

      return token;
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
