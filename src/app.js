//pASSAR A EXTANCIA DO EXPRESS PARA UTILIZAR AS ROTAS


import express from "express";
import db from "./config/dbConect.js";
//import livros from "./models/Livro.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {console.log('conexão feita com sucesso')})

const app = express();

app.use(express.json()) //recurso do express que interpreta o que chega em put ou post e tranformar em um json

routes(app);
/**
const livros = [
    {id: 1, "titulo": "senhor dos aneis"},
    {id: 2, "titulo": "hobbit"},
    {id: 3, "titulo": "humbertinho"}
]
*/

/** 
app.get('/', (req, res) => { // buscar, criar
    res.status(200).send('Curso de node');
})

*/
/** 
app.get('/livros', (req, res) => {
    livros.find((err, livros) => {
        res.status(200).json(livros)
    }) //find por padrão ja traz todos os lirvros 
})


app.get('/livros/:id', (req, res) => { // atualizar
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);
})
*/

/** 
app.post('/livros',(req, res)=>{  // adicionar
    livros.push(req.body);
    res.status(201).send('livro cadastrado')
})
*/

/** 
app.put('/livros/:id', (req, res) => { // atualizar
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
})

app.delete('/livros/:id', (req, res) => { 
    let {id} = req.params // atribuição via desestruturação // {id} = req.params === index = req.body.titulo;
    let index = buscaLivro(id)
    livros.splice(index, 1) //splice apaga
    res.send(`livro ${id} removido com sucesso`)
})


function buscaLivro(id){
    return livros.findIndex(livro => livro.id == id);
}
*/

export default app;