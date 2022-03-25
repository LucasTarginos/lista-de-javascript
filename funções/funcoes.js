// Funções
// crie uma função que faça as 4 operações matematica simples
/*function somadois(num1,num2){
    console.log(parseINT(num1+num2))
    console.log(parseINT(num1-num2))
    console.log(parseInt(num1*num2))
    console.log(parseInt(num1/num2))
}
somadois(14,2)*/

//QUESTÃO 1-Crie uma função que receba um inteiro e diga se ele é “Par” para números pares ou “Ímpar” para números impares.
/*function parimpar(){
    let num = parseInt(prompt("Digite um numero: "))
    if( num %2 == 0){
        return(console.log("Seu numero é par."))
    }else{
        return(console.log("Seu numero é impar."))
    }
}

parimpar();*/

//questão 2
/*function sum(num1, num2) {
    console.log(num1 + num2);
}
sum(1, 2);
sum(5, 32);
sum(-20, 9);
}
 */

//questão 3
/* function invert(num1) {
                console.log(-num1);
            }
            invert(5);
            invert(-90);
            invert(37);
    }

*/


//questão 4
/* function num(n){
    function positiveSum(list1 = []) {
    let sum = 0;
     for (i = 0; i < list1.length; i++) {
     if (list1[i] > 0) {
     sum = sum + list1[i];
     }
  }
    console.log(sum);
    }
    positiveSum([1, 2, 3, -4]);
    positiveSum([7, -31, 65, -4, 8, -20, 50]);
    positiveSum([8, 9, -5, 6]);
        }
*/


//Questão 5
/*function mN(numeros){
    let menor = numeros[0];
  
    for (i = 0; i < 4; i++) {
      if (parseInt(numeros[i]) < menor) {
        menor = parseInt(numeros[i]);
      }
    }
    return ("O menor número é: " + menor);
  }
  console.log(mN([34, 15, 88, -2]));
  console.log(mN([34, -500, -1, 100]));*/
