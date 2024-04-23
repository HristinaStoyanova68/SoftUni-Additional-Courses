function townsPopulation(array) {
    const towns = {};
    for (const data of array) {
        const [town, populationAsStr] = data.split(" <-> ");
        const population = Number(populationAsStr);
        if (towns.hasOwnProperty(town)) {
            towns[town] += population;
        }
        else {
            towns[town] = population;
        }
    }
    for (const town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
}
townsPopulation([
    "Sofia <-> 1200000",
    "Montana <-> 20000",
    "New York <-> 10000000",
    "Washington <-> 2345000",
    "Las Vegas <-> 1000000",
]);
townsPopulation([
    "Istanbul <-> 100000",
    "Honk Kong <-> 2100004",
    "Jerusalem <-> 2352344",
    "Mexico City <-> 23401925",
    "Istanbul <-> 1000",
]);
//# sourceMappingURL=townPopulation.js.map