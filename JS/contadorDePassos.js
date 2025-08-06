//pegando o botão
let btn = document.querySelector("#btn");
btn.addEventListener("click", contar);
//função de contar
function contar(){
    //pegando os valores
    const inicio = Number(document.querySelector("#inicio").value);
    const fim = Number(document.querySelector("#fim").value);
    const passo = Number(document.querySelector("#passo").value);
    // saida da resposta
    const res = document.querySelector("#res");
    res.innerHTML = "";
    //laço
    if (passo <= 0){
        alert("Passo invalido! Considerando passo 1");
        passo = 1;
    }
    if (inicio > fim){
        for(let c = inicio; c >= fim; c-= passo){
            res.innerHTML += ` => ${c}`
        }
    } else if (inicio < fim){
        for(let c = inicio; c <= fim; c += passo){
            res.innerHTML += ` => ${c}`;
        }
    }
}