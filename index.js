import express from 'express';

const app = express();

// Filtra qualquer método.
// Parametros res sem utilização.
app.all("/teste?", (_, res)=>{
    res.send(req.method);
});

app.post("/incluir+", (req, res)=>{
    res.send("POST: Hello world com express")
});

// parâmetros opcionais
app.get('/produto/:id/:qtd?', (req, res)=>{

    var retorno = []

    if(req.params.qtd !== undefined && req.params.qtd !== null)
        retorno.push(req.params.qtd)
    
    if(req.params.id !== undefined && req.params.id !== null)
        retorno.push(req.params.id)

    res.send(retorno);
});

app.get('/produto/:id/:qtd')

// Parâmetro com expressões regulares.
app.get(/.*api*$/, (req, res) => {
    res.send('usando API com expressão regular');
});

// Parametros via query
app.get('/compra', (req, res)=>{
    res.send(req.query);
});

// Multiple handlers.
app.get('/handlers', (req, res, nex)=>{
    console.log('Callback 1');
    res.send('Trabalhando com hanlders');
    nex()
}, (req, res)=>{
    console.log('Callback 2');
    res.end();
});

const callback1 = (req, res, next) => {
    console.log('Callback 1');
    next();
}

const callback2 = (req, res, next) => {
    console.log('Callback 2');
    next();
}

app.get('/mult-handlers', [callback1, callback2, callback3] );

function callback3(req, res){
    console.log('Callback 3');
    res.end();
}

// Subindo o servidor:
app.listen(8080, () => {
    console.log('Server OnLine..');
});