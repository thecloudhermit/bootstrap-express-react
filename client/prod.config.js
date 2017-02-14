const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const merge = require('webpack-merge');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var dist = path.join(__dirname, 'dist');

module.exports ={
    devtool: 'cheap-module-source-map',
    entry: ['babel-polyfill', './src/js/index.js'],
    output: {
        path: dist,
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin("styles.css")
    ]
};