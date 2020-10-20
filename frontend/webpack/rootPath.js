const path = require("path");

console.log("Root path: ", path.join(__dirname, ".."));

module.exports = {
  root: path.join(__dirname, ".."),
};
