import express from 'express';

const app = express();

// Rotas:
app.get("/", (req, res)=>{
    res.send("GET: Hello world com express!");
});

app.post("/", (req, res)=>{
    res.send("POST: Hello world com express")
});

// Subindo o servidor:
app.listen(8080, () => {
    console.log('Server OnLine..');
});