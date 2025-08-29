// console.log("FOR");
// for (let contatora = 1; contatora <= 10; contatora++) {

//     console.log(contatora);

// }


// console.log("WHILE");
// let contadoraWhile = 0;
// while (contadoraWhile <= 4) {

//     console.log(contadoraWhile);
//     contadoraWhile++;

// }
//   ex-1
// for (let numero = 1; numero <= 10; numero++){
//     console.log(numero);

// }

//ex-2
// let numero = prompt("escolha um numero de 1 a 10");

//  if (numero > 10){

//     alert("Tente de novo")
//  }

// for (let i = 1; i <= 10; i++){

//     console.log(numero * i)

// }
// let n = Number(prompt("Escolha um numero"));
// let i = 1;
// let soma = 0;

// while (i <= n ){

//       soma = soma + i;
//       console.log(soma)
//       i++;

// }

//       console.log(soma);

//intermediario -1

// let n =50
// let i = 0;


// while (i <= n ){


//       console.log(i)
//       i = i + 2;

// }

//exercicio -2
// let max = 100;
// let min = 1;


// Math.floor(Math.random() * (max - min + 1)) + min;

// let aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

// console.log(aleatorio);

                //   exercicio -2


let max = 10 ;
let min = 1 ;

Math.floor(Math.random() * (max - min + 1)) + min;

let aleatorio = Math.floor(Math.random() * (10 - 1 + 1)) + min;

let numero = "";

do{
    
  numero = Number(prompt("Escolha um numero de 1 a 10"));
  if ( numero = aleatorio){
    console.log("Parabens");

  } else {

    
  }

} while(numero != aleatorio)


