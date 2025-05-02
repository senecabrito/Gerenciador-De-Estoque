import express from "express";
import Produto from "./models/Produto.js";
import dbProdutos from "./db/db.js";

const app = express();
app.use(express.json());

app.post("/produto", (req, res) => {
    const {nome, preco} = req.body;
    let produto = new Produto(nome, preco);
    dbProdutos.push(produto);
    res.status(201).json({message: "Produto criado", produto});
});

app.get("/produtos", (req, res) => {
    const listaProdutos = dbProdutos.map(produto => ({
        id: produto.id,
        nome: produto.nome,
        preco: produto.preco
    }))
    res.json(listaProdutos);
});

export default app;