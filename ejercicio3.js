let numeros = [4, 5, 9, 2, 1, 5, 22, 15, 21, 1];
let contador_par = 0;
let contador_impar = 0;
for(let i= 0; i < numeros.length; i++){
    if(numeros[i] % 2 === 0){
        contador_par++;
    }else {
        contador_impar++;
    }
}
console.log("Ejercicio 3");
console.log("Cantidad de pares: "+contador_par+"\t Cantidad de impares: "+contador_impar);