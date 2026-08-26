class Carro {
  //Nome de classes devem iniciar com a primeira letra maisucula

  //atributos

  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  //Métodos
  buzinar() {
    return "Beep! beep!";
  }
}

//Criando uma instância (objeto) da classe carro
const carroPopular = new Carro ("Fiat", "Uno", "2012");
//Acessando os ATRIBUTOS e MÉTODOS do objeto
document.writeln(`
    <p>O carro popular ${carroPopular.marca}, modelo ${carroPopular.modelo} é do ano ${carroPopular.ano} e quando ele buzina faz ${carroPopular.buzinar()}</p>`)

    const carroEsportivo = new Carro ("Ferrari", "Spider, 2026")

document.writeln(`
    <p>O carro popular ${carroEsportivo.marca}, modelo ${carroEsportivo.modelo} é do ano ${carroEsportivo.ano} e quando ele buzina faz ${carroEsportivo.buzinar()}</p>`)

    //Criando uma nova INSTANCIA : carro conversivel
    const carroConversivel = new Carro();
    carroConversivel.marca = "chevrolet";
    carroConversivel.modelo = "Camaro";
    carroConversivel.ano = "2026";

    ///Adicionando um novo atributo não prevoisto na classe
    carroConversivel.corNeon = "azul"
    //Adicionando um NOVO MÉTODO  (Não previsto na classe)
    carroConversivel.turbo = function () {
      return "vrummmmmmmmmmm! O carro está acelerando!!!";
    }
  document.writeln(`<p>O carro ${carroConversivel.marca} ${carroConversivel.modelo} tem neon da cor azul ${carroConversivel.corNeon}</p>`

  )

  document.writeln(`<p>${carroConversivel.turbo()}</p>`)