//Suma

let sumar = require('./sumar')

//console.log(sumar(10, 5))


//Resta

let restar = require('./restar')

//console.log(restar(8, 2))


//Multiplicación

let multiplicar = require('./multiplicar')

//console.log(multiplicar(2, 0))


//División

let dividir = require('./dividir')

//console.log(dividir(0, 5))

console.log(process.argv[2])
//El 2 me trae esa posición del string que escriba en la terminal.

let operacion = process.argv[2] //sumar
let numero1 = process.argv[3] //2
let numero2 = process.argv[4] //5

/*console.log(operacion)
console.log(numero1)
console.log(numero2)*/

if(operacion === "sumar"){
    console.log("----")
    console.log("SUMA")
    console.log("----")
    console.log(sumar(numero1, numero2))
}