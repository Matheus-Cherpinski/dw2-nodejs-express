//Model Pedido
//Um modle é uma representação de uma entidade do sistema(tabela)
import connection from "../config/sequelize-config.js"
//importando a biblioteca Sequelize
import Sequelize  from "sequelize";
//O método define() define a estrutura de uma tabela no banco
const Pedidos = connection.define('pedidos', {
    //Atributos da tabela 'clientes'
   
    numero: {
        type: Sequelize.INTEGER, 
        allowNULL: false
    },
    valor: {
        type: Sequelize.FLOAT,
        allorNULL: false
},
//chave estrangeira
cliente_id: {
    type: Sequelize.INTEGER,
    allowNULL: false,
},
});
//O método .sync() sincroniza a estrutura do model com a tabela no banco de dados
//force : false sincroniza a tabela somente na primeira vez (somente se não existir)
//Essa linha será movida para o arquivo "associations.js"
// Pedido.sync({force: false}) 

//Exportando o módulo
export default Pedidos;