let num = [5,8,2,9,3]
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} elementos`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`A ordem crescente ${num.sort()}`)

let pos = num.indexOf(4)

if(pos == -1){
    console.log('VALOR NÃO ENCONTRADO')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}



