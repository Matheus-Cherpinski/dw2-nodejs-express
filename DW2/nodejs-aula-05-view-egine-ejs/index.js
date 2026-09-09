// index.js : arquivo principal do back-end.
// Importando o Express.js para o projeto
const express = require("express"); // Forma clássica (CommonJS Modules)
const app = express(); // Criando uma instância do Express
// Configurando o EJS
app.set("view engine", "ejs"); // EJS renderiza as páginas do site
//Configurando a pasta 'public' para arquivos estaticos
app.use(express.static("public"));
// AQUI IRÃO AS ROTAS DO SITE:
// .get() -> Cria uma rota na aplicação
// ROTA PRINCIPAL
app.get("/", (req, res) => {
  res.render("index");
});
// ROTA DE PRODUTOS
app.get("/produtos", (req, res) => {
  // Lista de produtos (dados mockados)
  // Futuramente os dados virão do banco de dados
  // Array de objetos
  const produtos = [
    { nome: "Computador", marca: "Lenovo", preco: 3500 },
    { nome: "Celular", marca: "Samsung", preco: 4000 },
    { nome: "Notebook", marca: "Dell", preco: 5100 },
    { nome: "Tablet", marca: "Asus", preco: 2400 },
  ];
  res.render("produtos", {
    // Enviando a lista de produtos para a página
    produtos: produtos,
  });
});
// ROTA DE SERVIÇOS
app.get("/servicos", (req, res) => {
  res.render("servicos");
});
// ROTA DE CLIENTES
app.get("/clientes", (req, res) => {
  const clientes = [
    { nome: "Diego Max", cpf: "999.999.999-99" },
    { nome: "Gregory Souza", cpf: "888.888.888-88" },
    { nome: "Laura Júlia", cpf: "777.777.777-777" },
    { nome: "Mario Takahashi", cpf: "555.555.555-55" },
  ];
  res.render("clientes", {
    clientes: clientes,
  });
});
// ROTA DE PERFIL
app.get("/perfil", (req, res) => {
  res.render("perfil");
});
// Método do Express para iniciar o servidor back-end
// app.listen()
// Iniciando o servidor na porta 8080
const port = 8080;
app.listen(port, (error) => {
  // Tratando erros de inicialização
  if (error) {
    console.log(`Ocorreu um erro ao iniciar o servidor. Erro: ${error}`);
    // Em caso de sucesso
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
