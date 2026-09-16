
//Importando o framework Express
import express from "express"

//Router: método do Express para criar rotas
const router = express.Router()

// ROTA DE PERFIL
router.get("/perfil", (req, res) => {
  res.render("perfil");
});
export default router;