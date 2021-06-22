const path = require("path")
const webpack = require("webpack")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
//const {GenerateSW} = require('workbox-webpack-plugin')

module.exports = {
    entry: "./src/client/app.js",
    output: {
        path: path.resolve(process.cwd(),"dist"),
        libraryTarget: "var",
        library: "Client",
    },
    mode: "development",
    devtool: "source-map",
    devServer: {
        static: path.resolve(process.cwd(),"dist"),
        port: "8080"
    },
    stats: "verbose",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /.s?css$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                    }
                  },
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
        //new GenerateSW()
    ]
}
