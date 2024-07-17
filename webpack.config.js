const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist")
  },
  // devServer: {
  //   contentBase: path.join(__dirname, "dist"),
  //   port: 9000
  // },
  devServer: {
        static: {
          directory: path.resolve(__dirname, "dist") // Replace with your actual path
        },
        compress: true,
        port: 9000
      },
  mode: "development"
};




// const path = require('path');

// module.exports = {
//   // entry: './src/index.js',
//   entry: './src/store_index.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve('D:/Arif/Projects/React JS/redux-starter/dist') // Replace with your actual path
//   },
//   devServer: {
//     static: {
//       directory: path.resolve('D:/Arif/Projects/React JS/redux-starter/dist') // Replace with your actual path
//     },
//     compress: true,
//     port: 9000
//   },
//   mode: 'development',
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader'
//         }
//       }
//     ]
//   }
// };
