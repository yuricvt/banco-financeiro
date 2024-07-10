// Estilos: Títulos com 10 espaços, demais espaçamentos 5.

var prompt = require('prompt-sync')();

const usuarios = [{ nome: "Alexandre", sobrenome: "Lins", idade: 34, cpf: "08341569469", saldo: 0 },
{ nome: "Outro", sobrenome: "User", idade: 16, cpf: "12345678999", saldo: 0 }];   // Lista de usuários

let usuario = {}

let opcao = 0   //Opção selecionada no menu

let sair = false //Opção de saida do sistema

// Funções 

function getLogin() {    // Função de Login

    console.log()
    console.log("          Digite seu CPF para acessar...")
    console.log()
    let cpf = prompt("          ")

    return usuario = usuarios.find((user) => user.cpf === cpf);
}

function mainMenu() {   // Função do Menu Inicial
    console.log()
    console.log()
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

function depositing(usuario) {   // Função de Deposito
    console.log()
    console.log()
    console.log()
    console.log()
    console.log("          Depósito")
    console.log()
    console.log()
    console.log("          Indique o valor a ser depositado em Reais")
    console.log("          ex. 1000.00")
    console.log()
    console.log()
    const deposito = prompt("          ")
    console.log()
    console.log()
    console.log("          Você confirma o valor R$ " + deposito)
    console.log()
    console.log("          Digite “sim” ou “não” para continuar")
    console.log()
    const confirmacao = prompt("          ")

    if (confirmacao === "sim") {
        return usuario.saldo = (+usuario.saldo) + (+deposito)
    }
}

function widrawing(usuario) {   // Função de Saque
    console.log()
    console.log()
    console.log()
    console.log()
    console.log("          Saque")
    console.log()
    console.log()
    console.log("          Indique o valor a ser sacado em Reais")
    console.log("          ex. 500.00")
    console.log()
    console.log()
    console.log()
    const saque = prompt("          ")
    console.log()
    console.log()
    console.log("          Você confirma o valor R$ " + saque)
    console.log()
    console.log("          Digite “sim” ou “não” para continuar")
    console.log()
    const confirmacao = prompt("          ")

    if (confirmacao === "sim") {
        return usuario.saldo = (+usuario.saldo) - (+saque)
    }
}

function showingBalance(usuario) {
    console.log()
    console.log()
    console.log()
    console.log()
    console.log("          Saldo")
    console.log()
    console.log()
    console.log("          " + usuario.nome + ", o valor total em sua conta é R$ " +usuario.saldo)
    console.log()
    console.log()
    console.log()
}

function menuRouter(opcao) {
    if(opcao === "1") {
        return depositing(usuario)
    }
    
    if(opcao === "2") {
        return widrawing(usuario)
    }
    
    if(opcao === "3") {
        return showingBalance(usuario)
    }
}

function returning() {   // Função de Retorno ao Menu
    console.log()
    console.log()
    console.log()
    console.log()
    console.log("          O que você deseja fazer agora?")
    console.log()
    console.log("          1 - Retornar ao Menu Principal")
    console.log("          2 - Sair")
    console.log()
    console.log()
    const retorno = prompt("          ")

    if (retorno === "2") {
        return sair = true
    }
}


// Saudação

console.log()
console.log()
console.log()
console.log('          - BANCO GENÉRICO - ')
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()

getLogin()

while(!usuario) {
    console.log()
    console.log()
    console.log()
    console.log()
    console.log("          Usuário não encontrado... ")
    console.log()
    console.log()

    getLogin()
}

console.log()
console.log()
console.log("          Bem Vindo ", usuario.nome + " " + usuario.sobrenome)
console.log()
console.log()
console.log()

mainMenu()

menuRouter(opcao)

returning()

while(!sair) {
    mainMenu()

    menuRouter(opcao)

    returning()
}



