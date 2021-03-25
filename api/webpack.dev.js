const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin


module.exports = merge(common, {
  mode: 'development',
	devtool: 'source-map',
	plugins: [
		...common.plugins,
		// uncomment to see your bundle analysis
    // new BundleAnalyzerPlugin()
  ]
})