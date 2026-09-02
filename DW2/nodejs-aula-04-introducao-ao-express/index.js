// Index.js : arquivo principal do back-end.

// Importando o Express.js para o projeto
const express = require("express")//forma clássica (CommonJS Modulos)


const app = express() //Criando uma instância do Express

//configurando o EJS
app.set('view engine', 'ejs') // EJS renderiza as paginas do site

//aqui irão as rotas do site
//rota principal
//.get() --> cria uma rota na aplicação
app.get("/", (req, res) => {
res.render("index");
});




//ROTA DE PRODUTOS
app.get("/produtos", (req, res) => {
    res.render ("produtos");
});
//Rota de clientes
app.get("/clientes", (req, res) => {
    res.render ("clientes");
});
//rota de servicos
app.get("/servicos", (req, res) => {
    res.render ("servicos");
});
//rota de perfil
app.get("/perfil", (req, res) => {
    res.render ("perfil");
});
//Método do Express para iniciar o servidor back-end
//app.listen()

//Iniciando o servidor na porta 8080
const port = 8080;
app.listen(port, (error) =>{
    // Tratando erros de inicialização
    if (error) {
        console.log(`Ocorreu um erro ao iniciar o servidor. Erro: ${error}`)
        //Em caso de sucesso
    } else {
        console.log(`Servidor inicializado com sucesso em: http://localhost:${port}`)
    }
});