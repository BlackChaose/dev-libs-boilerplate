var path = require('path');
module.exports = {
  entry: '<full path to entry - for example - devlib.js in folder src>',
  output: {
    path: '<full path to public/js>',
    filename: '<name, for example devlib.js>',
    libraryTarget: 'var',
    library: 'ascetic_'
  },    
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9001,
    liveReload: true,
    watchContentBase: true
  },
    mode: 'development',
    watch: true,
    optimization: {
			minimize: true
	}
  };
