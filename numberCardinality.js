function nCardinality(N) {
    let num = N % 10;
    if (num === 0) {
        return "zero"
    }
    else if(num === 5){
        return "five"
    }
    else if(num % 2 === 0){
        return "even"
    }
    else{
        return "odd"
    }
}

console.log(nCardinality(N))
module.exports = nCardinality;