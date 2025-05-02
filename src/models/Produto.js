let produtoId = 1;

class Produto {
    constructor(nome, preco){
        this.id = produtoId++,
        this.nome = nome,
        this.preco = preco
    }

}

export default Produto;