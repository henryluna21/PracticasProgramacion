const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa un número: ', (numero) => {
    const esPar = (numero) => numero % 2 === 0;
    console.log(`¿El número ${numero} es par? ${esPar(Number(numero))}`);
    rl.close();
});

