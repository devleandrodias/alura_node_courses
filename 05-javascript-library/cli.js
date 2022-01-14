import chalk from "chalk";
import { readBlogFileAsync } from "./index.js";

async function processText(pathFile) {
  const links = await readBlogFileAsync(pathFile[2]);
  console.log(chalk.yellow("list of links"), links);
}

processText(process.argv);
