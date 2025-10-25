let num = parseInt(prompt("Ingresa un numero"));
console.log("Numeros primos entres 1 - " + num + ":");
for(let i= 1; i < num ; i++){
    let contador = 0;
    for (let j= 1; j < num ; j++){
        if (i % j == 0){
            contador++;
        }
    }
    if(contador === 2){
        console.log(i);
    }
}