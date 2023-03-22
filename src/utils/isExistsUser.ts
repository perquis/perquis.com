import type { DefaultSession } from 'next-auth';

const isUndefined = (x: unknown): x is undefined => typeof x === 'undefined';

export const isExistsUser = (user: DefaultSession['user']) => {
  if (!isUndefined(user?.name) && !isUndefined(user?.email) && !isUndefined(user?.image)) return true;

  return false;
};
