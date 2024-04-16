class Cat {
  constructor(public name: string, public age: string) {}

  meow(): void {
    console.log(`${this.name}, age ${this.age} says meow`);
  }
}

function createCats(catsData: string[]): Cat[] {
  return catsData.map((catInfo) => {
    const [name, age] = catInfo.split(" ");
    return new Cat(name, age);
  });
}

createCats(["Mellow 2", "Tom 5"]).forEach(cat => {
    cat.meow();
});
createCats(["Candy 1", "Poppy 3", "Nyx 2"]).forEach(cat => {
    cat.meow();
});
