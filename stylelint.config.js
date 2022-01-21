module.exports = {
  plugins: ['stylelint-scss'],
  extends: ['stylelint-config-standard-scss'],
  files: '**/*.{css,scss}',
  customSyntax: 'postcss-scss',
  rules: {
    'color-no-invalid-hex': true,
    'block-no-empty': true,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [true, { ignoreAtRules: '@tailwind' }],
  },
  ignoreFiles: ['build', 'public'],
};
