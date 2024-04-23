function sumOfNumbers(n, m) {
    let nAsNumber = Number(n);
    let mAsNumber = Number(m);
    let sum = 0;
    for (let i = nAsNumber; i <= mAsNumber; i++) {
        sum = i + sum;
    }
    console.log(sum);
}
sumOfNumbers('1', '5');
sumOfNumbers('-8', '20');
//# sourceMappingURL=problem3.js.map