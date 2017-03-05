var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: 'dest/assets',
    filename: 'bundle.js',
    publicPath: "assets"
  },
  devServer: {
    inline: true,
    contentBase: './dest',
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader'
      },
    ]
  }
}
