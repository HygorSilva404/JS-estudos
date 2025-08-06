//Variaveis compostas (Arrays) - é uma variavel que é composta por seus elementos e cada elemento possui uma chave de identificação
let num = [2,5,4,3,9,0,1];

/*
adicionar valores no array
    num.push(9);
verificar o tamanho do array
    num.length
colocar os valores em ordem crescente
    num.sort()
*/
num.push(6)
num.sort()
/*
console.log(`O vetoe tem ${num.length} valores`);
console.log(`O primeiro valor do vetor é o valor ${num[0]}`);
console.log(`Os valores são ${num}`);
*/
//Usando o laço FOR para mostrar os valores no array
/*
for(let pos = 0; pos<num.length; pos++){
    console.log(`O número ${num[pos]} está na posição ${pos}`);
}
    */
//Usando um outro tipo de laço FOR
for(let pos in num){
    console.log(`O número ${num[pos]} está na posição ${pos}`);
}