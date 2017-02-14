const path = require('path');
const autoprefixer = require('autoprefixer');
const merge = require('webpack-merge');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

const development = require('./dev.config');
const production = require('./prod.config');
let dist = path.join(__dirname, 'dist');

const TARGET = process.env.npm_lifecycle_event;

const common = {
    resolve: {
        extensions: ['', '.js', '.jsx', '.json', '.css']
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.(png|ico|html|txt|ttf)$/,
                loader: "file?name=[name].[ext]"
            },
            {
                test: /\.css/,
                loader: ExtractTextPlugin.extract('style', 'css', 'postcss')
            },
            {
                test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
                loader: 'url'
            }
        ]
    },
    postcss: function() {
        return [
            autoprefixer({
                browsers: [
                    "last 2 Chrome versions",
                    "last 2 firefox versions",
                    "not ie < 9"
                ]
            })
        ]
    }
};

if (TARGET === 'prod' || !TARGET) {
    module.exports = merge(production, common);
} else {
    module.exports = merge(development, common);
}