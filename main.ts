#! /usr/bin/env node

import inquirer from "inquirer"

const currency : any =
{
USD : 1, //Base currencyhgj
EUR: 0.91,
GBP: 0.79,
CAD: 0.73,
PKR: 280
}; 

let userAnswer = await inquirer.prompt(
    [
        {
            name: "from",
            type: "list",
            message: "Enter currency name you possessed.",
            choices: ["USD", "EUR", "GBP", "CAD", "PKR"]
        }
        ,
        {
            name: "to",
            type: "list",
            message:"Enter currenty name you want to exchange in.",
            choices: ["USD", "EUR", "GBP", "CAD", "PKR"]
        }
        ,
        {
            name: "amount",
            type: "number",
            message:  "Enter your amount"
        }
    ]
)
let fromCurrency = currency[userAnswer.from]
let toCurrency =  currency[userAnswer.to]
let amount =  userAnswer.amount
let baseAmount = amount/ fromCurrency
let convertedAmount = baseAmount * toCurrency

console.log(convertedAmount);
