'use strict'

const path = require('path')
const webpack = require('webpack')

module.exports = {
	mode: 'development',
	devtool: 'source-map',
	entry: [
		'babel-polyfill',
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:3005',
		'webpack/hot/only-dev-server',
		path.join(__dirname, 'src', 'index')
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist/'
	},
	resolve: {
		extensions: ['.js', '.json', '.jsx'],
		alias: {
		  'start-game': path.resolve(__dirname, './src/components/')
		}
	  },
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				include: /src/,
				loader: 'babel-loader'
			},
			{
				test: /\.json$/,
				exclude: /node_modules/,
				include: /src/,
				loader: 'json-loader'
			},
			{
				test: /\.(css|scss)$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		]
	}
}