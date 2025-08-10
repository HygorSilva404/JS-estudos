const banda = {
    nome: "Lagum",
    nacionalidade:"brasileira",
    genero: "Pop Rock",
    membros:["Pedro Calais",'Otavio Cardoso "Zani"','Glauco Borges "Jorge"','Francisco Jardim "Chicão"'],
    formacao: 2014,
    cisao: false,
    albuns: [
        {
           nome: "Seja o Que Quiser",
           lancamento: 2016
        },
        {
            nome: "Coisas da Geração",
            lancamento: 2018
        },
        {
            nome: "Memórias (de onde eu nunca fui)",
            lancamento: 2020
        }
    ]
}
console.log(banda.albuns[0].lancamento)