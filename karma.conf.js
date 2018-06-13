const path = require('path');
const webpack = require('webpack');
const srcRoot = path.resolve(__dirname, 'src');
const appRoot = path.resolve(srcRoot, 'app');

module.exports = function (config) {
  config.set({        
    basePath: '',
    browsers: [ 'Chrome' ],
    singleRun: true,
    frameworks: [ 'mocha'],        
    files: [
      'tests.webpack.js'
    ],
    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ]
    },
    resolve: {
      extensions: [
        "", ".js", ".jsx"
      ],      
      modules: [appRoot, 'node_modules/']
    },
    module: {
      rules: [
          {
              test: /\.js$/,
              exclude: [/node_modules/],
              use: ['babel-loader']
          },
      ],
    },
    reporters: [ 'dots' ], 
    webpack: { 
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader' }
        ]
      }
    },
    webpackServer: {
      noInfo: true
    }
  });
};