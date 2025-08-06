//pegar o valor da caixa de entrada e adicionar no select e armazenar o valor em um array
//pegando valor
let btnAdicionar = document.querySelector("#verificar").addEventListener("click", adicionar); 
let btnFinalizar = document.querySelector("#finalizar").addEventListener("click", finalizar);
let res = document.querySelector("#res");
let numArmazenados = []
let soma = 0;

//adicionando o valor no array
function adicionar(){
    let valor = document.querySelector("#valorTab");
    let num = Number(valor.value);
    if(valor.value == ""){ //validação para saber se o campo esta preenchido
        alert("Digite um valor para prosseguir!");
    } else if(numArmazenados.includes(num)){
        alert("Valor já informado! Digite outro valor!") // analisa o array para saber se esse valor já existe nele
    } else {
        numArmazenados.push(num);
        valor.value = ""; // vai limpara o campo de texto
        res.innerHTML = "" // vai limpar a parte do resultado sempre que apertar no botão
        //Adicionando os elementos dentro do select
        let tabSelect = document.querySelector("#saltab");
        let item = document.createElement("option");
        item.innerText =  `Foi adicionado o valor ${num}`;
        tabSelect.appendChild(item);
    }
}
//mostrando o resultado
function finalizar(){
    //criando os elementos para o resultado
    let item = document.createElement("p");
    let resultado = maiorEmenor();
    item.innerHTML = `
    Ao todo, temos ${numArmazenados.length} números cadastrados <br> 
    O maior valor informado foi ${resultado.maior}<br> 
    O menor valor infomado foi ${resultado.menor}<br> 
    Somando todos os valores, temos ${somatorio()}<br> 
    A média dos valores digitados é ${media()}`
    res.appendChild(item);
}
//função de media
function media(){
    let soma = 0;
    for(let c = 0; c <= numArmazenados.length - 1; c++){ 
        // sempre que fizer por laço FOR  faça com -1 porque se não a conta vai dar NaN
        soma += numArmazenados[c];
    }
    return soma / numArmazenados.length;
}
//função de soma
function somatorio(){
    let somaDosValores = 0;
    for (let c = 0; c <= numArmazenados.length -1; c++){
        somaDosValores += numArmazenados[c];
    }
    return somaDosValores;
}
//função de menor e igual
function maiorEmenor(){
    let maior = numArmazenados[0];
    let menor = numArmazenados[0];
    for(let c = 1; c <= numArmazenados.length; c++){
        if(numArmazenados[c] > maior){
            maior = numArmazenados[c];
        }
        if(numArmazenados[c] < menor){
            menor = numArmazenados[c];
        }
    }
    return {maior, menor};
}