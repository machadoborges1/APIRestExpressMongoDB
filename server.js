// ESCUTAR O SERVIDOR E CONECTAR A UMA PORTA



// const http = require("http");
import app from './src/app.js'

const port = process.env.PORT || 3000;
// const port = 3000;

/**
const rotas = { //resultado no navegador
    '/': 'curso de node',
    '/livros': 'entrei na pagina de livros',
    'autores': 'lista de autores',
    'sobre': 'sobre o projeto'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(rotas[req.url]);
})
*/

app.listen(port, () => {
    console.log(`Servidor escutando na porta http://localhost:${port}`)
})

/**
server.listen(port, () => {
    console.log(`Servidor escutando na porta http://localhost:${port}`)
})
*/
