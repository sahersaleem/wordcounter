import inquirer from "inquirer"
async function askQuestion() {
    let answers: {
        sentence: string
    } = await inquirer.prompt(
        {
            type: "input",
            name: "sentence",
            message: "Enter your sentence please:"
        }
    )

    const a = answers.sentence.trim().split(" ")
    console.log(`Your sentence word count is : ${a.length}`)
}
do {
    await askQuestion()
    var res = await inquirer.prompt({
        type: "input",
        name: "restart",
        message: "Do you want to start again . Press Y"

    })
} while (res.restart == "y" || res.restart == "yes" || res.restart == "YES" || res.restart == "Y")