import { join } from 'path';

const include = join(__dirname, '../src');

//@todo Ignore dep modules from bundle
export default {
  entry: join(__dirname, '../src/index.js'),
  output: {
    path: join(__dirname, '../dist'),
    libraryTarget: 'umd',
    library: 'hypocrite'
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', include }
    ]
  }
};
