document.writeln(`<h1>Funções no javascript</h1>`)
document.writeln(`<h3>
    Função simples - ex 01
    </h3>`)

function showMessage() {
  const message = "<h4> Matheus Cherpinski Silvano - 18 anos - Curitiba </h4>";
  document.write(message);
}
showMessage();
//exercício 2
document.writeln(`<h3>Função com parâmetros - exercico 2 </h3>`)
const number1 = 1;
const number2 = 2;
function divisao(number1, number2) {
        let resultado = number1 / number2;
        document.write(`<p> ${number1} / ${number2} O resultado da divisão foi ${resultado}.</p>`)
}
divisao(number1, number2);

//exercico 3
document.writeln(`<h3> Função com retorno - ex 3</h3>`)
const n1 = 3;
const n2 = 4;
const n3 = 5;
function multiplicacao(n1, n2, n3) {
        let resultado = n1 * n2 * n3;
        document.write(`<p> ${n1} * ${n2} * ${n3} O resultado da divisão foi ${resultado}.</p>`)
}
multiplicacao(n1, n2 , n3);

document.writeln(`Função com mais de um retorno - 04 `)
const idade = 56
function menoridade(idade) {
    
if  (idade => 18) {
    return " maior de idade";
}
else{
    return "Menor de idade";
}
}
document.writeln(`Voce tem ${idade} anos e é ${menoridade(idade)}`)
menoridade(idade);

// 5. Função anônima
document.write("<h2>Função anônima</h2>");

const gradeApprover = function (grade1, grade2) {
  const result = (grade1 + grade2) / 2;
  if (result <= 5) {
    return "Reprovado";
  } else {
    return "Aprovado";
  }
};

const grade1 = 10;
const grade2 = 9;

document.write(`O aluno foi <strong>${gradeApprover(grade1, grade2)}</strong>`);

// 6. Arrow function com parâmetro único
document.write("<h2>Arrow function com parâmetro único</h2>");

const triple = (num3) => {
  return num3 * 3;
};

num3 = 26;

document.write(`O triplo do número ${num3} é ${triple(num3)}`);

// 7. Arrow function com mais de um parâmetro
document.write("<h2>Arrow function com mais de um parâmetro</h2>");

const sum = (d, e, f, g) => {
  return d + e + f + g;
};

const d = 6;
const e = 30;
const f = 40;
const g = 20;

document.write(`O valor da soma é ${sum(d, e, f, g)}`);

// 8. IIFE Função anônima
document.write("<h2>IIFE Função anônima</h2>");

const greeting = (function (name) {
  document.write(`Olá, seja bem-vindo <strong>${name}!</strong>`);
})("Matheus");