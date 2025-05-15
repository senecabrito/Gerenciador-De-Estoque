import express from "express";
import Produto from "./models/produto.model.js";
import dbProdutos from "./db/db.js";
import produtosRoutes from "./routes/produto.routes.js";
import cors from "cors";

const app = express();
const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("", produtosRoutes);

// Criar um novo produto
// app.post("/produto", (req, res) => {
//   const {
//     nome,
//     tipoMaterial,
//     formato,
//     espessura,
//     largura,
//     altura,
//     comprimento,
//     peso,
//     quantidade,
//     localizacao,
//   } = req.body;

//   let produto = new Produto(
//     nome,
//     tipoMaterial,
//     formato,
//     espessura,
//     largura,
//     altura,
//     comprimento,
//     peso,
//     quantidade,
//     localizacao
//   );

//   dbProdutos.push(produto);
//   res.status(201).json({ message: "Produto criado", produto });
// });

// // Listar todos os produtos
// app.get("/produtos", (req, res) => {
//   res.json(dbProdutos);
// });

// Deleta produto
app.delete("/produto/:id", (req, res) => {
  const id = req.params.id;
  const produto = dbProdutos.findIndex((p) => p.id === id);
  dbProdutos.splice(produto, 1);
  res.status(200).json({ message: "Produto deletado", produto });
});

// Diferente do 'PUT', o 'PATCH' não precisa de todos os campos
// Atualiza produto
app.patch("/produto/:id", (req, res) => {
  const id = req.params.id;
  const produto = dbProdutos.findIndex((p) => p.id === id);
  const {
    nome,
    tipoMaterial,
    formato,
    espessura,
    largura,
    altura,
    comprimento,
    peso,
    quantidade,
    localizacao,
  } = req.body;

  if (nome !== undefined) produto.nome = nome;
  if (tipoMaterial !== undefined) produto.tipoMaterial = tipoMaterial;
  if (formato !== undefined) produto.formato = formato;
  if (espessura !== undefined) produto.espessura = espessura;
  if (largura !== undefined) produto.largura = largura;
  if (altura !== undefined) produto.altura = altura;
  if (comprimento !== undefined) produto.comprimento = comprimento;
  if (peso !== undefined) produto.peso = peso;
  if (quantidade !== undefined) produto.quantidade = quantidade;
  if (localizacao !== undefined) produto.localizacao = localizacao;

  res.status(200).json({ message: "Produto atualizado", produto });
});

export default app;
