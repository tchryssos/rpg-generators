module.exports = {
  eslint: {
    dirs: ['pages', 'utils', 'constants', 'components', 'typings', 'app'],
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  compiler: {
    emotion: true,
  },
  experimental: {
    appDir: true,
  },
};
