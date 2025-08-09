/* Functions / Funções
        - Trecho de código que é executado
            SOMENTE quando solicitado
        - Trecho de código que pode ser reutilizado várias vezes
        
    [ x ] Função VOID (vazia) => não retorna nada
    [ x ] Função com parâmetros => os parametros são como variaveis que a função usa para executar sua função
    [ x ] Função Return
    [ x ] Arrow Function
*/

//Função VOID
function digaMeuNome() {
  console.log("Hygor");
}

//Função com parâmetros
function digaQualquerNome(nome) {
  console.log(nome);
}
function soma(n1, n2) {
  let soma = n1 + n2;
  console.log(soma);
}

//Função com Return
function estaEndividado(receita, gastos) {
  if (receita > gastos) {
    return "Está no AZUL";
  } else {
    return "Está do VERMELHO";
  }
}
let situação = estaEndividado(1200, 1111);

//Arrow Fuction
const nomeAtual = (nome) => {
  console.log(nome);
};

//Recursividade => uma função que chama a si mesma, ela se assemelha a um laço de repetição, precisando de um valor de parada ou uma condição
function loop(x){
    console.log(x)
    if(x >= 10){
        return `Agora está no valor ${x}`; // esse return só é chamado quando a condição é atendida, até que seja atendida o debaixo que é executado
    }
    return loop(x + 1);
}
let valorAtual = loop(0);
console.log(valorAtual);