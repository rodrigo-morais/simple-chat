module.exports = {
  entry: __dirname + '/app/main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ["transform-object-rest-spread"]
        }
      }
    ]
  }
}
