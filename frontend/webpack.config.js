const path = require("path");
const scss = require("./webpack/scss");
const entries = require("./webpack/entries").entry;
const aliases = require("./webpack/aliases");

entries.scss = './src/style/sass/main.scss';

console.log("entries:", entries);
module.exports = {
  watch: true,
  mode: "development",
  entry:  entries,
  output: {
    path: path.resolve(__dirname, "../public"),
    filename: "[name]-bundle.js",
  },
  resolve: {
    alias: aliases,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      scss.rule
    ]
  },
  plugins: [...scss.plugins],
};
