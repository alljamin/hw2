module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
      
    loaders: [
      {
        loader: 'babel',
        query: {
          presets: ['react','es2015'],
        },
        exclude: /node_modules/
      }
    ]
  },
  
  devServer:{
      port: 3000
  }
};