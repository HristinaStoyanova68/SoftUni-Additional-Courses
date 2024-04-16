function sumOfNumbers(n: string, m: string): number {

    let nAsNumber = Number(n);
    let mAsNumber = Number(m);
    let sum: number = 0;

    for (let i = nAsNumber; i <= mAsNumber; i++) {
        sum = i + sum;
    }

    console.log(sum);
    
    return;
}

sumOfNumbers('1', '5');
sumOfNumbers('-8', '20');