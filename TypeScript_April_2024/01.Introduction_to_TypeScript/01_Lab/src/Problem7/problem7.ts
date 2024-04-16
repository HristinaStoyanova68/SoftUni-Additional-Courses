function biggerHalf(array: number[]): number[] {
    const newArray = array.sort((a, b) => a - b);

    const halfIndex = Math.floor(newArray.length / 2);
    const result = newArray.slice(halfIndex);

    console.log(result);

    return result;
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);