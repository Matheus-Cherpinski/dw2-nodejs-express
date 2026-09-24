

//Importando o framework Express
import express from "express"
import Produtos from "../models/Produtos.js"
//Router: método do Express para criar rotas
const router = express.Router()



// ROTA PRODUTOS
router.get("/produtos",function(req,res){
     Produtos.findAll().then(produtos => {
    res.render("produtos", {
        produtos: produtos
    })
}).catch(error => {
    console.log(`Ocorreu um erro ao analisar os prosutos. Erro $`)
})
})
export default router;