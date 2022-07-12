function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano){
            window.alert ('[ERRO] Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano -Number(fano.value)
        res.innerHTML =`Idade Calculada ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'homem'
            
            if(idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src' , 'foto-bebeh.png')
            }else if(idade >=10 && idade < 21){
                //Jovem
                img.setAttribute('src', 'foto-jovemh.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'foto-adultoh.png')
            }else{
                //Idoso
                img.setAttribute('src', 'idoso.png')
            }
            
        }else if (fsex[1].checked){
            genero='mulher'
            
            if(idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src' ,'bebe.png')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'mulherjovenred.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'mulheradulta.png')
            }else{
                //Idoso
                img.setAttribute('src', 'idosa.png')
            }

        }
        res.style.textAlign ="center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
    
}