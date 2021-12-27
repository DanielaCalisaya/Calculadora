function multiplicar(numero1, numero2){
    if(numero1 === 0){
      return "Cero";
    }else if(numero2 === 0){
      return "Cero";
    }else{
      return numero1 * numero2;
    }
}


//console.log(multiplicar(10, 5))


module.exports = multiplicar;