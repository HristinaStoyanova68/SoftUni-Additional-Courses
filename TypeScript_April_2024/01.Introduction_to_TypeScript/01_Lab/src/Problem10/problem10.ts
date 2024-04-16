function aggregateElements(numbers: number[]): void {
    const results: string[] = [];

    const sum: number = numbers.reduce((acc, num) => acc + num, 0);
    results.push(`${sum}`);

    const inverseValue: number = numbers.reduce((acc, num) => acc + 1/ num, 0);
    results.push(`${inverseValue}`);

    const concatValue = numbers.join('');
    results.push(concatValue);

    console.log(results.join('\n'));
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);