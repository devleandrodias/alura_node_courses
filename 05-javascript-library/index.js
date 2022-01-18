const { promises } = require("fs");

const chalk = require("chalk");

function extractLinks(text) {
  const regex = new RegExp(/\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm);

  const results = [];

  let temp;

  while ((temp = regex.exec(text)) !== null) {
    results.push({
      [temp[1]]: temp[2],
    });
  }

  return !results.length ? "No links" : results;
}

async function readBlogFileAsync(path) {
  try {
    return extractLinks(await promises.readFile(path, "utf-8"));
  } catch (error) {
    throw new Error(chalk.red(error));
  } finally {
    console.log(chalk.yellow("\nOperation completed\n"));
  }
}

module.exports = { readBlogFileAsync };
