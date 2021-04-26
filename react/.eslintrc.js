module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  plugins: ['html', 'jsdoc'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'no-console': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
  },
};
