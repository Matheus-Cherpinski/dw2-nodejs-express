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

// Rota de cadastro de clientes
router.post("/clientes/cadastrar", (req, res) => {
  // Capturando os dados vindo do formulário e gravando as variáveis
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  // Chamando o model para gravar os dados no banco

  // Equivalente ao INSERT INTO...
  Cliente.create({
    // NOME DA COLUNA / VARIAVEL
    nome: nome,
    cpf: cpf,
    endereco: endereco,
  })
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao cadastrar o cliente. Erro: ${error}`);
    });
});

//Rota para excluir um cliente
// :id -> cria um parêmetro na rota
router.get("/clientes/excluir/:id", (req, res) => {
    //Criando uma variavel para armazenar o parametro que chega pela URL
    const id = req.params.id;
    //Chamando o model e pedindo para excluir o cliente
    Cliente.destroy({
        where : {
            id:id,

        },
    }).then (() => {
        res.redirect("/clientes");
    }).catch(error => {
        console.log(`Ocorreu um erro ao excluir o cliente. Erro: ${error}.`)
    });
});

//rota de dição de cliente
router.get("/clientes/editar/:id", (req, res) => {
    //coletando o parâmetro da URL
    const id = req.params.id;
    //Buscando o cliente no bando pela ID
    Cliente.findByPk(id).then(cliente => {
        res.render("clienteEditar", {
            //Enviando um objeto com os dados do cliente para a pagina
            cliente : cliente,
        });
    }).catch(error => {
        console.log(`Ocorreu um erro ao buscar o cliente. Erro ${error}`)
    })
});

//Rota que altera um cliente no banco de dados
router.post("/clientes/alterar", (req, res) => {
    //Coletando os dados do formulario
    const id = req.body.id;
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const endereco = req.body.endereco;
    // Chamando o model e pedindo para alterar no banco de dados
    Cliente.update(
        {
            nome : nome,
            cpf : cpf,
            endereco : endereco,
        },
        {where : {id : id}}
    ).then (() => {
        res.redirect ("/clientes");
    }).catch(error => {
        console.log(`Ocorreu um erro ao alterar o cliente. Erro: ${error}`);
    });
});
export default router;