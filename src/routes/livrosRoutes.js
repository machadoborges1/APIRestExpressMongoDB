import express from "express";
import LivroController from "../controllers/livrosControllers.js";

const router = express.Router();

router
    .get("/livros", LivroController.listarLivros)
    .get("/livros/busca", LivroController.listarLivroEditora)
    .get("/livros/:id", LivroController.listarPorID)
    .post("/livros", LivroController.cadastrarLivro)
    .put("/livros/:id", LivroController.atualizarLivro)
    .delete("/livros/:id", LivroController.exclirLivro)

export default router;