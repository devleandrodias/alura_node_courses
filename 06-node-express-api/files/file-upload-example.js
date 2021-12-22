const fs = require("fs");
const path = require("path");

const getPathFile = (file) => path.resolve(__dirname, "..", "assets", file);

function writeFileNewDogUsingBuffers() {
  fs.readFile(getPathFile("dog.jpg"), (err, data) => {
    if (err) console.error(err);

    fs.writeFile(getPathFile("buffer-dog.jpg"), data, (err) => {
      if (err) console.error(err);
    });
  });
}

function writeFileNewDogUsingStreams() {
  fs.createReadStream(getPathFile("dog.jpg"))
    .pipe(fs.createWriteStream(getPathFile("stream-dog.jpg")))
    .on("finish", () => console.log("Dog Stream Finish..."));
}

writeFileNewDogUsingStreams(); // Async
writeFileNewDogUsingBuffers(); // Sync
