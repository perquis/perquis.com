import { useSession } from 'next-auth/react';

import { isExistsUser } from '@utils/isExistsUser';

export const useUser = () => {
  const { data } = useSession();
  const isUser = !isExistsUser(data?.user);

  return {
    isUser,
  };
};
