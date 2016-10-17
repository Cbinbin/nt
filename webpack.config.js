const path = require('path')
const webpack = require('webpack')

module.exports = {
	entry: path.join(__dirname, './main.js'),
	output: {

		filename: 'apk.js',
		path: path.join(__dirname, './build'),
	},
	module: {
    loaders: [
      /*{
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!stylus-loader')
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },*/
      {
      	test: /\.js$/,
      	loader: 'babel',
      	query: {
      		presets: ['es2015','react'],
      	},
      	exclude: /node_modules/,
      	include: __dirname
      },
      {
      	test: /\.styl$/,
      	loader: 'style-loader!css-loader!stylus-loader',
      	exclude: /node_modules/,
      	include: __dirname
      }
      // {
      //   test: /\.(jpeg|jpg|png|gif)$/,
      //   loader: 'url-loader?limit=8192'
      // }
    ],
    	resolve: {
    		extensions: ['','.js','.styl','.json']
    	}
  }
}