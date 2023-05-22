const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const { VueLoaderPlugin } = require("vue-loader");

const deps = require("./package.json").dependencies;
module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: 'http://localhost:8080/'
    },
    resolve: {
        extensions: [".js", ".vue"]
    },
    devServer: {
        port: 8080,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
                use: {
                    loader: "file-loader",
                },
            },
            {
                test: /\.vue$/,
                use: {
                    loader: "vue-loader"
                }
            },
            {
                test: /\.scss|\.css|\.sass$/,
                use: ["vue-style-loader", "style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                },
            },
            
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "product",
            filename: "remoteEntry.js",
            exposes: {
                './ProductApp': './src/bootstrap',
                './ProductComponent': './src/components/Product',
                './ShopProduct': './src/components/ShopProduct'
            },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new VueLoaderPlugin()
    ],
};