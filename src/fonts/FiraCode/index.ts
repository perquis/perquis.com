import localFont from 'next/font/local';

export const firaCode = localFont({
  src: [
    {
      path: './FiraCode-Light.woff2',
      weight: '300',
      style: 'light',
    },
    {
      path: './FiraCode-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './FiraCode-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './FiraCode-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './FiraCode-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});
