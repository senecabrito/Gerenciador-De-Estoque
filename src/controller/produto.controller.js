import {
  listaProdutosService,
  criaProdutoService,
} from "../service/produto.service.js";

export const listaProdutosController = (request, response) => {
  const produtos = listaProdutosService();
  response.json(produtos);
};

export const criaProdutoController = (request, response) => {
  try {
    const produto = criaProdutoService(request.body);

    response.status(201).json({
      message: "Produto criado com sucesso",
      produto,
    });
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
};
