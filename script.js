//let numero = parseInt(prompt("Digite um número para ver a tabuada:"));

//if (!isNaN(numero)) {
    
  //  console.log(`Tabuada de ${numero}:`);
    //for (let i = 1; i <= 10; i++) {
      //  console.log(`${numero} x ${i} = ${numero * i}`);
    //}
//} else {
    
  //  console.log("Por favor, digite um número válido.");
//}

//--------SEGUNTA QUESTÃO------

//for (let i = 1; i <= 10; i++) {
    
  //  if (i % 2 === 0) {
    //    continue;
   // }

    
    //if (i === 8) {
      //  break;
    //}

    
    //console.log(i);
//}

// ------- TERCEIRA QUESTÃO --------

//for (let i = 1; i <= 20; i++) {
  
  //if (i % 3 === 0) {
    //  continue;
  //}

  
  //if (i > 15) {
    //  break;
  //}

  
  //console.log(i);
//}

//------- QUARTA QUESTÃO --------


let input = prompt("Digite uma palavra ou frase:");


if (input) {
  
    for (let char of input) {
   
        console.log(char);
    }
} else {
    console.log("Você não digitou nada.");
}
