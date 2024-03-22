const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: "./src/index.js",
	devtool: 'inline-source-map',
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			inject: 'head',
			scriptLoading: 'defer',
		})
	]
};
