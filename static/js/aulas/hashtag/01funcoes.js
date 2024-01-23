function nomeFuncao() {
    console.log('Coloque aqui o que será feito pela função.')
};
nomeFuncao();

function nomeFuncaoParametro(parametro) {
    console.log(`Imprimi aqui " ${parametro} " o parametro da função.`)
};
nomeFuncaoParametro('Boa noite');

function nomeFuncaoReturn(a, b) {
    const soma = a + b;
    return soma;
};

function usaFuncaoReturn(soma) {
    console.log(`A soma dos números é ${soma}`);
};
let numero1 = 2;
let numero2 = 5;
const soma = nomeFuncaoReturn(numero1, numero2);
usaFuncaoReturn(soma);