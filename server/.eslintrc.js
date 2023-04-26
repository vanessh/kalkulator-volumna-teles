module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-recommended',
      'prettier',
    ],
    parserOptions: {
      parser: 'babel-eslint',
      "requireConfigFile": false
    },
    rules: {
      // tukaj določite vaše posebne pravila
    },
  };