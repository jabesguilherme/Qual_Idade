function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Digite os dados corretamente e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = '<strong>Homem</strong>'

            if(idade >= 0 && idade <= 3){
                //Bêbe
                img.setAttribute('src', 'assets/bebê.png')
            }else if(idade >= 4 && idade <= 10){
                //Criança
                img.setAttribute('src', 'assets/crianca_masc.png')
            }else if(idade < 18){
                //Jovem
                img.setAttribute('src', 'assets/adolecente_masc.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'assets/homem_masc.png')
            }else{
                //Idoso
                img.setAttribute('src', 'assets/idoso_masc.png')
            }
        }else if (fsex[1].checked) {
            genero = '<strong>Mulher</strong>'

            if(idade >= 0 && idade <= 3){
                //Bêbe
                img.setAttribute('src', 'assets/bebê.png')
            }else if(idade >= 4 && idade <= 10){
                //Criança
                img.setAttribute('src', 'assets/crianca_fem.png')
            }else if(idade < 18){
                //Jovem
                img.setAttribute('src', 'assets/adolecente_fem.png')
            }else if(idade < 50){
                //Adulta
                img.setAttribute('src', 'assets/mulher_fem.png')
            }else{
                //Idosa
                img.setAttribute('src', 'assets/idosa_fem.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
} 