#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const answer = await inquirer.prompt ([
  {
    message: chalk.red(chalk.bgYellowBright("Enter first number\n")),
    type: "number",
    name: "firstNumber",
  },
  {
    message: chalk.red(
      chalk.bgYellowBright("Select any operator for perform Calculation\n")
    ),
    type: "list",
    name: "operator",
    choices: [
      "Addition",
      "Substraction",
      "Multiplication",
      "Division",
      "Modulus",
    ],
  },
  {
    message: chalk.red(chalk.bgYellowBright("Enter second number\n")),
    type: "number",
    name: "secondNumber",
  },
]);

chalk.bgYellow(answer);

if (answer.operator === "Addition") {
  console.log(chalk.bgMagentaBright(answer.firstNumber + answer.secondNumber));
} else if (answer.operator === "Substraction") {
  console.log(chalk.bgMagentaBright(answer.firstNumber - answer.secondNumber));
} else if (answer.operator === "Multiplication") {
  console.log(chalk.bgMagentaBright(answer.firstNumber * answer.secondNumber));
} else if (answer.operator === "Division") {
  console.log(chalk.bgMagentaBright(answer.firstNumber / answer.secondNumber));
} else if (answer.operator === "Modulus") {
  console.log(chalk.bgMagentaBright(answer.firstNumber % answer.secondNumber));
} else {
  console.log("Please select valid operator");
}
// "I've created a simple CLI calculator using TypeScript, Node.j