/* eslint-disable */
const nextTranslate = require('next-translate-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = () => {
  const ESLintPlugin = require('eslint-webpack-plugin');

  return nextTranslate({
    reactStrictMode: true,
    images: {
      domains: ['avatars.githubusercontent.com', 'media.graphassets.com', 'images.unsplash.com'],
    },
    i18n: {
      locales: ['en', 'pl'],
      defaultLocale: 'en',
    },
    async redirects() {
      return [
        {
          source: '/github',
          destination: 'https://github.com/perquis',
          permanent: true,
        },
        {
          source: '/twitter',
          destination: 'https://twitter.com/_perquis',
          permanent: true,
        },
      ];
    },
    webpack: (config) => {
      // config.plugins.push(new ESLintPlugin({ extensions: ['js', 'jsx', 'ts', 'tsx'] }));
      return config;
    },
  });
};

module.exports = nextConfig();
