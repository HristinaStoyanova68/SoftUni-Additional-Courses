function mathOperations(num1, num2, a) {
    let result = 0;
    if (a === '+') {
        result = num1 + num2;
    }
    else if (a === '-') {
        result = num1 - num2;
    }
    else if (a === '*') {
        result = num1 * num2;
    }
    else if (a === '/') {
        result = num1 / num2;
    }
    console.log(result);
    return result;
}
mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');
//# sourceMappingURL=problem5.js.map