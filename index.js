const digit = process.argv[2];
const number = 1000;
const multiples = [];

if(!isNaN(digit)){
    const v = parseInt(digit);
    for (let n = 0; n < number; n++) {
        if(n%v == 0){
            multiples.push(n);
        }
    }
    console.log(multiples);
} else {
    console.log('Não é um número!');
}