//Hora 
let agora = new Date()
let hora = agora.getHours()
//let hora = 4
//Título
let title = document.querySelector("h2")
let horaAgora = title.innerHTML = ` Agora são ${hora} horas`
//Mudar a imagem
function horaDia(){
    const imagem = document.querySelector("img#imagemDia")
    if (hora < 11){
        imagem.src = "/exercicios/IMGS/MANHÃ.jpg" 
    }
    if (hora >= 12){
        imagem.src = "/exercicios/IMGS/TARDE.jpg"
    }
    if (hora >= 19 || hora <=5){
        imagem.src = "/exercicios/IMGS/NOITE.jpg"
    }
}
horaDia();