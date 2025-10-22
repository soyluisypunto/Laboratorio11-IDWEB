console.log("Ejercicio 5");
let billetes_100, billetes_50, billetes_20, billetes_10;
let monto = parseInt(prompt("Ingrese el monto a retirar"));

while (monto !== 0) { // El bucle debe ser sin el punto y coma
    if (monto % 10 !== 0) {
        console.log("El monto debe ser múltiplo de 10");
    } else {
        // Calcular la cantidad de billetes
        billetes_100 = parseInt(monto / 100);
        monto %= 100;

        billetes_50 = parseInt(monto / 50);
        monto %= 50;

        billetes_20 = parseInt(monto / 20);
        monto %= 20;

        billetes_10 = parseInt(monto / 10);
        monto %= 10;

        console.log("Retirando... \nBilletes 100: " + billetes_100 +
                    "\nBilletes 50: " + billetes_50 +
                    "\nBilletes 20: " + billetes_20 +
                    "\nBilletes 10: " + billetes_10);
    }

    monto = parseInt(prompt("Ingrese otro monto a retirar (0 para salir)"));
}

console.log("Gracias por su visita");
