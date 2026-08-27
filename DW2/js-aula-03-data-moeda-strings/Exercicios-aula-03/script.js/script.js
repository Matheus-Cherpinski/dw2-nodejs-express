class Heroi {
    //atributos
    constructor(nome, vida, velocidade, forca) {
   
    this.nome = nome;
    this.vida = vida;
    this.velocidade = velocidade;
    this.forca = forca;
    }
    //métodos
    correr() {
        return "O herói está correndo";
    }
    andar() {
        return "O herói está andando";
    }
    atacar() {
        return "O herói está atacando";
    }
    defender() {
        return "O herói está se defendendo";
    }

    const HomemAranha = new Heroi ("Homem")


    
}