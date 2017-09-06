let path = require('path');
let webpack = require('webpack');
let postcssAssets = require('postcss-assets');
let postcssNext = require('postcss-cssnext');
let stylelint = require('stylelint');
let ManifestPlugin = require('webpack-manifest-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let appConfig = require('../main');

let config = {
  bail: true,

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [path.resolve(__dirname), 'node_modules', 'app', 'app/redux'],
    alias: {
      // 'jquery': path.join(__dirname, './jquery-stub.js')
      'jquery': path.resolve(__dirname, 'jquery-stub.js')
    },
  },

  entry: {
    app: './src/client.tsx',
    vendor: [
      './src/vendor/main.ts',
      'react',
      'react-dom',
      'react-router',
      'react-helmet',
      'react-redux',
      'react-router-redux',
      'redux',
      'redux-connect',
      'redux-thunk'
    ]
  },

  output: {
    path: path.resolve('./build/public'),
    publicPath: '/public/',
    filename: 'js/[name].[chunkhash].js'
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        loader: 'tslint-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        include: path.resolve('./src/app'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules&importLoaders=2&localIdentName=[local]___[hash:base64:5]',
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.css$/,
        exclude: path.resolve('./src/app'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
          ]
        })
      },
      {
        test: /\.eot(\?.*)?$/,
        loader: 'file-loader?name=fonts/[hash].[ext]'
      },
      {
        test: /\.(woff|woff2)(\?.*)?$/,
        loader: 'file-loader?name=fonts/[hash].[ext]'
      },
      {
        test: /\.ttf(\?.*)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[hash].[ext]'
      },
      {
        test: /\.svg(\?.*)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=fonts/[hash].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'url-loader?limit=1000&name=images/[hash].[ext]'
      }
    ]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true,
      options: {
        context: __dirname,
        tslint: {
          failOnHint: true
        },
        postcss: function () {
          return [
            stylelint({
              files: '../../src/app/*.css'
            }),
            postcssNext(),
            postcssAssets({
              relative: true
            }),
          ];
        },
      },
      minimize: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/[name].[chunkhash].js',
      minChunks: Infinity
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: { warnings: true }
}),
    new ExtractTextPlugin('css/[name].[hash].css'),
    new ManifestPlugin({
      fileName: '../manifest.json'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),
        NODE_ENV: JSON.stringify('production'),
        API_URL: JSON.stringify(process.env.API_URL || 'http://' + appConfig.host + ':' + appConfig.port)
      }
    })
  ]
};

require('./copy_files');
module.exports = config;
