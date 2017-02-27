const { smart } = require('webpack-merge');
const base = require('./webpack.config.base.js');

module.exports = smart(base, {
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader'
        ]
      },
    ]
  },
});
