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
        'unused-imports',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // TS базовые правила
        'plugin:@typescript-eslint/recommended-requiring-type-checking', // правила, завязанные на типы
        'plugin:react/recommended',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
    ],
    rules: {
        //custom plugins
        'mikhaildnd/path-checker': ['error', { alias: '@' }],
        'mikhaildnd/public-api-imports': [
            'error',
            {
                alias: '@',
                testFilesPatterns: [
                    '**/*.test.*',
                    '**/*.stories.*',
                    '**/StoreDecorator.tsx',
                ],
            },
        ],
        'mikhaildnd/layer-imports': [
            'error',
            {
                alias: '@',
                ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
            },
        ],
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
        'react/jsx-curly-brace-presence': [
            'error',
            { props: 'never', children: 'never' },
        ],

        // ----- TypeScript -----
        '@typescript-eslint/consistent-type-imports': [
            'error',
            {
                prefer: 'type-imports',
                disallowTypeAnnotations: false, // для таких импортов -> type SpringType = typeof import('@react-spring/web');
                // fixStyle: 'separate-type-imports',
                fixStyle: 'inline-type-imports',
            },
        ],
        // --> можно отключить и передать управление unused-imports, чтобы удалять неиспользуемые переменные в коде
        '@typescript-eslint/no-unused-vars': 'off',
        // '@typescript-eslint/no-unused-vars': [
        //     'warn',
        //     { argsIgnorePattern: '^_' },
        // ],
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

        // ----- Импорты (eslint-plugin-unused-imports) -----
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],

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
                    'role',
                    'as',
                    'border',
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
                '**/*.test.{ts,tsx}',
                '**/*.stories.{ts,tsx}',
                '**/config/storybook/**/*.{ts,tsx}',
            ],
            rules: {
                '@typescript-eslint/no-unsafe-call': 'off',
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
                'react/display-name': 'off',
                'import/no-extraneous-dependencies': 'off',
            },
        },
        // --- TS-конфиги, скрипты, dev-серверы ---
        {
            files: [
                'cypress.config.ts',
                'config/**/*.ts',
                'config/**/*.tsx',
                'scripts/**/*.ts',
                'json-server/**/*.ts',
                'webpack.config.ts',
                'vite.config.ts',
                'build/**/*.ts',
            ],
            parserOptions: {
                project: null, // отключаем type-aware линтинг
            },
            env: {
                node: true,
            },
            extends: ['plugin:@typescript-eslint/disable-type-checked'],
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
                project: null,
            },
            env: {
                node: true,
            },
        },
        // --- Cypress ---
        {
            files: ['cypress/**/*.ts', 'cypress/**/*.tsx'],
            parserOptions: {
                project: './cypress/tsconfig.json',
                tsconfigRootDir: __dirname,
            },
            env: {
                node: true,
            },
            globals: {
                cy: 'readonly',
                Cypress: 'readonly',
                describe: 'readonly',
                it: 'readonly',
                before: 'readonly',
                after: 'readonly',
                beforeEach: 'readonly',
                afterEach: 'readonly',
            },
            extends: ['plugin:@typescript-eslint/disable-type-checked'],
            rules: {
                '@typescript-eslint/no-namespace': 'off',
                // Отключаем кастомные правила
                'i18next/no-literal-string': 'off',
                'mikhaildnd/path-checker': 'off',
                'mikhaildnd/public-api-imports': 'off',
                'mikhaildnd/layer-imports': 'off',
            },
        },
    ],
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            typescript: {
                project: './tsconfig.eslint.json',
            },
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                moduleDirectory: ['node_modules', 'src'],
            },
        },
    },
};
