/* config-overrides.js */

module.exports = {
  // The Webpack config to use when compiling your react app for development or production.
  webpack: function (config, env) {
    // ...add your webpack config
    config.resolve.fallback = {
      stream: false,
      assert: false,
      buffer: false,
      util: false,
      http: false,
      https: false,
      os: false,
      url: false,
      path: false,
    };
    return config;
  },
};
