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
        path: path.resolve(__dirname, "../"),
        filename: "static/js/[name].[hash].js",
        publicPath: "/"  // 打包后输出路径以/dist/开头
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "style-loader"
                    },
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
    devServer: {
        quiet: false, // true，则终端输出的只有初始启动信息。 webpack 的警告和错误是不输出到终端的。
        clientLogLevel: 'warning',
        overlay:{
            errors:true,
            warnings:false
        },
        historyApiFallback: true,
        hot: true,
        open: true,
        compress: true,
        host: '0.0.0.0',
        port: 8089,
        proxy: {
            '/proxy': {
                target: 'http://your_api_server.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/proxy': ''
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html",
            filename: "index.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
});


module.exports = webpackConfig;
