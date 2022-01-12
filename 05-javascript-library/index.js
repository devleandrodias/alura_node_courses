import chalk from "chalk";

console.log(chalk.red("Leandro"));
console.log(chalk.green("Thaísa"));
console.log(chalk.black.bgYellow("Alura"));

console.log(`
  CPU: ${chalk.red("90%")}
  RAM: ${chalk.green("40%")}
  DISK: ${chalk.yellow("70%")}
`);
