function carregar () {
    var ola = document.getElementById('ola')
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    if (hora >0 && hora < 12){
        //bom dia
        img.src = "img/manhã.jpg"
        ola.innerHTML = 'Bom dia'
        msg.innerHTML = `agora são ${hora}:${minutos} bom dia`
        document.body.style.background = "#f5c7af"
    }else if(hora <= 18){
        //boa tarde
        img.src = "img/tarde.jpg"
        ola.innerHTML = 'Boa Tarde'
        msg.innerHTML = `agora são ${hora}:${minutos} Boa tarde`
        document.body.style.background = "#ffa13f"
    }else{
        //boa noite
        img.src = "img/noite.jpg"
        ola.innerHTML = 'Boa Noite'
        msg.innerHTML = `agora são ${hora}:${minutos} Boa noite`
        document.body.style.background = "#9c7db6"
    }

}