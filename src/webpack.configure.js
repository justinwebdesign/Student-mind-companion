const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { importLoaders: 1 },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: { extensions: [".js", ".jsx"] },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, "public"),
    historyApiFallback: true,
    hot: true,
    port: 3000,
    open: true,
  },
};