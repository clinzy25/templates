module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    extends: ['airbnb-base', 'plugin:jsdoc/recommended', 'prettier'],
    plugins: ['html'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        'no-console': 'off',
    },
};

/**
 * This config uses airbnb-base. Be sure to run npx install-peerdeps to install all dependencies
 */
