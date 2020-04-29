const path = require('path');

module.exports = {
  stories: ['../stories/components/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-knobs', '@storybook/addon-docs', 'storybook-addon-vue-info/lib/register', '@storybook/addon-links'],

  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // Storybook addon vue info
    // https://github.com/pocka/storybook-addon-vue-info
    config.module.rules.push({
      test: /\.vue$/,
      loader: 'vue-docgen-loader',
      enforce: 'post'
    });

    // Return the altered config
    return config;
  },
};