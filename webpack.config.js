const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const root = __dirname;
const buildDir = path.resolve(root, './dist');

const config = {
	entry: {
		main: path.resolve(root, 'assets', 'css', 'materialize.less'),
	},
	context: root,
	output: {
		filename: '[name].css',
		path: buildDir,
	},
	resolve: {
		extensions: ['.less'],
	},
	target: 'web',
	module: {
		loaders: [
			{
				test: /\.less$/,
				use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?sourceMap/&minimize!less-loader?sourceMap' }),
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
