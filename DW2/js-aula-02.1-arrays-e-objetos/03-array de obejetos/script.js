//objeto
const produto = {
    nome: "computador",
    marca: "lenovo",
    preco: 3000,
    descricao: "PC moderno com bom desempenho"
}

document.write(`<p> ${produto}</p>`);

//Acessando os atributos do objeto
document.write(`<p> ${produto.nome}, ${produto.marca}, custa R$ ${produto.preco} <br> ${produto.descricao}</p>`)

//Array de objetos
document.writeln("<h3>Array de objetos: </h3>");
const listaProdutos = [
    {
            nome: "computador",
    marca: "lenovo",
    preco: 3000,
    descricao: "PC moderno com bom desempenho",
    },
     {  nome: "tablet",
        marca: "Samsung",
        preco: 2000,
        descricao: "Otima velocidade de processamento",
     },
     {
        nome: "Iphone",
        marca: "Apple",
        preco: 130000,
        descricao: "Ultra resisstente! não quebra nunca!"
     },
];
//Exibindo as infomações dos produtos com foreach

listaProdutos.forEach(produto => {
    document.writeln(`
    Produto: ${produto.nome} <br> 
    Marca: ${produto.marca} <br>  
    Preço: ${produto.preco} <br>
    Descrição: ${produto.descricao} <br> <br> `);
});