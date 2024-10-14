import { Linter } from 'eslint';

const config: Linter.Config = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/recommended', // TypeScript recommended rules
        'plugin:react/recommended', // React recommended rules
        'plugin:prettier/recommended', // Prettier integration (optional)
    ],
    parserOptions: {
        ecmaVersion: 2020, // Allows modern ECMAScript features
        sourceType: 'module', // Allows the use of imports
        ecmaFeatures: {
            jsx: true, // Enables JSX support
        },
    },
    rules: {
        // Customize your client-side linting rules here
        'react/react-in-jsx-scope': 'off', // Not needed with React 17+
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        "@typescript-eslint/no-explicit-any": "off"
    },
    settings: {
        react: {
            version: 'detect', // Automatically detect the react version
        },
    },
};

export default config;