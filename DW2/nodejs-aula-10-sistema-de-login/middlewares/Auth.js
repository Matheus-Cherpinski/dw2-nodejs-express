//Este middleware será invocado a cada requisição do usuário
//  em rotas específicas para checar sua autenticação

function Auth(req, res, next) {
  //Verificando se a sessão de objetps de usuário existe
  if (req.session.user != undefined) {
    //Prossiga
    next();
    //Se a sessão existir
  } else {
    //Chama a pagina
    res.render("login", {
        loggedOut: true,
    })
  }
}
export default Auth;
