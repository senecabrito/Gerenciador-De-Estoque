const form = document.getElementById("formProduto");
const lista = document.getElementById("listaProdutos");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const dados = Object.fromEntries(new FormData(form).entries());
  dados.espessura = parseFloat(dados.espessura);
  dados.largura = parseFloat(dados.largura);
  dados.altura = parseFloat(dados.altura);
  dados.comprimento = parseFloat(dados.comprimento);
  dados.peso = parseFloat(dados.peso);
  dados.quantidade = parseInt(dados.quantidade);

  const res = await fetch("/produto", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados)
  });

  if (res.ok) {
    alert("Produto cadastrado!");
    form.reset();
    carregarProdutos();
  }
});

async function carregarProdutos() {
  const res = await fetch("/produtos");
  const produtos = await res.json();

  lista.innerHTML = "";
  produtos.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.nome} (${p.tipoMaterial}) - ${p.quantidade} unid.`;
    lista.appendChild(li);
  });
}

carregarProdutos();