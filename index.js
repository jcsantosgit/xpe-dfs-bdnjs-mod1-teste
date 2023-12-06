/* 
    *****************************************
    Usando File Async para evitar funções de
    call Back.
*/
import fs from 'fs';

try {
    console.log("1");
    fs.writeFileSync("arquivo-teste.txt", "Usando Sync\n");
    console.log("2");
    const readed = fs.readFileSync('arquivo-teste.txt', 'utf-8');
    console.log(readed);
    console.log("3")
} catch (error) {
    console.log(error);
}