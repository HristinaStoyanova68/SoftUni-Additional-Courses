function evenPositionElement(array: string[]): string[] {
    let evenPositionEl: string = '';
    let result: string[] = [];

    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            evenPositionEl = array[i];
            result.push(evenPositionEl);
        }
    }

    console.log(result.join(' '));

    return result;
}

evenPositionElement(['20', '30', '40',

'50', '60']);
evenPositionElement(['5', '10']);