//Model cliente
//Um modle é uma representação de uma entidade do sistema(tabela)
import connection from "../config/sequelize-config.js"
//importando a biblioteca Sequelize
import Sequelize  from "sequelize";
//O método define() define a estrutura de uma tabela no banco
const Cliente = connection.define('clientes', {
    //Atributos da tabela 'clientes'
    nome: {
        type: Sequelize.STRING, 
        allowNULL: false
    },
    cpf: {
        type: Sequelize.STRING,
        allorNULL: false
    },
    endereco: {
        type: Sequelize.STRING,
        allowNULL: false
    }
});
//O método .sync() sincroniza a estrutura do model com a tabela no banco de dados
//force : false sincroniza a tabela somente na primeira vez (somente se não existir)
Cliente.sync({force: false}) 

//Exportando o módulo
export default Cliente;