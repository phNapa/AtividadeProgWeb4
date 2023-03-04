import PromptSync from "prompt-sync"
import chalk from 'chalk'

const prompt = PromptSync();

let valor1 = Number(prompt("Digite o valorr 1: "))
let valor2 = Number(prompt("Digite o valor 2: "))
let valor3 = Number(prompt("Digite o valor 3: "))
let valor4 = Number(prompt("Digite o valor 4: "))
let valor5 = Number(prompt("Digite o valor 5: "))

const media = (valor1 + valor2 + valor3 + valor4 + valor5)/5



console.log(chalk.bgBlue("A média: " + media))