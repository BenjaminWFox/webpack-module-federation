const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
module.exports = {
  // Where files should be sent once they are bundled
  mode: 'development',
  entry: './src/index.ts',
  output: {
    publicPath: '/',
    path: path.join(__dirname, '/dist'),
    filename: 'index.js',
  },
  // webpack 5 comes with devServer which loads in development mode
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    open: false,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  // Rules of how webpack will take our files, complie & bundle them for the browser
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        loader: 'ts-loader',
        exclude: [/node_modules/],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new ModuleFederationPlugin({
      name: "host",
      remoteType: 'var',
      remotes: {
        primeBlue: "remoteNameBlue", //remote module
        primeRed: "remoteNameRed" //remote module
      },
      shared: {
        'react': { singleton: true, eager: true } ,
        'react-dom': { singleton: true, eager: true }
      }
    }),
  ],
};
