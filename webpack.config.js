const path = require('path')

module.exports = (env, argv) => {
  return {
    entry: "./src/app.js",
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build'),
      publicPath: 'build'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [
                "@babel/plugin-proposal-object-rest-spread",
                "@babel/plugin-transform-async-to-generator",
                "@babel/plugin-proposal-private-methods",
                "@babel/plugin-proposal-class-properties"
              ]
            }
          }
        }
      ]
    }
  }
}