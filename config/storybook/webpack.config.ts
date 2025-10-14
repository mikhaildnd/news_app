import { RuleSetRule, DefinePlugin, type Configuration } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        locales: '',
        buildLocales: '',
    };

    // config!.resolve!.modules!.push(paths.src);
    config.resolve!.modules = [paths.src, 'node_modules'];
    config.resolve!.extensions!.push('.ts', '.tsx');

    // убираем обработку svg из дефолтных правил
    config.module!.rules = (config.module!.rules as RuleSetRule[]).map(
        (rule) => {
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        },
    );

    // свой loader для svg
    config.module!.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    // css loader
    config.module!.rules.push(buildCssLoader(true));

    // фикс для картинок (без hash для Storybook)
    config.module!.rules.push({
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'static/media/[name][ext]', // без [hash]
        },
    });

    config.plugins!.push(
        new DefinePlugin({
            __IS_DEV__: true,
            __API__: JSON.stringify(''),
            __PROJECT__: JSON.stringify('storybook'),
        }),
    );

    return config;
};
