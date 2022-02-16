/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  /**
   * If prefix for the default locale is wanted:
   * https://nextjs.org/docs/advanced-features/i18n-routing#prefixing-the-default-locale
   */
  i18n: {
    locales: [ 'en-US', 'fr' ],
    defaultLocale: 'en-US'
  }

}
