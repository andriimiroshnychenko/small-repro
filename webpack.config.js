const webpack = require('webpack');
const ENV = 'production';
const path = require('path');

const PATHS = {
    SRC: path.join(__dirname, 'src'),
    DIST: path.join(__dirname, 'dist')
  };

const webpackConfig = {
  entry: {
    index: `${PATHS.SRC}/index.js`
  },

  output: {
    path: `${PATHS.DIST}`,
    filename: '[name].js',
    sourceMapFilename: '[file].map',
    libraryTarget: 'umd',
    pathinfo: false
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    modules: ['node_modules', 'src']
  },


  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ]
      }
    ]
  }
};

module.exports = webpackConfig;
