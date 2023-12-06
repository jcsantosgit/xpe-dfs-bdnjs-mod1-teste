import fs from 'fs';

fs.writeFile('arquito-teste.txt', "bla bla bla", function(err){
    if(err) {
        console.log(err);
    } else {
        console.log("Arquivo criado com sucess!");
    }
});