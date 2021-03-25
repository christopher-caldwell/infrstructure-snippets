
const webpack = require('webpack')
const slsw = require('serverless-webpack');
const path = require('path')



module.exports = {
  entry: slsw.lib.entries,
  // output: {
  //   libraryTarget: 'commonjs2',
  // },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.wasm', '.ts', '.tsx', '.mjs', '.cjs', '.js', '.json']
  },
  target: 'node',
  plugins: [
    new webpack.NormalModuleReplacementPlugin(/\.\.\/migrate/, '../util/noop.js'),
    new webpack.NormalModuleReplacementPlugin(/\.\.\/seed/, '../util/noop.js'),
    new webpack.IgnorePlugin(/mariasql/, /\/knex\//),
    new webpack.IgnorePlugin(/mssql/, /\/knex\//),
    new webpack.IgnorePlugin(/mysql/, /\/knex\//),
    new webpack.IgnorePlugin(/mysql2/, /\/knex\//),
    new webpack.IgnorePlugin(/oracle/, /\/knex\//),
    new webpack.IgnorePlugin(/oracledb/, /\/knex\//),
    new webpack.IgnorePlugin(/pg-query-stream/, /\/knex\//),
    new webpack.IgnorePlugin(/sqlite3/, /\/knex\//),
    new webpack.IgnorePlugin(/strong-oracle/, /\/knex\//),
    new webpack.IgnorePlugin(/redshift/, /\/knex\//),
    new webpack.IgnorePlugin(/pg-native/, /\/pg\//)
  ]
}
