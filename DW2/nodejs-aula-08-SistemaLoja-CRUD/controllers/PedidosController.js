
//Importando o framework Express
import express from "express"
import Pedidos from "../models/Pedidos.js"
//Router: método do Express para criar rotas
const router = express.Router()


// ROTA PEDIDOS
router.get("/pedidos",function(req,res){
  Pedidos.findAll().then(pedidos => {
    res.render("pedidos", {
        pedidos: pedidos
    })
}).catch(error => {
    console.log(`Ocorreu um erro ao listar os clientes. Erro: ${error}`)
})
})
export default router;