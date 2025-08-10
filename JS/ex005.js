const gato = {
    nome: "Beth",
    raca: "Persa",
    cor: "Cinza",
    saudacao: function(){
        console.log("Meow!");
    },
};

let myDataName = "tutor";
let myDataValue = "Luiz";
gato[myDataName] = myDataValue;
gato.cor = "Preto";

console.log(gato)