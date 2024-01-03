function fatorial(n) {
    var fat = 1
    for(let c = 5; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))