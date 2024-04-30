import inquirer from "inquirer";

let userpin = 1213;
let balance = 10000;
let logged: boolean = false;

console.log("------------Welcome to ATM-------------");

async function main() {
  let { pin } = await inquirer.prompt([
    {
      name: "pin", // Fixed typo here
      message: "Enter your Pin?",
      type: "input",
    }
  ]);

  if (parseInt(pin) === userpin) { // Convert pin to number for comparison
    console.log("Login Successfully");
    logged = true;
  } else {
    console.log("Invalid Pin. Check your pin and try Again");
  }

  while (logged == true) {
    const { operation } = await inquirer.prompt([
      {
        type: 'list',
        name: 'operation',
        message: 'Select operation:',
        choices: ['Withdraw', 'Check', 'Exit']
      },
    ]);

    switch (operation) {
      case 'Withdraw':
        let { amount } = await inquirer.prompt([{ // Destructure amount here
          name: "amount",
          message: "Enter amount to withdraw",
          type: "input"
        }]);
        if (parseInt(amount) <= balance) { // Convert amount to number for comparison
          balance -= parseInt(amount); // Convert amount to number for subtraction
          console.log(`Withdrawal of ${amount} successful. Your new balance is ${balance}`);
        } else {
          console.log("Insufficient balance");
        }
        break;
      case 'Check':
        console.log(`Your balance is ${balance} `);
        break;
      case 'Exit':
        console.log("Thank you for using ATM.");
        logged = false; // Set logged to false to exit the loop
        break;
      default:
        console.log("Invalid operation selected");
    }
  }
}

main();
