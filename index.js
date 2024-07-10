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
    console.log("          7 - Sair")
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

    if (confirmacao === "sim" && saque < usuario.saldo) {
        return usuario.saldo = (+usuario.saldo) - (+saque)
    }

    if (saque > usuario.saldo) {
        return (
            console.log(),
            console.log(),
            console.log(),
            console.log("          Saldo insuficiente...")
        )
    }
}

function showingBalance(usuario) {   // Função de Consulta do Saldo
    console.log()
    console.log()
    console.log()
    console.log()
    console.log("          Saldo")
    console.log()
    console.log()
    console.log("          " + usuario.nome + ", o valor total em sua conta é R$ " + usuario.saldo)
    console.log()
    console.log()
    console.log()
}

function transfering(usuario) {   // Função de Transferência
    console.log()
    console.log()
    console.log()
    console.log()
    console.log("          Transferência")
    console.log()
    console.log()
    console.log("          Indique o valor a ser transferido em Reais")
    console.log("          ex. 100.00")
    console.log()
    console.log()
    console.log()
    const transferencia = prompt("          ")
    console.log()
    console.log()
    console.log("          Informe o cpf do títular da conta a ser transferido o valor")
    console.log()
    console.log()
    console.log()
    const cpfRecebedor = prompt("          ")

    const usuarioRecebedor = usuarios.find((user) => user.cpf === cpfRecebedor);

    if (usuarioRecebedor) {
        console.log()
        console.log()
        console.log("          Você confirma a tranferência de R$ " + transferencia + " para " + usuarioRecebedor.nome + " " + usuarioRecebedor.sobrenome)
        console.log()
        console.log("          Digite “sim” ou “não” para continuar")
        console.log()
        const confirmacao = prompt("          ")

        if (confirmacao === "sim" && transferencia < usuario.saldo) {
            return usuario.saldo = (+usuario.saldo) - (+transferencia)
        }

        if (transferencia > usuario.saldo) {
            return (
                console.log(),
                console.log(),
                console.log(),
                console.log("          Saldo insuficiente...")
            )
        }
    } else {
        console.log()
        console.log()
        console.log()
        console.log()
        console.log("          Usuário não encontrado... ")
        console.log()
        console.log()
    }
}

function getLoan(usuario) {   // Função de Empréstimo
    console.log()
    console.log()
    console.log()
    console.log()
    console.log("          Deseja contratar um empréstimo?")
    console.log()
    console.log()
    console.log("          Digite “sim” ou “não” para continuar")
    console.log()
    const confirmacao = prompt("          ")

    if (confirmacao === "sim" && usuario.idade >= 18) {
        console.log()
        console.log()
        console.log("          Insira o valor que você gostaria de receber")
        console.log()
        const emprestimo = prompt("          ")
        console.log()
        console.log()
        console.log("          Você confirma a solicitação de emprestimo de R$ " + emprestimo)
        console.log()
        console.log("          Digite “sim” ou “não” para continuar")
        console.log()
        const confirmacao = prompt("          ")

        if (confirmacao === "sim") {
            return usuario.saldo = (+usuario.saldo) + (+emprestimo)
        }

    } else {
        console.log()
        console.log()
        console.log()
        console.log("          Você precisa ter maior idade para pedir emprestimos :(")
        console.log()
        console.log()
    }

}

function getContacts() {
    console.log()
    console.log()
    console.log("          Nossos Contatos")
    console.log()
    console.log()
    console.log("          Site: www.bancog.com ")
    console.log()
    console.log("          Whatsapp: 11 99999-9999")
    console.log()
    console.log("          Telefone: 0800 800 0008")
    console.log()
}

function menuRouter(opcao) {   // Função de Roteamento do Menu
    if (opcao === "1") {
        return depositing(usuario)
    }

    if (opcao === "2") {
        return widrawing(usuario)
    }

    if (opcao === "3") {
        return showingBalance(usuario)
    }

    if (opcao === "4") {
        return transfering(usuario)
    }

    if (opcao === "5") {
        return getLoan(usuario)
    }

    if (opcao === "6") {
        return getContacts()
    }
}

function returning(opcao) {   // Função de Retorno ao Menu

    if (opcao === "7") {
        return sair = true
    } else {
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
}

function app() {   // Aplicação

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

    while (!usuario) {
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

    while (!sair) {
        mainMenu()

        menuRouter(opcao)

        returning(opcao)
    }

}

app()

