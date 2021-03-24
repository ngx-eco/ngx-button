import * as webpack from "webpack";

const mode = process.env.NODE_ENV === "production" ? "production" : "development";

const webpackConfig: webpack.Configuration = {
  // WARNING: MUST set the 'mode' manually because it isn't done by NX/NG cli
  mode,
  module: {
    rules: [
      {
        test: /\.(pug|jade)$/,
        exclude: /\.(include|partial)\.(pug|jade)$/,
        use: [
          {
            loader: "apply-loader"
          },
          {
            loader: "pug-loader"
          }
        ]
      },
      {
        test: /\.(include|partial)\.(pug|jade)$/,
        loader: "pug-loader"
      },
    ],
  },
  plugins: [
  ],
};

module.exports = webpackConfig;
