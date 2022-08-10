function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 ||  fano.value > ano) {
        window.alert('ERRO! Verifique os dados novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero =''
        var img = document.createElement('img') // criar um elemento no caso deste é um elemento de imagem //
        img.setAttribute('id', 'foto') //criar um atributo id através do javascript //
        if (fsex[0].checked) {
            genero = 'Homem'
        if (idade >= 0 && idade <= 15) {
            img.setAttribute('src', 'homemnovo.png')
            } else if (idade < 60) {
            img.setAttribute('src', 'homemjovem.png')
        } else if (idade >= 60) {
            img.setAttribute('src','homemidoso.png')
        }
         } else if (fsex[1].checked) {     
             genero = 'Mulher' 
         if (idade >=0 && idade <= 15) {
             img.setAttribute('src', 'mulhernova.png')
        } else if (idade < 60) {
            img.setAttribute('src','mulherjovem.png')
        } else if(idade > 60) {
            img.setAttribute('src','mulheridosa.png')
        } } 
         
            }

            res.innerHTML = `Você é ${genero} e tem ${idade} anos`
            res.style.textAlign = 'center'
            res.appendChild(img) // fazer o id de imagem aparecer na tela//
    }
