function calc(first: number, operator: string, second: number): string {

    const dictCalc: {[key: string]: string} = {
        "+": (first + second).toString(),
        "-": (first - second).toString(),
        "*": (first * second).toString(),
        "/": (first / second).toString(),
    }

    if (!dictCalc) {
        return "Invalid operator!";
    }

    return dictCalc[operator];
}

const result = calc(5, "+", 10);
console.log(result);
