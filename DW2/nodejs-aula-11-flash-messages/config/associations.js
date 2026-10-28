//Nesse arquivos será definido os relacionamentos entre relacionamentos entre tabelas

//Model cliente
import { ForeignKeyConstraintError } from "sequelize";
import Cliente from "../models/Cliente.js";

//Model pedido
import Pedido from "../models/Pedidos.js";

//Definindo os relacionamentos entre os Models
const defineAssociations = () => {
        //Um cliente possui MUITOS pedidos
    Cliente.hasMany(Pedido ,{ foreignKey: "cliente_id"});
    Pedido.belongsTo(Cliente, {foreignKey: "cliente_id"});
};

//Exportando o módulo
export default defineAssociations;