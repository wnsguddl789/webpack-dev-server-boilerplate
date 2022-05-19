const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const port = process.env.PORT || 4000;

module.exports = {
  // 개발환경
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx"], // No need to write .js or .jsx for files under entry
  },

  // 애플리케이션 시작 경로
  entry: { "js/app": "./src/index.js" },

  // 번들된 파일 경로
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist/"),
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/, //Regular expression. Apply rules to js and jsx file
        loader: "babel-loader", // specifies which rule to apply
        options: {
          // Options of the module (i.e. babel)
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 5% in KR", "last 2 chrome versions"],
                },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "react-hot-loader/babel",
          ],
        },
      },
      {
        // 2
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ debug: true }),
    new RefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "index.html",
    }),
  ],

  devServer: {
    host: "localhost",
    port: port,
    open: true,
  },
};
