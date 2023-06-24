import { useRouter } from 'next/router';

import { useGlobalStore } from '@stories';

export const usePushOnBlogPage = () => {
  const { push, pathname, locale: currentLocale } = useRouter();
  const [postTitleInAlternateLanguage] = useGlobalStore(({ postTitleInAlternateLanguage }) => [postTitleInAlternateLanguage]);

  const locale = currentLocale === 'en' ? 'pl' : 'en';
  const pushOnBlogPage = pathname !== '/' ? `${pathname.replace('[slug]', '')}${postTitleInAlternateLanguage}` : '/';

  const handleChangeLocalesOnBlogPage = () => push(pushOnBlogPage, pushOnBlogPage, { locale });

  return { handleChangeLocalesOnBlogPage };
};
