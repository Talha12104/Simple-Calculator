#! /usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([{
        name: "num1",
        type: "number",
        message: "Enter Your First Number"
    },
    {
        name: "num2",
        type: "number",
        message: "Enter Your Second Number"
    },
    {
        name: "Operator",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    }
]);
if (answer.Operator === "Addition") {
    console.log(answer.num1 + answer.num2);
}
else if (answer.Operator === "Subtraction") {
    console.log(answer.num1 - answer.num2);
}
else if (answer.Operator === "Multiplication") {
    console.log(answer.num1 * answer.num2);
}
else if (answer.Operator === "Division") {
    console.log(answer.num1 / answer.num2);
}
else
    console.log("Undefined");
