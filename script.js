function horas() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    //var hora = 16
    msg.innerHTML = (`Agora são ${hora} horas e ${min} minutos.`)

    if (hora >= 0 && hora <= 12) {
        //Bom dia
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18){
        //Boa tarde
        document.body.style.background = '#eb9846f'
    } else {
         //Boa noite
    document.body.style.background = '#515154'
    }
   
}