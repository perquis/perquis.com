import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';

export const usePersistLocaleCookie = () => {
  const { locale } = useRouter();

  const persistLocaleCookie = useCallback(() => {
    const date = new Date();
    const expireMs = 100 * 24 * 60 * 60 * 1000;

    date.setTime(date.getTime() + expireMs);
    document.cookie = `NEXT_LOCALE=${locale};expires=${date.toUTCString()};path=/`;
  }, [locale]);

  useEffect(persistLocaleCookie, [persistLocaleCookie]);
};
