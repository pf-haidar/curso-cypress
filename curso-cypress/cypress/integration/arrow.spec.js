//const { it } = require("mocha")

it('nada agora', function() { })

// function soma(a, b){
//     return a + b;
// }

// const soma = function(a, b){
//     return a + b
// }

// const soma = (a, b) => {
//     return a + b;
// } 

//EXEMPLO ERRADO ABAIXO
// const soma = (a,b) => {
//     a + b
// }

// const soma = (a, b) => a + b

//OPÇÃO ABAIXO SÓ FUNCIONA QUANDO HÁ APENAS UM PARAMETRO
// const soma = a => a + a

//OPÇÃO SEM PARAMETRO ALGUM
const soma = () => 5 + 5

console.log(soma(1,4))

it(' a function test...', function() {
    console.log('Function', this)
})
it(' a function test...', () => {
    console.log('Arrow', this)
})