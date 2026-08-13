//Função anônima

const mult = function (x) {
  return x * 2;
};

const x = 15;

document.write(`<p> o resultado da multiplicação é ${mult(x)} </p>`);

//Função seta - arrow funciton - com um unico parametro
const triplo =  y => {
  return y * 3;
};
const y = 100;
document.write(`<p> O triplo de ${y} é ${triplo(y)}</p>`)

//Função seta - com mais de um Parâmetro - arrow function
const calculadora = (num1, operador, num2) => {
    return eval (`${num1} ${operador} ${num2}`)
}
//eval no javascript é uma função nativa que realiza calculos matematicos a partir de dois numeros e um operador
const num1 = 67;
const operador = `*`;
const num2 = 67;

document.writeln(`<p>O resultado de ${num1} ${operador} ${num2} é igual a ${calculadora (num1, operador, num2)}</p>`)

//função imediata (IIFE  - Immeditely Invoked function Expression)
const imediata = (function () {
    document.writeln("<p>Estou sendo executa imediatamente!</p>");
})() //passando os parâmetros;

//Função imediata com parâmetros 
const loadUser = (function (user){
    document.write(`<p>Carregando as informações do usuário: <strong>${user}</strong>... </p>`)
    //mostrando após 3 segundos
    setTimeout (() => {
        document.writeln(`
        Nome: Matheus Cherpinski <br>
        Idade: 18 anos <br>
        Cidade: Registro <br>
        Hobby: Jogar
    `)}, 3000);
})("matheus"); //passando o parametro