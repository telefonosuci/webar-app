const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // eslint-disable-line import/no-extraneous-dependencies
const StyleLintPlugin = require("stylelint-webpack-plugin"); // eslint-disable-line import/no-extraneous-dependencies

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  rule: {
    test: /\.(scss|sass|css)$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: '/public',
        },
      },
      'css-loader',
      'sass-loader'
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name]-bundle.css`
    }),
    new StyleLintPlugin(),
  ],
};
