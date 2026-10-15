//Importando o framework Express
import express from "express";
import Pedidos from "../models/Pedidos.js";
//Router: método do Express para criar rotas
const router = express.Router();
//Importando o Model de cliente
import Cliente from "../models/Cliente.js";
// ROTA PEDIDOS
router.get("/pedidos", function (req, res) {
  Promise.all([ 
    // Listando todos os Pedidos
  Pedidos.findAll({
    // Trazendo os dados dos Clientes juntos com os pedidos (innerJoin)
    include: [
      {
        model: Cliente, // Inclui a tabela de Clientes no SELECT
        required: true, // Opcional: Garante que somente pedidos com Clientes associados sejam retornados
      },
    ],
  }),
    // Selecionando todos os clientes
    Cliente.findAll()
  ]) 
  .then(([pedidos, clientes]) => {
    res.render("pedidos", {
      // Enviando a lista de pedidos para a página
      pedidos : pedidos,
      clientes: clientes
    })
  }).catch(error => {
    console.log(`Erro ao listar os pedidos. Erro: ${error}`)
  });
});

//Rota de cadastro de pedidos
router.post("/pedidos/cadastrar", (req,res) => {
  //capturando os dados do dormulario
  const numero = req.body.numero;
  const valor = req.body.valor;
  const clienteId = req.body.clienteId;
  Pedidos.create({
    numero : numero,
    valor : valor,
    cliente_id : clienteId
  }).then (() => {
    res.redirect("/pedidos")
  }).catch(error => {
    console.log(error);
  });
});
export default router;
