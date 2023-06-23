import { useRouter } from 'next/router';

import { useObserverStore } from '@stories';

export const usePushOnBlogPage = () => {
  const { push, pathname, locale: currentLocale } = useRouter();
  const [negativeSlug] = useObserverStore((state) => [state.negativeSlug]);

  const locale = currentLocale === 'en' ? 'pl' : 'en';
  const pushOnBlogPage = pathname !== '/' ? `${pathname.replace('[slug]', '')}${negativeSlug}` : '/';

  const handleChangeLocalesOnBlogPage = () => push(pushOnBlogPage, pushOnBlogPage, { locale });

  return { handleChangeLocalesOnBlogPage };
};
