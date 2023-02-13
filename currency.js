import inquirer from "inquirer";
let converter = {
    "PKR": {
        "USD": 0.0044,
        "GBP": 0.0037,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.21,
        "PKR": 271.79,
        "GBP": 1
    },
    "USD": {
        "USD": 1,
        "PKR": 225.50,
        "GBP": 0.83
    }
};
let answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "GBP", "USD"],
        message: "Select your currency"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "GBP", "USD"],
        message: "Select your convertion currency"
    },
    {
        type: "number",
        name: "amount",
        message: "Enter convertion amount"
    }
]);
if (answer.from && answer.to && answer.amount) {
    let result = converter[answer.from][answer.to] * answer.amount;
    console.log("Your convertion from " + answer.from + " to " + answer.to + " " + result + " ");
}
else {
    console.log("invalid inputs");
}
