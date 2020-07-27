const path = require("path");
module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        // '?' makes s optional; bcoz normalize-css is css file; so css also needs to be run
        use: ["style-loader", "css-loader", "sass-loader"],
        //use is used to load an array of loaders together
      },
    ],
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"), //publicfolder directory is given,
    historyApiFallback: true, //tells react to use client-side routing
  },
};
// test:/\.js$/=regular expression; tells to instruct which type of files to run
