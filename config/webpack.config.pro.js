const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseWebpackConfig = require("./webpack.config.base");

const isProd = process.env.NODE_ENV === "production";

const webpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    entry: {
        app: "./src/main.js"
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "static/js/[name].[hash].js",
        publicPath: "/"  // 打包后输出路径以/dist/开头
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: false }
                    }
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[hash].css',
        })
    ]
});


module.exports = webpackConfig;
