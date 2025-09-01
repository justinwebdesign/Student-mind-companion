const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  
  return {
    // If your entry file is src/index.jsx instead of src/index.js, change this line:
    entry: "./src/index.js",
    output: {
      filename: "bundle.[contenthash].js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
      publicPath: isProduction ? "/Student-mind-companion/" : "/",
    },
    mode: argv.mode || "development",
    devtool: isProduction ? false : "source-map",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.css$/i,
          use: [
            "style-loader",
            { loader: "css-loader", options: { importLoaders: 1 } },
            "postcss-loader",
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
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
};
