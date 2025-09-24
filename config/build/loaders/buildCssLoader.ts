import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoader(isDev: boolean) {
    return {
        // test: /\.(css|s[ac]ss)$/i,
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    esModule: false, //! https://github.com/webpack-contrib/css-loader/blob/master/CHANGELOG.md#700-2024-04-04
                    modules: {
                        namedExport: false, //!
                        exportLocalsConvention: 'as-is', //!
                        auto: (resourcePath: string) =>
                            Boolean(resourcePath.includes('.module.')),
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]',
                    },
                },
            },
            'sass-loader',
        ],
    };
}

// import MiniCssExtractPlugin from 'mini-css-extract-plugin';
//
// export function buildCssLoader(isDev: boolean) {
//     return {
//         test: /\.s[ac]ss$/i,
//         use: [
//             isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
//             {
//                 loader: 'css-loader',
//                 options: {
//                     modules: {
//                         auto: (resourcePath: string) => Boolean(resourcePath.includes('.module.')),
//                         localIdentName: isDev
//                             ? '[path][name]__[local]--[hash:base64:5]'
//                             : '[hash:base64:8]',
//                     },
//                 },
//             },
//             'sass-loader',
//         ],
//     };
// }
