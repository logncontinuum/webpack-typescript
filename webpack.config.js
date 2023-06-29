const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],

    devServer: {
        port: 9000
    },

    module: {
        rules: [
            {test: /\.xml$/i, loader: 'raw-loader'},
            {test: /\.ts?$/, use: 'ts-loader', exclude: /node_modules/},
            {test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/}
        ],
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};