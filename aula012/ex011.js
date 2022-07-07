//  var idade = 66
//  console.log(`Você tem ${idade} anos`)
//  if(idade < 16){
//     console.log('Não Vota')
//  }else if(idade < 18 || idade > 65){ /*posso simplificar a condição e tirar idade >= 16 && e coloqueiidade > 65 melhorou a logica*/
//      console.log('Voto Opcional')
        
//  }else{
//     console.log('Voto Obrigatório')
//  }

var idade = 12


console.log(`Você possue ${idade} anos`)

if(idade >= 18 && idade < 65){
    console.log('Voto Obrigatório')

}else if( idade < 18 && idade > 15  || idade > 65){
    console.log('Voto não obrigatório')
}else{
    console.log('Não vota')
}