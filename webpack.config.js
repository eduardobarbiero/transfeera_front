const path = require('path');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcRoot = path.resolve(__dirname, 'src');
const appRoot = path.resolve(srcRoot, 'app');

module.exports = (env) => {

  const isDev = env == 'development';

  return {
    context: path.resolve(__dirname),    
    entry: {
      main: './src/app/main.js',
      vendor: [
        'react',
        'react-dom',                
        'react-bootstrap',        
        'babel-polyfill',
        'jquery'
      ]
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: isDev
        ? 'js/[name].bundle.js'
        : 'js/[name].[hash].bundle.js',
      sourceMapFilename: isDev
        ? 'js/[name].bundle.map'
        : 'js/[name].[chunkhash].bundle.map',
      chunkFilename: isDev
        ? 'js/[id].chunk.js'
        : 'js/[id].[chunkhash].chunk.js',

      publicPath: '/'
    },
    resolve: {
      alias: {
          "react": __dirname + "/node_modules/react"
      }
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          query: {
            "presets": [
              [
                "es2015", {
                  "modules": false
                }
              ],
              "stage-0",              
              "react"              
            ],
            "plugins": [
              "react-hot-loader/babel", 
              "transform-decorators-legacy", 
              "transform-decorators"              
            ]
          },
          exclude: [/node_modules/]
        }, {
          test: /\.css$/,
          loader: "style-loader!css-loader"
        }, {
          test: /\.json$/,
          loader: "json-loader"
        }, {
          test: /\.(jpe?g|png|gif)$/,
          loader: 'file-loader',
          query: {
            name: 'assets/img/[name].[ext]'
          }
        }
      ]

    },
    resolve: {
      extensions: [
        ".js", ".jsx"
      ],      
      modules: [appRoot, 'node_modules/']
    },
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      port: 2200,
      compress: true,
      publicPath: '/',
      stats: "minimal"
    },
    stats: "minimal",
    performance: {
      hints: false
    },
    devtool: false, 
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new CopyWebpackPlugin([
        {
          from: './src/index.html'
        }, {
          from: './src/assets',
          to: './assets'
        }        
      ]),
      
      new HtmlWebpackPlugin({
        template: path.resolve(srcRoot, 'index.html'),
        chunksSortMode: 'dependency'
      }),

      new webpack
        .optimize
        .CommonsChunkPlugin({name: 'vendor', filename: 'js/[hash].vendor.js', minChunks: Infinity}),

      new webpack.DefinePlugin({
        process: {
          env: {
            NODE_ENV: isDev
              ? '"development"'
              : '"production"'
          }
        }
      })
    ].concat(!isDev ? [ new webpack.optimize.UglifyJsPlugin({compress: { warnings: false } })] : [])
  }
};
