#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
var answer = await inquirer_1.default.prompt([
    {
        message: chalk_1.default.red(chalk_1.default.bgYellowBright("Enter first number\n")),
        type: "number",
        name: "firstNumber",
    },
    {
        message: chalk_1.default.red(chalk_1.default.bgYellowBright("Select any operator for perform Calculation\n")),
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
        message: chalk_1.default.red(chalk_1.default.bgYellowBright("Enter second number\n")),
        type: "number",
        name: "secondNumber",
    },
]);
chalk_1.default.bgYellow(answer);
if (answer.operator === "Addition") {
    console.log(chalk_1.default.bgMagentaBright(answer.firstNumber + answer.secondNumber));
}
else if (answer.operator === "Substraction") {
    console.log(chalk_1.default.bgMagentaBright(answer.firstNumber - answer.secondNumber));
}
else if (answer.operator === "Multiplication") {
    console.log(chalk_1.default.bgMagentaBright(answer.firstNumber * answer.secondNumber));
}
else if (answer.operator === "Division") {
    console.log(chalk_1.default.bgMagentaBright(answer.firstNumber / answer.secondNumber));
}
else if (answer.operator === "Modulus") {
    console.log(chalk_1.default.bgMagentaBright(answer.firstNumber % answer.secondNumber));
}
else {
    console.log("Please select valid operator");
}
// "I've created a simple CLI calculator using TypeScript, Node.j
