let valores = [1,5,6,8,1,2];
function media(){
    let soma = 0;
    for(let c = 0; c <= valores.length - 1; c++){
        soma += valores[c];
    }
    return soma
}
console.log(`A média dos valores é ${media()}`);