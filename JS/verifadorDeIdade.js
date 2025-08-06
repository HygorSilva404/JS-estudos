// ano atual
let ano = new Date();
let anoAtual = ano.getFullYear()
//botão de verificação
let btn = document.querySelector("button#res").addEventListener("click",  function (event){ event.preventDefault(); verificar()});

function verificar(){
    const sexo = sexoIndivduo();
    const idade = IdadeAtual()
    const res = document.querySelector("h2");
    const img = document.querySelector("#imagem");

    if (sexo == "Mulher" && idade <= 6) {
        img.src = "/exercicios/IMGS/menina-pequena.jpg";
        res.innerHTML = `Detectamos uma ${sexo} de ${idade} anos`;
    } else if (sexo == "Mulher" && idade <= 13) {
        img.src = "/exercicios/IMGS/garota.jpg";
        res.innerHTML = `Detectamos uma ${sexo} de ${idade} anos`;
    } else if (sexo == "Mulher" && idade <= 19) {
        img.src = "/exercicios/IMGS/mulher-adoleescente.jpg";
        res.innerHTML = `Detectamos uma ${sexo} de ${idade} anos`;
    } else if (sexo == "Mulher" && idade <= 65) {
        img.src = "/exercicios/IMGS/mulher-jovem.jpg";
        res.innerHTML = `Detectamos uma ${sexo} de ${idade} anos`;
    } else if (sexo == "Mulher" && idade > 65) {
        img.src = "/exercicios/IMGS/mulher-velha.jpg";
        res.innerHTML = `Detectamos uma ${sexo} de ${idade} anos`;
    } else {
        alert("Algo errado");
    }

    if (sexo == "Homem" && idade <= 6) {
        img.src = "/exercicios/IMGS/menino-pequeno.jpg";
        res.innerHTML = `Detectamos um ${sexo} de ${idade} anos`;
    } else if (sexo == "Homem" && idade <= 13) {
        img.src = "/exercicios/IMGS/garoto.jpg";
        res.innerHTML = `Detectamos um ${sexo} de ${idade} anos`;
    } else if (sexo == "Homem" && idade <= 19) {
        img.src = "/exercicios/IMGS/homem-adolescente.jpg";
        res.innerHTML = `Detectamos um ${sexo} de ${idade} anos`;
    } else if (sexo == "Homem" && idade <= 65) {
        img.src = "/exercicios/IMGS/homem-jovem.jpg";
        res.innerHTML = `Detectamos um ${sexo} de ${idade} anos`;
    } else if (sexo == "Homem" && idade > 65) {
        img.src = "/exercicios/IMGS/homem-velhao.jpg";
        res.innerHTML = `Detectamos um ${sexo} de ${idade} anos`;
    } else {
        alert("Algo errado");
    }


}

function IdadeAtual(){
    //pegar o ano de nascimento 
    let inputNascimento = document.querySelector("#anoNasc");
    let nascimentoValor = Number(inputNascimento.value);
    //idade atual
    let idade = anoAtual - nascimentoValor
    return idade;
}

function sexoIndivduo(){
    //sexo do individuo
    let inputSexo = document.querySelector('input[name="sexo"]:checked')
    return inputSexo ? inputSexo.value : null;
}