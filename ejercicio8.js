const radio_circulo = 5;
const altura_rectangulo = 3.4;
const ancho_rectangulo = 2;
let continuar = "SI";
console.log("Menú de opciones:");
console.log("1. Calcular área del círculo");
console.log("2. Calcular área del rectángulo");
do{
    let respuesta = parseInt(prompt("Numero: "))
    if( respuesta === 1){
        let area_circulo = 3.14 * (radio_circulo ** 2);
        console.log("El area del circulo es: "+area_circulo);
    } else if ( respuesta === 2){
        let area_rectangulo = altura_rectangulo * ancho_rectangulo;
        console.log("El area del rectangulo es: "+ area_rectangulo);
    } else {
        console.log("Error");
    }
    continuar = prompt("Desea continuar SI/NO ?").toUpperCase();;
}while (continuar === "SI");
console.log("Programa finalizado");