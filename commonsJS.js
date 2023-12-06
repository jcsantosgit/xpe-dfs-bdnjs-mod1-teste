function soma(x, y) {
    return x + y;
}

function subtracao(x,y){
    return x - y;
}

function ehMultiplo(x,y) {
    return x%y == 0;
}

module.exports = {soma, subtracao};

/* 
    Me parece que nessa versão do Node JS 20.8.0
    tem problemas com a importação na seguinte
    assinatura:
    module.exports = ehMultiplo
*/