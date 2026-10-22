import express from "express";
const router = express.Router();
//Importando o Model
import Usuario from "../models/Usuario.js";

//Importando a biblioteca BCRYPT (hash de senha)
import bcrypt from "bcrypt";
import { where } from "sequelize";

//Rota De Login
router.get("/login", (req,res) => {
    res.render("login", {
    loggedOut: true,
});
});
//Rota de Logout
router.get("/logout", (req, res) => {
    //Limpa a sessão
    req.session.user = undefined;
    //Redireciona para a home
    res.redirect("/")
})
//Rota de autenticação
router.post("/autenticar", (req, res) => {
    //Coletando os dados do formulário
    const email = req.body.email
    const password = req.body.password
    
    //Buscando o usuario no banco
    Usuario.findOne({where: {email:email}}).then(usuario => {
        //se o usuario existir
        if (usuario != undefined) {
            //Validando a senha (hash)
            const senhaCorreta = bcrypt.compareSync(password, usuario.password)
            // usuario.password = hash

            //Se a senha for válida
            if(senhaCorreta) {
                //Autoriza o login e cria aa sessão para o usuario
                req.session.user = {
                    id: usuario.id,
                    email: usuario.email
                }
                // Testando a função
                // res.send(`Usuário logado: <br>
                //     ID: ${req.session.user['id']} <br>
                //     E-mail: ${req.session.user['email']}`)

                //Vai redirecionar para a home após o login
                res.redirect("/");
                //Se a senha ofr inválida
            }else {
                res.send(`Senha inválida!<br>
                    Verifique os dados e tente novamente! <br> 
                    <a href ="/login">Voltar</a>`)
            }
            //Se o usuario não existir
        } else {
                res.send(`Usuario n!<br>
                    Verifique os dados e tente novamente! <br> 
                    <a href ="/login">Voltar</a>`)
        }
    })
})

// rota de cadastro
router.get("/cadastro", (req,res) => {
    res.render("cadastro", {
        loggedOut: true
    });
});

router.post("/cadastro/novo", (req, res) =>  {
    //Coletando os dados do formulário
    const email = req.body.email;
    const password = req.body.password;

    //verificando se o usuario ja existe 
    Usuario.findOne({where: {email: email}}).then(usuario => {
        //Usuario não encontrado
        if (usuario == undefined) {
            //Cadastra o uduario
               // Gerando o hash de senha
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt)
    //Enviando para o banco de dados 
    Usuario.create({
        email: email,
        password: hash,
    }).then(() => {
        res.redirect("/login")
    }).catch(error => {
        console.log("Erro ao criar a conta. Erro: " + error)
    });
    //Usuario ja cadastrado
        }else {
            res.send(`Usuário já cadastrado! <br>
                Verifique os dados e tente novamente. <br>
                <a href="/login">Voltar</a>`)
        }
    })
});
export default router;