const path = require("path");

function getPath(file) {
  return path.resolve(__dirname, "..", "assets", file);
}

function getPathImageFile(file, extension) {
  return path.resolve(
    __dirname,
    "..",
    "assets",
    "images",
    `${file}${extension}`
  );
}

module.exports = { getPath, getPathImageFile };
