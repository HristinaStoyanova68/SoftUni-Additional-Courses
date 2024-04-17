interface Hero {
  heroName: string;
  heroLevel: number;
  heroItems: string;
}

const createHero = (name: string, level: number, items: string): Hero => {
  return {
    heroName: name,
    heroLevel: level,
    heroItems: items,
  };
};

function registerHeroes(array: string[]): void {
  const register: object[] = [];

  for (let i = 0; i < array.length; i++) {
    const [name, levelAsStr, items] = array[i].split(" / ");
    const level = Number(levelAsStr);

    const currHero = createHero(name, level, items);
    register.push(currHero);
  }

  const sortedRegisterHeroes = register.sort(
    (a: Hero, b: Hero) => a.heroLevel - b.heroLevel
  );

  sortedRegisterHeroes.forEach((hero: Hero) => {
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
