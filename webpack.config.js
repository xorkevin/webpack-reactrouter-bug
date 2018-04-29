const path = require('path');
const webpack = require('webpack');
const UglifyPlugin = require('uglifyjs-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

const createConfig = (env, argv) => {
  const config = {
    target: 'web',

    context: path.resolve(__dirname, 'src'),
    entry: {
      main: ['babel-polyfill', 'main.js'],
    },
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        react: 'preact-compat',
        'react-dom': 'preact-compat',
      },
    },
    module: {
      rules: [{test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/}],
    },

    optimization: {
      runtimeChunk: true,
      splitChunks: {
        chunks: 'all',
      },
    },

    plugins: [
      new webpack.HashedModuleIdsPlugin(),
      new HtmlPlugin({
        title: 'Nuke',
        filename: 'index.html',
        inject: 'body',
        template: '../template/index.html',
      }),
    ],

    output: {
      path: path.resolve(__dirname, 'bin'),
      publicPath: '/',
      filename: 'static/[name].[hash].js',
      chunkFilename: 'static/chunk.[name].[chunkhash].js',
    },

    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
      ignored: /node_modules/,
    },

    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
      compress: true,
      host: '0.0.0.0',
      port: 3000,
      disableHostCheck: true,
      historyApiFallback: true,
    },
  };

  if (env && env.development) {
    //dev
  } else {
    //config.optimization.minimizer = [
    //  new UglifyPlugin({
    //    cache: true,
    //    parallel: true,
    //    sourceMap: false,
    //    uglifyOptions: {
    //      compress: {
    //        unused: false,
    //      },
    //    },
    //  }),
    //];
  }

  return config;
};

module.exports = createConfig;
