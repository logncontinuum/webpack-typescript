const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const stdLibBrowser = require('node-stdlib-browser');
const {NodeProtocolUrlPlugin} = require('node-stdlib-browser/helpers/webpack/plugin');

const {ProvidePlugin} = require('webpack');

module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    plugins: [
        new NodeProtocolUrlPlugin(),
        new ProvidePlugin({
            process: stdLibBrowser.process,
            Buffer: [stdLibBrowser.buffer, 'Buffer']
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
    ],

    devServer: {
        port: 8080
    },

    module: {
        rules: [
            {test: /\.(xml|glsl)$/i, loader: 'raw-loader'},
            {test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/},
            {test: /\.css$/i, use: ["style-loader", "css-loader"]}
        ],
    },

    resolve: {
        alias: stdLibBrowser,
        extensions: ['.tsx', '.ts', '.js'],
    },
};