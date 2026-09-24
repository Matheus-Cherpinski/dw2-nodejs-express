//Importando o framework Express
import express from "express"

//Router: método do Express para criar rotas
const router = express.Router()



// ROTA DE CLIENTES
router.get("/cliente", (req, res) => {
  const clientes = [
    { nome: "Diego Max", cpf: "999.999.999-99" },
    { nome: "Gregory Souza", cpf: "888.888.888-88" },
    { nome: "Laura Júlia", cpf: "777.777.777-777" },
    { nome: "Mario Takahashi", cpf: "555.555.555-55" },
  ];
  res.render("clientes", {
    clientes: clientes,
  });
});
export default router;