import fs from 'fs';

fs.readFile('arquivo-teste.txt', "utf-8", function(err, data){
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});