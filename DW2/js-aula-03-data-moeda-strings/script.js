document.writeln ("<h3>Manipulando Datas: </h3>")

// Para começarmos satas no Javascript, precisamos primeiro criar uma instância da classe Data, que é nativa do Javascript

const dataAtual = new Date() ;

document.writeln(dataAtual);

// Pegando o dia atual 

const dia = dataAtual.getDate();
document.writeln(`<p>hoje é dia ${dia}.</p>`)

// Pegando o mes atual 

const mes = dataAtual.getMonth() +1;
document.writeln(`<p>Estamos no mes ${mes}.</p>`)

// Pegando o dia atual 

const ano = dataAtual.getFullYear();
document.writeln(`<p>Atualmente estamos no ano ${ano}</p>`)

//Exibindo data completa
document.writeln(`<p>Data de hoje: ${dia}/${mes}/${ano}.</p>`)

//adicionando dias, meses e anos à data atual 
//Adicionando 4 dias à data atual:
dataAtual.setDate(dataAtual.getDate() + 4);

//Exibindo a nova data
document.writeln(`<p>Daqui a 4 dias será dia ${dataAtual.getDate()}</p>`);

//Adicionando 3 meses à data atual
dataAtual.setMonth(dataAtual.getMonth() + 3);

//Exibindo a nova data
document.writeln(`<p>Daqui a 3 meses será dia ${dataAtual.getMonth()+1} </p>`);

//Adicionando 2 anos à data atual:
dataAtual.setFullYear(dataAtual.getFullYear() +2);
//Exibindo a nova data:
document.writeln (`<p>Daqui 2 anos será ${dataAtual.getFullYear()}</p>.`);

//##############################################################

//Formatação de moedas
document.writeln("<h3>Manipulando numeros e moedas moedas:</h3>");
const futuroSalario = 40000.3;
document.writeln(`<p>${futuroSalario}</p>`);
//Mostrando casas decimais
document.writeln(`<p>${futuroSalario.toFixed(2)}</p>`);
//Ocultando casas decimais
document.writeln(`<p>${futuroSalario.toFixed(0)}</p>`);
//trocando o identificador de casas decimais
document.writeln(`<p>${futuroSalario.toFixed(2).replace(".", ",")}</p>`);

//formatando para real
document.writeln(`<p>
${futuroSalario.toLocaleString("pt-br", {
    style: "currency",
    currency: "USD"
})}
</p>`);

// formatações de strings
document.writeln("<h3>Formatação de Strings:</h3>");
const nome = "Matheus Cherpinski";

//Alterando strings para letras maiusculas
document.writeln(`<p>${nome.toUpperCase()}</p>`);
//Alterando strings para letras minusculas
document.writeln(`<p>${nome.toLowerCase()}</p>`);
//Colocando as iniciais em letras maiusculas
const cidade = "sete barras";
const cidadeFormatada = cidade.split(" ").map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1)).join(" ");
//Exibindo
document.writeln (`<p>${cidadeFormatada}</p>`);

//contando o numero de caracteres
document.writeln(`<p>Seu nome tem ${nome.replace(/\s/g, "").length} letras.</p>`)