import mongoose from "mongoose";

mongoose.connect("mongodb+srv://humberto:abcd1234@cluster0.j8h0k.mongodb.net/alura-node"); // retirada a opção de tentativa de gravar e adicionado o nome do data base criado.

//mongoose.connect("mongodb+srv://humberto:abcd1234@cluster0.j8h0k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

let db = mongoose.connection;

export default db;