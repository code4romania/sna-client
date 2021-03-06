let fs = require('fs');
let path = require('path');
let webpack = require('webpack');
let postcssAssets = require('postcss-assets');
let postcssNext = require('postcss-cssnext');
let stylelint = require('stylelint');

let nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function (x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function (mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

let config = {
  externals: nodeModules,
  target: 'node',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [path.resolve(__dirname), 'node_modules', 'app', 'app/redux'],
    alias: {
      // 'jquery': path.join(__dirname, './jquery-stub.js')
      'jquery': path.join(__dirname, 'jquery-stub.js')
    },
  },

  entry: './src/server.tsx',

  output: {
    path: path.resolve('./build/public'),
    filename: '../server.js',
    publicPath: '/public/',
    libraryTarget: 'commonjs2'
  },

  module: {
    rules: [{
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'url-loader?limit=1000&name=images/[hash].[ext]'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      },
      {
        test: /\.css$/,
        loaders: [
          'isomorphic-style-loader',
          'css-loader?modules&importLoaders=2&localIdentName=[local]___[hash:base64:5]'
        ]
      }
    ]
  },

  plugins: [
      new webpack.LoaderOptionsPlugin({
        debug: false,
        options: {
          context: __dirname,
          postcss: function () {
            return [
              postcssNext(),
              postcssAssets({
                relative: true
              }),
            ];
          }
        }
      })
      // new webpack.DefinePlugin({
      //   'process.env': {
      //     API_URL: JSON.stringify(process.env.API_URL || 'http://' + appConfig.host + ':' + appConfig.port)
      //   }
      // })
  ],

  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false
  }
};

require('./copy_files');

module.exports = config;
