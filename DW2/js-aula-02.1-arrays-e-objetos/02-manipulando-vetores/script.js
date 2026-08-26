let frutas = ['Laranja', 'Maça', 'Banana']

document.writeln(`<p>Os itens do nosso vetor são: ${frutas}</p>`)

frutas[3] = 'Morango';

document.writeln(`<p>Agora a lista é: ${frutas}</p>`)

//Método Push: insere um novo elemento no final do vetor
frutas.push("Abacaxi")

document.write(`<p>Agora a lista é: ${frutas }</p>`)

//Método Unshift: insere um novo elemento no INICIO do vetor
// frutas[0] = 'Pera'
document.write(`<p>Agora a lista é: ${frutas }</p>`)

frutas.unshift(`Pera`)
document.write(`<p>Agora a lista é: ${frutas }</p>`);

//Método Length: retorna o numero de elementos no vetor

document.writeln(`Na nossa lista temos ${frutas.length} frutas.`)

// Método sort: Ordena os itens do vetor

document.writeln(`<p>O primeiro item da lista é ${frutas[0]}</p>`)
let frutasOrdenadas = frutas.sort()

document.write(`<p>Agora a lista é: ${frutasOrdenadas[0] }</p>`)
document.write(`<p>Agora a lista é: ${frutasOrdenadas }</p>`)

//Método Sort: Ordenando em ordem Crescente e descrescente
let numeros = [6, 8, 2, 9, 3, 800, 200];
document.writeln(`<p>Os numeros são: ${numeros}</p>`);

document.writeln(`<p>Os numeros ordenados são ${numeros.sort()}</p>`)
//Ordenando corretamente os numeros
document.writeln(`<p>Os numeros ordenados de forma crescente são ${numeros.sort((a, b) => a - b )}</p>`)
document.writeln(`<p>Os numeros ordenados de forma descrescente são ${numeros.sort((a, b) => b - a )}</p>`)
