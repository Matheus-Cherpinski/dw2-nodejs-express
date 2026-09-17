//Importando o express
import express from "express";

//Importando o arquivo de conexão do Sequelize
import connection from "./config/sequelize-config.js";
// Iniciando o Express 
const app = express() 

//Importando o Controller de produto
import ClienteController from "./Controllers/ClienteController.js"
//Importando o Controller de produto
import ProdutosController from "./Controllers/ProdutosController.js"
//Importando o Controller de produto
import PedidosController from "./Controllers/PedidosController.js"
// Define o EJS como Renderizador de páginas
app.set('view engine', 'ejs')
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static('public'))

//Realizando A conexão com o banco de dados
connection.authenticate().then(() =>{
    //Sucesso na promessa:
    console.log("Conexão com o banco de dados foi realizada com sucesso");
}).catch((error) => {
    console.log (`Ocorreu um erro ao se conectar com o banco de dados. Erro: ${error}`);
});
// ROTA PRINCIPAL
app.get("/",function(req,res){
    res.render("index")
})

//Inicilizando as rotas de Produto
app.use("/", ProdutosController)
//Inicializando as rotas de Cliente
app.use ("/", ClienteController)
//Inicializando as rotas de Servico
app.use ("/", PedidosController)




// INICIA O SERVIDOR NA PORTA 8080
const port = 8080;
app.listen(port,function(erro){
    if(erro) {
        console.log("Ocorreu um erro!")

    }else{
        console.log(`Servidor iniciado com sucesso em http://localhost:${port}`)
    }
})