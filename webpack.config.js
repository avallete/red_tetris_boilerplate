const params = require('./params');
const path = require('path');

module.exports = {
  entry: './src/client/index.js',

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },

  devServer: {
    host: params.client.host,
    port: params.client.port,
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['env', 'react', 'stage-0'],
      },
    }],
  },
};
