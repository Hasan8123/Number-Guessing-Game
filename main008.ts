console.log(chalk.italic.bold.cyan("Welcome To Number Guessing Game"))
console.warn(chalk.yellow("Let's Begain The Game"))


import chalk from "chalk";
import inquirer from "inquirer"

async function startFunc() {

    const autoNum= Math.floor(Math.random()*100);
    const userNum= await inquirer.prompt([
        {
            type:"number",
            name:"userGuess",
            message: "Guess The Number & Type It" 
        }
    ])
    
    const {userGuess}= userNum;

    console.log(userGuess,"Your Guess", autoNum,"SystemGuess");

    if(userGuess=== autoNum){
        console.log(chalk.bgGreen("Wow Your Is Correct Answer"));
    }
    else{
        console.log(chalk.red("Better Luck Next Time TryAgain"));
    }
}



async function startAgain(){
    do{
        await startFunc();
        var agin= await inquirer
        .prompt({
            type: "input",
            name: "restart",
            message: "DO You Want To Continue? Press Y or N "
        })
    }
    while ( agin.restart== "Y" || agin.restart== "y" || agin.restart== "YES" || agin.restart== "yes" )
}
startAgain();