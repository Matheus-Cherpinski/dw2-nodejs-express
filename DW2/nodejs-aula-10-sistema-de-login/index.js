//Importando o express
import express from "express";

//Importando o arquivo de conexão do Sequelize
import connection from "./config/sequelize-config.js";
// Iniciando o Express 
const app = express() 

//Importando o express-session
import session from "express-session";
//Importando o middleware de Autenticação
import Auth from "./middlewares/Auth.js";
//Importando o Controller de cliente
import ClienteController from "./controllers/ClientesController.js"
//Importando o Controller de produto
import ProdutosController from "./controllers/ProdutosController.js"
//Importando o Controller de pedidi
import PedidosController from "./controllers/PedidosController.js"
// Importando o Controller de Usuarios
import UsuariosController from "./controllers/UsuariosController.js"
//Importando os Models
import Cliente from "./models/Cliente.js"
import Pedidos from "./models/Pedidos.js"
import Produtos from "./models/Produtos.js"
//Importando as ASSOCIAÇÕES
import defineAssociations from "./config/associations.js";

//Configurando a Sessão de usuario
app.use(session({
    secret: "segredoloja",
    cookie: {maxAge: 3600000}, //Sessão expira em 1 hora
    saveUninitialized: false,
    resave: false
}));
// Define o EJS como Renderizador de páginas
app.set('view engine', 'ejs')
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static('public'))
// configurando express para aceitar dado de formulario
app.use(express.urlencoded({extended:false}))

//Realizando A conexão com o banco de dados
connection.authenticate().then(() =>{
    //Sucesso na promessa:
    console.log("Conexão com o banco de dados foi realizada com sucesso");
}).catch((error) => {
    console.log (`Ocorreu um erro ao se conectar com o banco de dados. Erro: ${error}`);
});
//Criando o banco de dados se ele não existir
const DB_NAME = "loja_relacional";
connection.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME};`).then(() => {
    console.log(`O banco de dados ${DB_NAME} está criado!`)
}).catch((error) => {
    console.log(`Ocorreu um erro ao criar o banco de dados. Erro: ${error}`);
})

//Aplicando as associações
defineAssociations();

//Sincronizando os Models

Promise.all([
Cliente.sync({force: false}),
Pedidos.sync({force: false})
]).then(() => {
    console.log("Tabelas e relacionamentos sincronizados com sucesso!");
}).catch(error => {
    console.log("Erro ao sincronizar as tabelas. Erro: " + error);
});
// ROTA PRINCIPAL
app.get("/",Auth, (req,res) =>{
    res.render("index")
});

//Inicilizando as rotas de Produto
app.use("/", ProdutosController)
//Inicializando as rotas de Cliente
app.use ("/", ClienteController)
//Inicializando as rotas de Servico
app.use ("/", PedidosController)
// Inicializando as roas de usuarios
app.use ("/", UsuariosController)



// INICIA O SERVIDOR NA PORTA 8080
const port = 8080;
app.listen(port,function(erro){
    if(erro) {
        console.log("Ocorreu um erro!")

    }else{
        console.log(`Servidor iniciado com sucesso em http://localhost:${port}`)
    }
})