/* 
    *****************************************
    Trabalhando com promises no File System
*/
import {promises as fs} from 'fs'; // alias para precisar usar o promises.readFile..

fs.writeFile("arquivo-teste.txt", "usando o método promises")
    .then(()=>{
        fs.readFile("arquivo-teste.txt", "utf-8")
        .then(resp=>{
            console.log(resp);
        }).catch(err=>console.log(err));
    })
    .catch(err=>{
        console.log(err);
    });
