function multiplo(N) {
    const ArrMultiplo = [];
    for (let i = 1; i <= N; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
             ArrMultiplo.push("FizzBuzz");
         }
        else if (i % 3 === 0) {
            ArrMultiplo.push("Fizz");
        }
        else if (i % 5 === 0) {
             ArrMultiplo.push("Buzz");
        }
        else
         {
         ArrMultiplo.push(i);
         }
    };
    return ArrMultiplo;
};

console.log(multiplo(N));
module.exports = multiplo;
