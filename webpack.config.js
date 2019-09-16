const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "/images",
          publicPath: "images"
        }
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "/fonts",
          publicPath: "fonts"
        }
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [MiniCssExtractPlugin, "css-loader", "sass-loader"]
      }
    ]
  },
  plugin: [
    new MiniCssExtractPlugin({
      filename: "styles.css"
    })
  ]
};
