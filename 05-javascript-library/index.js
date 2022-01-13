import { promises } from "fs";
import { resolve } from "path";

import chalk from "chalk";

async function readBlogFileAsync(fileName) {
  const path = resolve("files", fileName);

  try {
    const data = await promises.readFile(path, "utf-8");
    console.log(chalk.green(data));
  } catch (error) {
    throw new Error(chalk.red(error));
  } finally {
    console.log(chalk.yellow("Operation completed"));
  }
}

readBlogFileAsync("blog.md");
