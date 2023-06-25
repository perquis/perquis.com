import { useRouter } from 'next/router';

import { useGlobalStore } from '@stories';

export const useRedirectToAlternatePage = () => {
  const { push, pathname, locale: currentLocale } = useRouter();
  const [postTitleInAlternateLanguage] = useGlobalStore(({ postTitleInAlternateLanguage }) => [postTitleInAlternateLanguage]);

  const locale = currentLocale === 'en' ? 'pl' : 'en';
  const isBlogPageRedirect = pathname !== '/' ? pathname.replace('[slug]', postTitleInAlternateLanguage) : '/';

  const redirectToAlternatePage = () => push(isBlogPageRedirect, isBlogPageRedirect, { locale });

  return { redirectToAlternatePage };
};
