import { useRouter } from 'next/router';

import { useChangeLocalesOnArticlePageStore } from '@stories/useChangeLocalesOnArticlePageStore';

export const useChangeLocalesOnBlogPage = () => {
  const { push, pathname, locale: currentLocale } = useRouter();
  const [negativeSlug] = useChangeLocalesOnArticlePageStore((state) => [state.negativeSlug]);

  const locale = currentLocale === 'en' ? 'pl' : 'en';
  const pushOnBlogPage = pathname !== '/' ? `${pathname.replace('[slug]', '')}${negativeSlug}` : '/';

  const handleChangeLocalesOnBlogPage = () => {
    push(pushOnBlogPage, pushOnBlogPage, { locale });
  };

  return { handleChangeLocalesOnBlogPage };
};
