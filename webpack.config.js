const path = require('path');

module.exports = {
  entry: './src/WXMock.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'WXMock.js'
  }
};