//Importando o framework Express
import express from "express"

import Cliente from "../models/Cliente.js";
//Router: método do Express para criar rotas
const router = express.Router()



// ROTA CLIENTES
router.get("/clientes",function(req,res){
    //Selecionando todos os clientes do banco de dados
    Cliente.findAll().then(clientes => {

            res.render("clientes", {
                //Enviando a lista de clientes para a pagina html
          clientes : clientes
    })
    }).catch(error => {
        console.log(`Ocorreu um erro ao listar os clientes. Erro: ${error}`)
    })

    
})
export default router;