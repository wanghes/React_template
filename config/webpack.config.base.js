const webpack = require('webpack');
const path = require('path');

const baseWebpackConfig = {
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },
    devtool: "#cheap-module-eval-source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=8192&name=static/images/[name].[ext]'
            }
        ]
    }
};


module.exports = baseWebpackConfig;
