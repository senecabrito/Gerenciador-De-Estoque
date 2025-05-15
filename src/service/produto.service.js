import dbProdutos from "../db/db.js";
import Produto from "../models/produto.model.js";

export const listaProdutosService = () => {
  return dbProdutos;
};

export const criaProdutoService = (produto) => {
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
  } = produto;

  if (
    !nome ||
    !tipoMaterial ||
    !formato ||
    !espessura ||
    !largura ||
    !altura ||
    !comprimento ||
    !peso ||
    !quantidade ||
    !localizacao
  ) {
    throw new Error("Todos os campos são obrigatórios");
  }

  const novoProduto = new Produto(
    nome,
    tipoMaterial,
    formato,
    espessura,
    largura,
    altura,
    comprimento,
    peso,
    quantidade,
    localizacao
  );

  return dbProdutos.push(novoProduto);
};
