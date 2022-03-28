import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => { //porta 3000
        res.status(200).send({titulo: "curso de node"})
    })

    app.use(
        express.json(),
        livros,
        autores
    )
}

export default routes;
