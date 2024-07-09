// Estilos: Títulos com 10 espaços, demais espaçamentos 5.

var prompt = require('prompt-sync')();

const usuarios = [{ nome: "Alexandre", sobrenome: "Lins", idade: 34, cpf: "08341569469", saldo: 0},
{ nome: "Outro", sobrenome: "User", idade: 16, cpf: "11111111111", saldo: 0}];   // Lista de usuários

let login = false   // Condição para efetuar login

let opcao = 0   //Opção selecionada no menu

// Funções 

function getLogin(user) {    // Função de Login

    console.log("     Digite seu CPF para acessar...")
    let cpf = prompt("     ")

    if (user.cpf === cpf) {
        console.log()
        console.log()
        console.log()
        console.log("          Bem Vindo ", user.nome + " " + user.sobrenome)
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

function mainMenu() {   // Função do Menu Inicial
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

// Saudação

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

usuarios.forEach((user) => {
    getLogin(user)

    while (!login) {
        getLogin(user)
    }

    mainMenu()
})



