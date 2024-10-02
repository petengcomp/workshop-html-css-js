class Petiano {

    #nome
    #idade
    #email

    constructor(nome, idade, email) {

        this.#nome = nome
        this.#idade = idade
        this.#email = email
    }

    get nome(){
        return this.#nome
    }

    get idade(){
        return this.#idade
    }

    get email(){
        return this.#email
    }
}

var nome = ''
var dataNascimento = ''
var email = ''

const listaPetianos = []

function renderizarLista(){

    const listaHtml = document.querySelector('.listaPetianos')

    for(let i = 0; i < listaPetianos.length; i++){

        const petiano = listaPetianos[i]
        const petianoHtml = document.createElement('li')
        petianoHtml.innerHTML = `${petiano.nome} - ${petiano.idade} - ${petiano.email}`
        listaHtml.appendChild(petianoHtml)
    }
}

function setNome(){
    nome  = document.getElementById('nome').value
}

function setData(){
    dataNascimento  = document.getElementById('data').value
}
function setEmail(){
    email  = document.getElementById('email').value
}

function calculaIdade(dataNascimento){

    // 2004-07-05

    const dados = dataNascimento.split('-')

    const ano = parseInt(dados[0]) 
    const mes = +dados[1]
    const dia = +dados[2]

    const dataAtual = new Date()
    const anoAtual = dataAtual.getFullYear()
    const mesAtual = dataAtual.getMonth()
    const diaAtual = dataAtual.getDate()

    let idade = anoAtual - ano

    if(mesAtual < mes || (mesAtual === mes && diaAtual < dia)){
        idade--
    }

    return idade
}

function salvar(){

    const idade = calculaIdade(dataNascimento)

    const petiano = new Petiano(nome, idade, email)

    listaPetianos.push(petiano)

    document.getElementById('nome').value = ''
    document.getElementById('data').value = ''
    document.getElementById('email').value = ''

    const listaHtml = document.querySelector('.listaPetianos')
    listaHtml.innerHTML = '<h3> Lista Petianos:</h3>'

    renderizarLista()
}