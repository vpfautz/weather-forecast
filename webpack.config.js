module.exports = {
  entry: [
    './frontend/src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'frontend/bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './frontend'
  }
};
