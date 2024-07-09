// Estilos: Títulos com 10 espaços, demais espaçamentos 5.

var prompt = require('prompt-sync')();

const cpfs = ["08341569469", "11111111111"];

let login = false

let opcao = 0

function getLogin() {

    console.log("     Digite seu CPF para acessar...")
    let cpf = prompt("     ")
    

    if (cpfs.includes(cpf)) {
        console.log()
        console.log()
        console.log()
        console.log("          Bem Vindo ")
        console.log()
        console.log()
        console.log()
        
        return login = true

    } else {
        console.log()
        console.log("          Usuário não encontrado, digite novamente ")
        console.log()

        return login = false

    }

}

function mainMenu() {
    console.log("          Escolha a opção da operação:")
    console.log()
    console.log()
    console.log("          1 - Depósito")
    console.log("          2 - Saque")
    console.log("          3 - Saldo")
    console.log("          4 - Transferências")
    console.log("          5 - Empréstimo")
    console.log("          6 - Atendimento")
    console.log()
    console.log()
    
    return opcao = prompt("          ")
}

console.log()
console.log()
console.log()
console.log('          - BANCO GENÉRICO  - ')
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()



getLogin()

while (!login) {
    getLogin()
}

mainMenu()

