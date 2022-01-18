const chalk = require("chalk");
const { readBlogFileAsync } = require("./index.js");
const { validateUrls } = require("./http-validation.js");

async function processText(pathFile) {
  const links = await readBlogFileAsync(pathFile[2]);

  if (pathFile[3] === "validate") {
    console.log(
      chalk.yellow("list of links validated"),
      await validateUrls(links)
    );
  } else {
    console.log(chalk.yellow("list of links"), links);
  }
}

processText(process.argv);
