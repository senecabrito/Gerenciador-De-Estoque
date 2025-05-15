import { Router } from "express";
import {
  listaProdutosController,
  criaProdutoController,
} from "../controller/produto.controller.js";

const router = Router();

// Lista produtos
router.get("/produtos", listaProdutosController);

// Cadastra produto
router.post("/produto", criaProdutoController);

export default router;
