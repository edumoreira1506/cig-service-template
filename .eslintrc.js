module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "never"],
    strict: 'error',
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  },
  parserOptions: {
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
};
