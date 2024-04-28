interface Town {
    town: string,
    latitude: string,
    longitude: string,
}

const createTown = (townName: string, townLatitude: string, townLongitude: string): Town => {
    return {
        town: townName,
        latitude: townLatitude,
        longitude: townLongitude,
    }
}

function townsObj(towns: string[]): void {
    const townsArray: object[] = [];

    for (const townData of towns) {
        const [townName, townLatitude, townLongitude] = townData.split(' | ');
        const townLatitudeAsStr = Number(townLatitude).toFixed(2);
        const townLongitudeAsStr = Number(townLongitude).toFixed(2);

        const currTown = createTown(townName, townLatitudeAsStr, townLongitudeAsStr);
        townsArray.push(currTown);
    }

    townsArray.forEach(town => {
        console.log(town);
    })
}

townsObj(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
townsObj(['Plovdiv | 136.45 | 812.575']);









//['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']