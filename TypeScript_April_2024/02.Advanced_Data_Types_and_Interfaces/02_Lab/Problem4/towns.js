const createTown = (townName, townLatitude, townLongitude) => {
    return {
        town: townName,
        latitude: townLatitude,
        longitude: townLongitude,
    };
};
function townsObj(towns) {
    const townsArray = [];
    for (const townData of towns) {
        const [townName, townLatitude, townLongitude] = townData.split(' | ');
        const townLatitudeAsStr = Number(townLatitude).toFixed(2).toString();
        const townLongitudeAsStr = Number(townLongitude).toFixed(2).toString();
        const currTown = createTown(townName, townLatitudeAsStr, townLongitudeAsStr);
        townsArray.push(currTown);
    }
    townsArray.forEach(town => {
        console.log(town);
    });
}
townsObj(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
townsObj(['Plovdiv | 136.45 | 812.575']);
//['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']
//# sourceMappingURL=towns.js.map