//vetores no javascript
let produtos = ["computador", "Notebook", "Celular", "Tablet"]
let aluno = "Matheus"
document.writeln(`O tipo da variavel que recebe um vetor em Javascript é: <strong>${typeof(produtos)} </strong>`)

document.writeln(` <br><br>O tipo da variavel aluno é: <strong>${typeof(aluno)} </strong>`)

document.writeln("exibindo os itens pelo vetor pelo <strong> índice: </strong><br>")

//Document.write(`<p>${produtos}</p>`)

document.write(`<p>${produtos[0]}</p>`)
document.write(`<p>${produtos[1]}</p>`)
document.write(`<p>${produtos[2]}</p>`)
document.write(`<p>${produtos[3]}</p>`)



document.writeln("exibindo os itens pelo vetor através do <strong>forEach: </strong> <br>")
produtos.forEach( produto => {
//para cada "produto", da lista de "produtos", faça tal...
document.writeln(`<p>${produto}</p>`)

});

document.write("<br> Exibindo o s intens do vetor e os indices com o forEach")
produtos.forEach((produto, indice) => {
    document.writeln(`<p>${indice + 1} - ${produto} </p>`)
})


