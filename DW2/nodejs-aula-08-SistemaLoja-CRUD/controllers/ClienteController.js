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

//rota de cdastro de clientes
router.post("/clientes/cadastrar", (req, res) => {
    //capturando os dados vindo do formulario e gravando as variaveis
    const nome = req.body.nome
    const cpf = req.body.cpf
    const endereco = req.body.endereco
    //Chamando os models para gravar os dados no banco
    //Equivalente ao INSERT INTO
    Cliente.create({
        //Nome da coluna / variavel
        nome : nome,
        cpf: cpf,
        endereco : endereco
    }).then (() => {
        res.redirect("/clientes")
    }).catch(error => {
        console.log(`Ocorreu em erro ao cadastrar o cliente.
            Erro: ${error}`)
    });
})
export default router;