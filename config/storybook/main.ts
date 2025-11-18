import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    staticDirs: ['../../public'],
    addons: [
        '@storybook/addon-webpack5-compiler-babel',
        '@storybook/addon-docs',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {
            lazyCompilation: true,
        },
    },
    core: {
        builder: 'webpack5',
    },
};
export default config;
