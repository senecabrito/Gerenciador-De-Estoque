let produtoId = 1;

class Produto {
  constructor(nome, tipoMaterial, formato, espessura, largura, altura, comprimento, peso, quantidade, localizacao) {
    this.id = produtoId++;
    this.nome = nome;
    this.tipoMaterial = tipoMaterial;
    this.formato = formato;
    this.espessura = espessura;
    this.largura = largura;
    this.altura = altura;
    this.comprimento = comprimento;
    this.peso = peso;
    this.quantidade = quantidade;
    this.localizacao = localizacao;
  }
}

export default Produto;