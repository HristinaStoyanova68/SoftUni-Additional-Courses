function largestNumber(num1: number, num2: number, num3: number): number {

    let largestNum: number = 0;

    if (num1 > num2) {
        largestNum = num1;
    } else {
        largestNum = num2;
    }

    if (num3 > largestNum) {
        largestNum = num3;
    }
    console.log(largestNum);

    return largestNum;
}