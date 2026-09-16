// ROTA DE SERVIÇOS
//Importando o framework Express
import express from "express"

//Router: método do Express para criar rotas
const router = express.Router()

router.get("/servicos", (req, res) => {
  res.render("servicos");
});
export default router;