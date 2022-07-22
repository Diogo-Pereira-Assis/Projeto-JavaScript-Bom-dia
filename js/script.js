function carregar(){
    let msg = window.document.getElementById("msg");
    let img = window.document.getElementById("imagem");
    let title = window.document.getElementById("titulo");
    let body = window.document.getElementById("fundo");

    var data = new Date;
    var hours = data.getHours();
    msg.innerHTML =`Agora são exatamente ${hours} horas`
    if(hours >= 0 && hours <= 12){
       img.src = "./imagens/dia.png";
       title.innerHTML = "Bom! dia";
       body.style.backgroundColor = "#ede3c7";

    } else if(hours <= 18) {
        img.src = "./imagens/tarde.png";
        title.innerHTML = "Boa tarde";
        body.style.backgroundColor = "#e8980e";

    } else {
        img.src = "./imagens/noite.png";
        title.innerHTML = "Boa! noite";
        body.style.backgroundColor = "#242322";
    }
}