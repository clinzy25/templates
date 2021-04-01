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
        hot: true,
    },
};

/**
 * @property {app} - which file to parse
 * @property {path} - imported above, __dirname will default current dir, 'build' will be dirname of bundled output
 * @property {filename} - name of bundled file
 * @property {options} - 'query' deprecated
 * @property {devtool} - 'false' will remove source maps from main.js. 'source-map' will show pre-built code in the browser
 */
