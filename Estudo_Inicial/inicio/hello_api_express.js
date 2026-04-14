//importa framework express
const express = require('express')

//Cria a aplicação expres
const app = express();

// Define a porta
const PORT = 3000;

//ROTA
app.get("/hello", (req, res) => {
    res.json({
        message: "Hello World!"
    });
});

app.use((req, res) => {
    res.status(404).json({
        error: "Rota não encontrada"
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})

