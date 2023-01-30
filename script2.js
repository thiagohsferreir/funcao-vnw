
//1 - crie uma função que exiba uma mensagem no console
function msg(msg) {
    console.log("----------------------------------------------------")
    console.log("TESTE 1")
    console.log("crie uma função que exiba uma mensagem no console")
    console.log(msg)
}

msg("Testando")

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function nome(name) {
    console.log("----------------------------------------------------")
    console.log("TESTE 2 crie uma função que receba o seu nome como (parâmetro) e exiba no console")
    console.log(name)
}

nome("Thiago")

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function perfil(nome, idade, musica) {
    console.log("----------------------------------------------------")
    console.log("TESTE 3")
    console.log(" crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console")
    console.log(`Meu nome é ${nome}, tenho ${idade} e gosto de escutar ${musica}.`)
}

perfil("Thiago", 22, "Rock")

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function gostos(filme, musica) {
    console.log("----------------------------------------------------")
    console.log("TESTE 4")
    console.log(" crie uma função que receba um filme, uma música (parâmetros) e exiba no console")
    console.log(`Adoro a franquia de ${filme} e escutar ${musica}.`)
}

gostos("Harry Potter", "Trains de Porcupine Tree")

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function triplo(numero) {
    console.log("----------------------------------------------------")
    console.log("TESTE 5 ")
    console.log("uma função que retorne o triplo do número recebido no parâmetro da função")
    console.log(numero * 3)
}

triplo(3)

//6 - crie uma função que  verifique se uma  variável é true ou false

function bolean(nome, idade, musica) {
    console.log("----------------------------------------------------")
    console.log(`TESTE 6  `)
    console.log("crie uma função que  verifique se uma  variável é true ou false")
    if (nome == "Thiago" && idade === 22) {
        console.log(`Meu nome é ${nome} e tenho ${idade} portanto é TRUE.`)
    } else {
        console.log("É falso.")
    }

}

bolean("Thiago", 22)