import { useRouter } from 'next/router';
import { useState } from 'react';

type UseChangeLocalization = () => {
  locale: string | undefined;
  isActive: boolean;
  toggleLocales: () => void;
};

export const useChangeLocalization: UseChangeLocalization = () => {
  const { locale } = useRouter();
  const [isActive, setActive] = useState(false);

  const toggleLocales = () => setActive(!isActive);

  return {
    locale,
    isActive,
    toggleLocales,
  };
};
