let num = [5, 8, 9, 2, 7]

num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} elementos.`)
console.log(`O primeiro valor do vetor é ${num[0]}.`)
let pos = num.indexOf(8)

if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}

let num1 = [5, 7, 6, 8]
num1.sort()
console.log(`Os valores de num1 são == ${num1}.`)