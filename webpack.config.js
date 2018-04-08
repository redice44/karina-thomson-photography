const path = require( 'path' );

module.exports = {

  entry: {
    app: './src/app/index.tsx',
    contact: './src/app/contact.tsx',
    soon: './src/app/soon.tsx'
  },
  output: {

    filename: '[name].bundle.js',
    path: path.join( __dirname, 'dist', 'server', 'assets', 'js' )

  },

  devtool: 'source-map',
  resolve: {

    extensions: [ '.ts', '.tsx', '.js', '.json' ]

  },
  module: {

    rules: [

      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }

    ]

  },

  externals: {

    'react': 'React',
    'react-dom': 'ReactDOM'

  }

};
