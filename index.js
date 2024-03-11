import inquirer from "inquirer";
let answers = await inquirer.prompt({
    type: "input",
    name: "sentence",
    message: "Enter your sentence please:"
});
const a = answers.sentence.trim().split(" ");
console.log(`Your sentence word count is : ${a.length}`);
