import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow("Lets start calculations");
    await sleep();
    rainbowTitle.stop();
    console.log(`
     _____________________
    |  _________________  |
    | | WA           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
    `);
}
//welcome();
async function askQuestion() {
    await inquirer
        .prompt([
        {
            type: "list",
            name: "operator",
            message: "Which Operation do you want to perform?\n",
            choices: [
                "Addition",
                "Subtraction",
                "Multiplication",
                "Division",
                "Power",
            ],
        },
        { type: "number", name: "lhs", message: "Enter left operand" },
        { type: "number", name: "rhs", message: "Enter right operand" },
    ])
        .then((answers) => {
        switch (answers.operator) {
            case "Addition":
                console.log(answers.lhs + answers.rhs);
                break;
            case "Subtraction":
                console.log(answers.lhs - answers.rhs);
                break;
            case "Multiplication":
                console.log(answers.lhs * answers.rhs);
                break;
            case "Division":
                console.log(answers.lhs / answers.rhs);
                break;
            case "Power":
                console.log(Math.pow(answers.lhs, answers.rhs));
                break;
        }
    });
}
async function doRunAgain() {
    let restart;
    do {
        await askQuestion();
        const ans = await inquirer.prompt([
            {
                type: "input",
                message: "Do you want to perform another calculation?",
                name: "restart",
            },
        ]);
        restart = ans.restart;
    } while (restart.toLowerCase() === "y" || restart.toLowerCase() === "yes");
}
doRunAgain();
