const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeJsPlugin = require("optimize-js-plugin");

const plugins = [
  new HtmlWebpackPlugin({
    template: "src/index.html",
    filename: "index.html",
    inject: "body"
  })
];

new OptimizeJsPlugin({
  sourceMap: false
});

module.exports = env => {
  const environment = env || "production";
  if (environment === "production") {
    plugins.push(
      new OptimizeJsPlugin({
        sourceMap: false
      })
    );
  }

  return {
    optimization: {
      minimize: true
    },

    mode: environment,
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "app.bundle.js"
    },

    plugins,

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              plugins: env !== "production" ? ["react-hot-loader/babel"] : []
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            { loader: "style-loader" },
            {
              loader: "css-loader",
              options: {
                modules: true
              }
            }
          ]
        }
      ]
    }
  };
};