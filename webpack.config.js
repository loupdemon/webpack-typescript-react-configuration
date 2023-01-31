
const path = require('path');

const HtmlWebpackPluin = require('html-webpack-plugin');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    mode : 'development',
    entry : './src/index',
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : 'js/bundle.js'
    },
    resolve : {
        extensions : ['.js', '.jsx', '.ts', '.tsx']
    },
    
    module : {
        rules : [
            {
                // test : /\.jsx?$/,
                test : /\.(ts|js)x?$/,
                exclude : /node_modules/,
                use : {
                    loader : 'babel-loader',
                    options : {
                        presets : ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },

    plugins : [
        new HtmlWebpackPluin({
            template : './src/public/index.html'
        }),
        new ForkTsCheckerWebpackPlugin()
    ],


    devServer: {
        port: 3000,
        static: './dist'
        // contentBase: path.join(__dirname, 'dist'),
        //contentBase: './dist',
        //  compress: true,
    },

    devtool: 'source-map'

}