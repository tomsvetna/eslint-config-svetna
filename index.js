module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['airbnb', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'prettier'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
        'import/prefer-default-export': 'off',
        'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
        'prettier/prettier': 'error',
        'react/jsx-props-no-spreading': 'off',
        'react/no-unescaped-entities': 'off',
        'react/prop-types': 'off',
    },
}
