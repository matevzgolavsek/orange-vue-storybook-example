module.exports = {
  transformIgnorePatterns: ["/node_modules/(?!(@storybook/.*\\.vue$))"],
  preset: "@vue/cli-plugin-unit-jest",

  // need to add this for Unit testing purposes otherwise there are CSS issues
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy'
  }
};
