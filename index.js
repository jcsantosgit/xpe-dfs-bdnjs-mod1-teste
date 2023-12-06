import readLine from "readline";

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

lerConsole();

function lerConsole() {
    
    const numbers = [];
    
    rl.question('Digite um número: ', numero => {
        
        if(isNaN(numero) || parseInt(numero) === -1) {
            rl.close();
            return;
        }
    
        const multiple =  parseInt(numero);

        for (let n = 0; n <= 1000; n++) {

            if(n % multiple == 0) {
                numbers.push(n);
            }

        }

        console.log(numbers);

        lerConsole();
    });
}