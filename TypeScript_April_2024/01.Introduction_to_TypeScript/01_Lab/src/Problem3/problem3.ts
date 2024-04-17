function sumOfNumbers(n: string, m: string): void {

    let nAsNumber = Number(n);
    let mAsNumber = Number(m);
    let sum: number = 0;

    for (let i = nAsNumber; i <= mAsNumber; i++) {
        sum = i + sum;
    }

    console.log(sum);
}

sumOfNumbers('1', '5');
sumOfNumbers('-8', '20');