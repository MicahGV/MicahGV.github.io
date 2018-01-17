"use strict";
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');


module.exports = {
    entry: {
        app:'./src/app.js',
        canvas: './src/canvas.js'
    },
    devServer: {
        contentBase: './dist',
        port:5005,
    },
    output: {
        path:path.resolve(__dirname, 'dist'),
        publicPath:'/MicahGV.github.io',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test:/\.scss$/, 
                use: ['style-loader', 'css-loader','sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader:'file-loader',
                        options: {
                            name:'[name].[ext]',
                            outputPath: 'assets/',
                            publicPath: 'assets/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon:'./src/assets/favicon.ico',
            title:'MicVig',
            filename:'index.html',
            template: './src/templates/index.html',
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
          }),
        //new CleanWebpackPlugin(['./dist']),
        //new webpack.NamedModulesPlugin(),
        //new webpack.HotModuleReplacementPlugin(),
    ],
    watch: true,
};