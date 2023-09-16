import { createInterface } from 'readline';

const teclado = createInterface({
    input: process.stdin,
    output: process.stdout
});

teclado.question('Digite seu nome: ', (resposta) => {
    console.log('Seu nome é ' + resposta);
    teclado.close
});