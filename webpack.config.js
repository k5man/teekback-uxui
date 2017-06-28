const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const root = __dirname;
const buildDir = path.resolve(root, './dist');

const config = {
	entry: {
		main: path.resolve(root, 'assets', 'css', 'materialize.global-scss'),
	},
	context: root,
	output: {
		filename: '[name].css',
		path: buildDir,
	},
	resolve: {
		extensions: ['.scss'],
	},
	target: 'web',
	module: {
		loaders: [
			{
				test: /\.sass|\.css|\.scss|\.global-scss$/,
				use: ExtractTextPlugin.extract({ use: 'css-loader?minimize!sass-loader' }),
			},
			{
				test: /\.woff|\.woff2|\.eot|\.ttf$/,
				use: 'url-loader?prefix=font/&limit=5000',
			},
		],
	},
	plugins: [
		new ExtractTextPlugin({
			filename: '[name].css',
			disable: false,
			allChunks: true,
		}),
		new CleanWebpackPlugin(buildDir, {
			root,
			verbose: true,
		}),
	],
};

module.exports = config;
