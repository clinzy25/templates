const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development';

/**
 * Switch dev and prod mode dynamically
 */
if (process.env.NODE_ENV === 'production') {
    mode = 'production';
}

module.exports = {
    mode: mode,
    module: {
        rules: [
            {
                test: /\.s?css/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    plugins: [new MiniCssExtractPlugin()],
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
        watchContentBase: true,
        hot: true,
    },
};

/**
 * @property {filename} - name of bundled file
 * @property {devtool} - 'false' will remove source maps from main.js. 'source-map' will show pre-built code in the browser
 * @property {watchContentBase} - watches the dist folder for changes, for live reloading of index.html changes
 * @property {hot} - hot reloading exchanges, adds, or removes modules while an application is running, without a full reload
 */
