/* 
    *****************************************
    Trabalhando com File System usando Async
    *****************************************
*/
import {promises as fs} from 'fs';

init();

async function init() {
    try {        
        await fs.writeFile('arquivo-teste.txt', "usando o Async no File System");
        await fs.appendFile('arquivo-teste.txt', "\nAppend usando o Async no File System");
        const conteudo = await fs.readFile("arquivo-teste.txt", "utf-8");
        console.log(conteudo);
    } catch (error) {
        console.log(error);
    }
}

