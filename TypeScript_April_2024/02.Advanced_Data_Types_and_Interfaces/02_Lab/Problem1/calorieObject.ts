const calorieObject = (array: string[]) => {
    const foodCalories: object = {};

    for(let i = 0; i < array.length; i+= 2) {
        let food: string = array[i];
        let calories: number = Number(array[i + 1]);

        foodCalories[food] = calories;
    }

    console.log(foodCalories);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);