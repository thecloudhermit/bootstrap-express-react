const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const merge = require('webpack-merge');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const dist = path.join(__dirname, 'dist');

module.exports = {
    devtool: 'eval',
    entry: {
        App: [
            './src/js/index.js'
        ]
    },
    output: {
        path: dist,
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.NoErrorsPlugin,
        new webpack.optimize.OccurrenceOrderPlugin(),
        new ExtractTextPlugin("styles.css")
    ],
    devServer: {
        proxy: {
            '/api/v1': {
                target: 'http://localhost:3000',
                secure: false
            }
        }
    }
};