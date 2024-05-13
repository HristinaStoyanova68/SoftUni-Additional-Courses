import { Drink } from "./Drink";

export class VendingMachine {
  buttonCapacity: number;
  drinks: Drink[];

  constructor(buttonCapacity: number) {
    this.buttonCapacity = buttonCapacity;
    this.drinks = [];
  }

  addDrink(drink: Drink): void {
    if (this.drinks.length < this.buttonCapacity) {
      this.drinks.push(drink);
    }
  }

  removeDrink(name: string): boolean {
    const existingDrink: Drink = this.drinks.find(
      (drink: Drink) => drink.name === name
    );

    if (existingDrink) {
      const drinkIndex: number = this.drinks.indexOf(existingDrink);
      this.drinks.splice(drinkIndex, 1);
      return true;
    } else {
      return false;
    }
  }

  getLongest(): string {
    if (this.drinks.length !== 0) {
      const mockedDrinks: Drink[] = [...this.drinks];

      const longestDrink: Drink = mockedDrinks.sort(
        (a: Drink, b: Drink) => b.volume - a.volume
      )[0];

      return longestDrink.toString();
    }
  }

  getCheapest(): string {
    if (this.drinks.length !== 0) {
      const mockedDrinks: Drink[] = [...this.drinks];

      const cheapestDrink: Drink = mockedDrinks.sort(
        (a: Drink, b: Drink) => a.price - b.price
      )[0];

      return cheapestDrink.toString();
    }
  }

  buyDrink(name: string): string {
    if (this.drinks.length !== 0) {
      const boughtDrink: Drink = this.drinks.find(
        (drink: Drink) => drink.name === name
      );

      return boughtDrink.toString();
    }
  }

  getCount(): number {
    return this.drinks.length;
  }

  report(): string {
    let result: string[] = ["Drinks available:"];

    for (const drink of this.drinks) {
      result.push(drink.toString());
    }

    return result.join("\n");
  }
}
