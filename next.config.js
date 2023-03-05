/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

<<<<<<< HEAD
module.exports = nextConfig
=======
  return {
    reactStrictMode: true,
    images: {
      domains: ['avatars.githubusercontent.com'],
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
      config.plugins.push(new ESLintPlugin({ extensions: ['js', 'jsx', 'ts', 'tsx'] }));
      return config;
    },
  };
};

module.exports = nextConfig();
>>>>>>> 921af30 (Introduced fixes to Navigation component.)
