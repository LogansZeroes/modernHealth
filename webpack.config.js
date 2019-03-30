const path = require('path');
const ExtractTextPlugin  = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const config = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: 'css-loader'
                    })
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./index.html",
            filename: "./index.html"
        }),
        new ExtractTextPlugin({filename: 'style.css'})
    ]
};

module.exports = config;
