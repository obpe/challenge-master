const path = require("path");
const HtmlWebPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    // path: path.join(__dirname, "/dist"),
    path: path.join(__dirname, "../../public"),
    filename: "index_bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  plugins: [
    new HtmlWebPlugin({
      template: "../../public/index.html",
      favicon: "../../public/favicon.png",
    }),
  ],
};
