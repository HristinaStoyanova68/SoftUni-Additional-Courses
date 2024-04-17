const sumNumbers = (numbers: number[], inversed = false): number => {
  let sum = 0;

  numbers.forEach((num) => {
    const numToSum = inversed ? 1 / num : num;

    sum += numToSum;
    // if (inversed) {
    //   sum += 1 / num;
    // } else {
    //   sum += num;
    // }
  });

  return sum;
};

// const invertNumbers = (numbers: number[]): number => {
//     let invertSum = 0;

//     numbers.forEach((num) => {
//         invertSum += 1 / num;
//     })

//     return invertSum;
// }

const concatedNumbers = (numbers: number[]): string => {
  // let concatSum = '';

  // numbers.forEach((num) => {
  //     concatSum += num;
  // })

  // return concatSum;

  return numbers.join("");
};

const aggregateElements2 = (numbers: number[]): void => {
  const sum: number = sumNumbers(numbers);
  const invertSum = sumNumbers(numbers, true);
  const concatedNums: string = concatedNumbers(numbers);

  console.log(sum);
  console.log(invertSum);
  console.log(concatedNums);
};

aggregateElements2([1, 2, 3]);
aggregateElements2([2, 4, 8, 16]);
