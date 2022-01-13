import { promises } from "fs";
import { resolve } from "path";

import chalk from "chalk";

function extractLinks(text) {
  const regex = new RegExp(/\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm);

  const results = [];

  let temp;

  while ((temp = regex.exec(text)) !== null) {
    results.push({
      [temp[1]]: temp[2],
    });
  }

  return results;
}

async function readBlogFileAsync(fileName) {
  const path = resolve("files", fileName);

  try {
    const text = await promises.readFile(path, "utf-8");

    console.log(extractLinks(text));
  } catch (error) {
    throw new Error(chalk.red(error));
  } finally {
    console.log(chalk.yellow("\nOperation completed"));
  }
}

readBlogFileAsync("blog.md");
