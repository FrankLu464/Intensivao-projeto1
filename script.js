const buttonplayPause = document.getElementById("play-pause");
const buttonSkip = document.getElementById("proximo");
const buttonBack = document.getElementById("anterior");
const chapterName = document.getElementById("capitulo");
const audioChapter = document.getElementById("audio-capitulo");

const numeroCapitulos = 10;
let taTocando = 0;
let capituloAtual = 1;

function tocarFaixa (){  
     audioChapter.play();
     buttonplayPause.classList.remove("bi-play-circle-fill");
     buttonplayPause.classList.add("bi-pause-circle-fill");   
}

function pausarFaixa (){
    audioChapter.pause();    
    buttonplayPause.classList.remove("bi-pause-circle-fill");
    buttonplayPause.classList.add("bi-play-circle-fill");   
}

function tocarOuPausar (){
    if(taTocando == 0){
        tocarFaixa();
        taTocando = 1;
    } else {
       pausarFaixa();
       taTocando = 0;
    }
}

function trocarNomeFaixa (){
    chapterName.innerText = "Capítulo " + capituloAtual;
}

function proximaFaixa() {
 
    if (capituloAtual == numeroCapitulos) {
        capituloAtual = 1;
    } else {
        capituloAtual = capituloAtual + 1;
    }

    audioChapter.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
}

function voltarFaixa() {
 
    if (capituloAtual == 1) {
        capituloAtual = numeroCapitulos;
    } else {
        capituloAtual = capituloAtual - 1;
    }

    audioChapter.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
}


buttonplayPause.addEventListener("click", tocarOuPausar);
buttonSkip.addEventListener("click", proximaFaixa);
buttonBack.addEventListener("click", voltarFaixa);