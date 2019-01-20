const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin') ;

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: './build',
        port: 3000
    },
    watch: NODE_ENV === 'development',
    mode: NODE_ENV ,
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),

        new CleanWebpackPlugin(['build']),
        new CopyWebpackPlugin([
            {from:'public'}
        ]),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            minify: NODE_ENV === 'development' ? false : {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            }
        })

    ]
};