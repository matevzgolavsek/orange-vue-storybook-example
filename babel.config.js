module.exports = {
  presets: [
    ["@vue/cli-plugin-babel/preset", 
      {
        /* Disabled due to clash between core-js versions in Storybook / Vue CLI */
        useBuiltIns: false,
        /* Disabled due to clash with Storybook MDX */
        jsx: false
      }
    ]
  ]
};
