const fs = require("fs");
const path = require("path");

const getPathFile = (file) => path.resolve(__dirname, "..", "assets", file);

function writeFileNewDog() {}

fs.readFile(getPathFile("dog.jpg"), (err, data) => {
  if (err) console.error(err);

  fs.writeFile(getPathFile("new-dog.jpg"), data, (err) => {
    if (err) console.error(err);
  });
});
