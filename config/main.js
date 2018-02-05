/** General Configurations Like PORT, HOST names and etc... */

var config = {
  env: process.env.NODE_ENV || 'development',
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 8889,
  karmaPort: 9876,

  // This part goes to React-Helmet for Head of our HTML
  app: {
    head: {
      // If you're not using SSR, when changing these values,
      // update the /src/index.html manually(or generate a new index.html version using SSR,
      // then stripping React's state <script> section and <main>'s contents)
      base: { href: process.env.BASE_URL || '/' },
      title: 'Portalul Strategiei Naționale Anticorupție',
      titleTemplate: 'PSNA: %s',
      meta: [
        { charset: 'utf-8' },
        { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portalul Strategiei Naționale Anticorupție' },
      ]
    }
  }
};

module.exports = config;
