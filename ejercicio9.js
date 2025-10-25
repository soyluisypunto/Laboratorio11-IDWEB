let numero = parseInt(prompt("Ingresa un numero: "));

let numString = numero.toString();
let digitos = numString.length;
let suma = 0;

for (let i = 0; i < n; i++) {
    let digito = parseInt(numString[i]);
    suma += digito ** digitos;  
}

if (suma === numero) {
    console.log(numero + " es un número Armstrong.");
} else {
    console.log(numero + " no es un número Armstrong.");
}
