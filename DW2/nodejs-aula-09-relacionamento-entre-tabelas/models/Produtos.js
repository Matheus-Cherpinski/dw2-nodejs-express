//Model Produto
//Um modle é uma representação de uma entidade do sistema(tabela)
import connection from "../config/sequelize-config.js"
//importando a biblioteca Sequelize
import Sequelize  from "sequelize";
//O método define() define a estrutura de uma tabela no banco
const Produto = connection.define('produtos', {
    //Atributos da tabela 'clientes'
   
    nome: {
        type: Sequelize.STRING, 
        allowNULL: false
    },
    preco: {
        type: Sequelize.FLOAT,
        allorNULL: false
},
    categoria:{
type: Sequelize.STRING,
allorNULL: false
    }
});
//O método .sync() sincroniza a estrutura do model com a tabela no banco de dados
//force : false sincroniza a tabela somente na primeira vez (somente se não existir)
Produto.sync({force: false}) 

//Exportando o módulo
export default Produto;