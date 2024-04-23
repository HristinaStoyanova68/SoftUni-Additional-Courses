const createHero = (name, level, items) => {
    return {
        heroName: name,
        heroLevel: level,
        heroItems: items,
    };
};
function registerHeroes(array) {
    const register = [];
    for (let i = 0; i < array.length; i++) {
        const [name, levelAsStr, items] = array[i].split(" / ");
        const level = Number(levelAsStr);
        const currHero = createHero(name, level, items);
        register.push(currHero);
    }
    const sortedRegisterHeroes = register.sort((a, b) => a.heroLevel - b.heroLevel);
    sortedRegisterHeroes.forEach((hero) => {
        console.log(`Hero: ${hero.heroName}`);
        console.log(`level => ${hero.heroLevel}`);
        console.log(`items => ${hero.heroItems}`);
    });
}
registerHeroes([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
]);
registerHeroes([
    "Batman / 2 / Banana, Gun",
    "Superman / 18 / Sword",
    "Poppy / 28 / Sentinel, Antara",
]);
//# sourceMappingURL=inventory.js.map