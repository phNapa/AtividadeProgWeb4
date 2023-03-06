import PromptSync from "prompt-sync"
import chalk from 'chalk'

const prompt = PromptSync();

let valor = 0
let media = 0

for (let i = 0; i < 5; i++) {
    valor += Number(prompt("Digite o valor: "))
}

media = valor / 5

console.log(chalk.bgBlue("A média: " + media))