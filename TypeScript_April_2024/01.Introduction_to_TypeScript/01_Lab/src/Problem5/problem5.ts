function mathOperations(num1: number, num2: number, a: string): number {
    let result: number = 0;

    if (a === '+') {
        result = num1 + num2;
    } else if (a === '-') {
        result = num1 - num2;
    } else if (a === '*') {
        result = num1 * num2;
    } else if (a === '/') {
        result = num1 / num2;
    }

    console.log(result);

    return result;
}

mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');