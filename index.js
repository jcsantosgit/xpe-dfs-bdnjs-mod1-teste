import fs from 'fs';

fs.appendFile('arquivo-teste.txt', "\nteste append", function(err){
    if(err) 
        console.log(err)
    else 
        console.log("arquivo gravado com sucesso");
});