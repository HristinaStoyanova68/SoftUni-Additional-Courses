class City {
  name: string;
  population: number;
  treasury: number;
  taxRate: number;

  constructor(name: string, population: number, treasury: number) {
    this.name = name;
    this.population = population;
    this.treasury = treasury;
    this.taxRate = 10;
  }

  collectTaxes(): void {
    this.treasury += this.population * this.taxRate;
  }

  applyGrowth(percentage: number): void {
    this.population += (this.population * percentage) / 100;
  }

  applyRecession(percentage: number): void {
    this.treasury -= (this.treasury * percentage) / 100;
  }
}

function cityTaxes(name: string, population: number, treasury: number): City {
  const city = new City(name, population, treasury);

  return city;
}

const city = cityTaxes("Tortuga", 7000, 15000);

city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);


