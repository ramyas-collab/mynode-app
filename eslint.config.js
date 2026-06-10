@'
const js = require('@eslint/js');

module.exports = [
  js.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
    },
  },
];
'@ | Out-File -FilePath eslint.config.cjs -Encoding utf8