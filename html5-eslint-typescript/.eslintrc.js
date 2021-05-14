module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        'airbnb-base',
        'plugin:jsdoc/recommended',
        'prettier',
        'plugin:@typescript-eslint/recommended',
    ],
    plugins: ['html', '@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        'no-console': 'off',
        'spaced-comment': 'off',
    },
};

/**
 * This config uses airbnb-base. Be sure to run npx install-peerdeps to install all dependencies
 */
