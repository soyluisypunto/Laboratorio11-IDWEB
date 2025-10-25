let num = parseInt(prompt("Ingrese un numero"));
let suma = 0;
for(let i = 1 ; i <= num ; i++){
    if( i % 5 !== 0){
        suma += i;
    }
}
console.log("La suma desde 1 hasta "+ num + "sin los multilplos de 5 es: "+suma);