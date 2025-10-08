module.exports = {
    root: true, // останавливаем поиск конфигов выше по дереву
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.eslint.json', // отдельный tsconfig для линтинга
        tsconfigRootDir: __dirname,
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
        'import',
        'mikhaildnd',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // TS базовые правила
        'plugin:@typescript-eslint/recommended-requiring-type-checking', // правила, завязанные на типы
        'plugin:react/recommended',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended',
        'plugin:prettier/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
    ],
    rules: {
        //custom plugins
        'mikhaildnd/path-checker': 'error',
        // ----- форматирование -----
        // доверяем форматирование Prettier
        indent: 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'prettier/prettier': 'error', // ошибки форматирования как ESLint-ошибки

        // ----- React -----
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
        'react/react-in-jsx-scope': 'off', // не нужен с React 17+
        'react/require-default-props': 'off',
        'react/function-component-definition': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/self-closing-comp': ['error', { component: true, html: false }],

        // ----- TypeScript -----
        '@typescript-eslint/no-unused-vars': [
            'warn',
            { argsIgnorePattern: '^_' },
        ],
        '@typescript-eslint/no-shadow': 'error',
        'no-shadow': 'off',
        'no-undef': 'off',

        '@typescript-eslint/no-unsafe-argument': 'error',
        '@typescript-eslint/no-unsafe-member-access': 'error',
        '@typescript-eslint/no-unsafe-call': 'error',
        '@typescript-eslint/no-explicit-any': 'error',

        // ----- Импорты -----
        'import/no-unresolved': 'error', // теперь работает с алиасами
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'warn',

        // ----- Логика -----
        'no-param-reassign': 'off', // redux toolkit допускает
        'no-underscore-dangle': 'off',

        // ----- i18n -----
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: [
                    'data-testid',
                    'to',
                    'target',
                    'justify',
                    'align',
                    'direction',
                    'gap',
                ],
            },
        ],

        // ----- Длина строк -----
        'max-len': [
            'error',
            {
                code: 120,
                ignoreComments: true,
                ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
            },
        ],

        // ----- Hooks -----
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',

        // ----- a11y -----
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    overrides: [
        {
            // --- тесты и сторибуки ---
            files: [
                '**/src/**/*.{test,stories}.{ts,tsx}',
                '**/config/storybook/**/*.{ts,tsx}',
            ],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
                '@typescript-eslint/no-unsafe-call': 'off',
                'react/display-name': 'off',
                'import/no-extraneous-dependencies': 'off',
            },
        },
        // --- TS-конфиги, скрипты, dev-серверы ---
        {
            files: [
                'config/**/*.ts',
                'config/**/*.tsx',
                'scripts/**/*.ts',
                'json-server/**/*.ts',
                'webpack.config.ts',
                'build/**/*.ts',
            ],
            parserOptions: {
                // project: null, // отключаем type-aware линтинг
                project: './tsconfig.node.json',
                tsconfigRootDir: __dirname,
            },
            env: {
                node: true,
            },
            //     rules: {
            //         '@typescript-eslint/await-thenable': 'off',
            //         '@typescript-eslint/no-floating-promises': 'off',
            //         '@typescript-eslint/no-unsafe-assignment': 'off',
            //         '@typescript-eslint/no-unsafe-member-access': 'off',
            //         '@typescript-eslint/no-unsafe-call': 'off',
            //     },
        },
        // --- JS-конфиги ---
        {
            files: [
                'config/**/*.js',
                'scripts/**/*.js',
                'json-server/**/*.js',
                'webpack.config.js',
                'build/**/*.js',
            ],
            parserOptions: {
                project: null, // без type-aware линтинга
            },
            env: {
                node: true,
            },
        },
    ],
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            typescript: {
                project: './tsconfig.json',
            },
        },
    },
};
