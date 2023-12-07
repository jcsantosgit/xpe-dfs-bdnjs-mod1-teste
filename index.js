import http from 'http';

http.createServer((req, res)=>{
    if((req.method === 'GET') && (req.url === "/teste")){
        res.write("rota GET /teste executado com sucesso");
    } else {
        res.write("Hello cruel world");
    }
    res.statusCode = 200;
    res.end();
}).listen(8080);