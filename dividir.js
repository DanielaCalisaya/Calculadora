function dividir(numero1, numero2){
    if(numero1 === 0){
      return "No se puede dividir por cero";
    }else if(numero2 === 0){
      return "No se puede dividir por cero";
    }else{
      return numero1 / numero2;
    }
} 


//console.log(dividir(6, 2))


module.exports = dividir;