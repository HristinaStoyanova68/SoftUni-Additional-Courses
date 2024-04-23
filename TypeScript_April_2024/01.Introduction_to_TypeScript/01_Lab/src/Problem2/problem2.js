function largestNumber(num1, num2, num3) {
    let largestNum = 0;
    if (num1 > num2) {
        largestNum = num1;
    }
    else {
        largestNum = num2;
    }
    if (num3 > largestNum) {
        largestNum = num3;
    }
    console.log(largestNum);
    return largestNum;
}
//# sourceMappingURL=problem2.js.map