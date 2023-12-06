// Importação de módulo seguindo o padrão
// Commons JS
const commons = require('./commonsJS.js');

const digit = process.argv[2];
const digit2 = process.argv[3];

const number = isNaN(digit2) ? 1000 : parseInt(digit2);
const multiples = [];

console.log(commons.soma(10, 10));

if(!isNaN(digit)){
    const v = parseInt(digit);
    for (let n = 0; n <= number; n++) {
        if(commons.ehMultiplo(n,v)){
            multiples.push(n);
        }
    }
    console.log(multiples);
} else {
    console.log('Não é um número!');
}