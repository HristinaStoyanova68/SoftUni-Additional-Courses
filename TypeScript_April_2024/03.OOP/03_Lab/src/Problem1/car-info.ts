class Car {
  brand: string;
  model: string;
  horsePower: number;
  _year: number;

  constructor(brand: string, model: string, horsePower: number, year: number) {
    this.brand = brand;
    this.model = model;
    this.horsePower = horsePower;
    this._year = year;
  }

  getBrand(): string {
    return this.brand;
  }

  get year(): number {
    return this._year;
  }
  setBrand(brand: string): void {
    this.brand = brand;
  }

  getModel(): string {
    return this.model;
  }

  setModel(model: string): void {
    this.model = model;
  }

  getHorsePower(): number {
    return this.horsePower;
  }

  setHorsePower(horsePower: number): void {
    this.horsePower = horsePower;
  }
}

// const input = 'Chevrolet Impala 390';
const input = 'Skoda Karoq 150 2020';
const [brand, model, horsePowerAsStr, yearAsStr] = input.split(' ');
const horsePower = Number(horsePowerAsStr);
const year = Number(yearAsStr);

const myCar = new Car(brand, model, horsePower, year);

console.log(`The car is: ${myCar.getBrand()} ${myCar.getModel()} - ${myCar.getHorsePower()} HP, made at ${myCar._year} year.`);



