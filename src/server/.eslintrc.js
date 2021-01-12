module.exports = {
  rules: { 'no-console': 'off' },
  overrides: [
    {
      files: ['**/seeds/**/*.js', '**/controllers/**/*.js'],
      rules: {
        '@typescript-eslint/camelcase': 'off',
      },
    },
  ],
};
