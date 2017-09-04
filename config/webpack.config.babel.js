import path from 'path';
import nodeExternals from 'webpack-node-externals';

// const include = join(__dirname, '../src');

//@todo Ignore dep modules from bundle
export default {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'umd',
    library: 'hypocrite'
  },
  target: 'node',
  externals: [nodeExternals()],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, '../src')]
      }
    ]
  }
};
