/*
   Objetos são basicamente variaveis com muitos valores dentro
   
   EX: const carro = {marca: "Ford", modelo: "Ka", ano: 2015}

   Os valores dentro de um objeto são chamados de propriedades
   
   Objetos tambem podem ter metodos. Um metodo é uma função colocada dentro de uma propriedade

   A sua estrutura de sintaxe é simples, cada par nome/valor deve ser separado por uma virgula e o nome e o valor, em cada caso, sepadarado por dois pontos.

    var nomeDoObjeto = {
        nomeMembro1: valorMembro1,
        nomeMembro2: valorMembro2,
        nomeMembro3: valorMembro3,
    };

    Os valores colocados dentro da variavel são encapsulados dentro do objeto, sendo necessário fazer do ponto para acessar seus valores 

*/

//objeto literal
let pessoa = {
  nome: {
    primeiro: "Bob",
    ultimo: "Smith"
  },
  idade: 32,
  sexo: "masculino",
  interesses: ["música", "esquiar"],
  bio: function () {
    console.log(
      `
            ${this.nome.primeiro} ${this.nome.ultimo} tem ${this.idade} anos de idade. Ele gosta de ${this.interesses[0]} e ${this.interesses[1]}. 
            `
    );
  },
  saudacao: function () {
    console.log(`Oi! Eu sou ${this.nome[0]}`);
  },
};

//atualizando valores
pessoa.idade = 30;
pessoa.nome.primeiro = "Jhon";

pessoa.olhos = "azuis";
pessoa.despedida = function(){
    console.log("Adeus a todos!");
}

//ultilização dos colchetes - Adicionar uma propriedade a um objeto usando o método abaixo não é possível com a notação ponto, que só aceita um nome de membro literal, não aceita valor de variável apontando para um nome.
let myDataName = "altura";
let myDataValue = "1,75m";
pessoa[myDataName] = myDataValue;

//O que é o this?
//A palavra-chave this se refere ao objeto atual em que o código está sendo escrito — nesse caso o this se refere a pessoa.
