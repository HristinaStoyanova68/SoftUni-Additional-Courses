class Car {
  brand: string;
  model: string;
  horsePower: number;

  constructor(brand: string, model: string, horsePower: number) {
    this.brand = brand;
    this.model = model;
    this.horsePower = horsePower;
  }

  getBrand(): string {
    return this.brand;
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
const input = 'Skoda Karoq 150';
const [brand, model, horsePowerAsStr] = input.split(' ');
const horsePower = Number(horsePowerAsStr);

const myCar = new Car(brand, model, horsePower);

console.log(`The car is: ${myCar.getBrand()} ${myCar.getModel()} - ${myCar.getHorsePower()} HP.`);



