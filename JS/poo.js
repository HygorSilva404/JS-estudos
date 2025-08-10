//Função construtora

//Criando uma pessoa
//Versão longa
/*
function criandoNovaPessoa(name){
    let obj = {};
    obj.name = name;
    obj.saudacao = () => {
        console.log(`Olá, eu sou ${obj.name}`);
    };
    return obj;
};
*/
//Versão curta
/*
function Person(nome){
    this.nome = nome;
    this.idade;
    this.saudacao = () =>{
        console.log(`Olá, eu sou ${this.nome} e tenho ${this.idade} anos.`);
    };
};
let pessoa1 = new Person("Bob");
pessoa1.idade = 21
*/

// Crianda um construtor acabado
function Person(primeiro, ultimo, idade, genero, interesses) {
  this.nome = {
    primeiro: primeiro,
    ultimo: ultimo,
  };
  this.idade = idade;
  this.genero = genero;
  this.interesses = interesses;
  this.bio = () => {
    console.log(
      `${this.nome.primeiro} ${this.nome.ultimo} tem ${this.idade} anos. Possui interrese em ${this.interesses[0]} e ${this.interesses[1]}`
    );
  };
  this.saudacao = () => {
    console.log(`Olá, meu nome é ${this.nome.primeiro}`);
  };
}

let aluno1 = new Person("Carlos", "Henrique", 15, "masculino", ["música", "judô"]);
 