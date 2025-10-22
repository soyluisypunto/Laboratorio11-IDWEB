console.log("Ejercicio 2: ");
let edad = parseInt(prompt("Ingrese su edad"));
if(edad<12){
    console.log("Niño");
} else if (edad >= 12 && edad <= 17){
    console.log("Adolescente");
} else if (edad > 17 && edad < 60){
    console.log("Adulto")
} else{
    console.log("Adulto mayor");
}