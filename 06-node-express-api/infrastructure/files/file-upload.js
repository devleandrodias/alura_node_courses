const fs = require("fs");
const path = require("path");

const {
  getPath,
  getPathImageFile,
} = require("../../helpers/get-path-image-file");

function fileIsValid(extension) {
  return ["jpg", "png", "jpeg"].includes(extension.substring(1));
}
module.exports = (pathFile, file, cb) => {
  const originalPath = getPath(pathFile);
  const extension = path.extname(originalPath);
  const newPath = getPathImageFile(file, extension);

  if (fileIsValid(extension)) {
    fs.createReadStream(originalPath)
      .pipe(fs.createWriteStream(newPath))
      .on("finish", () => cb(newPath));
  }
};
