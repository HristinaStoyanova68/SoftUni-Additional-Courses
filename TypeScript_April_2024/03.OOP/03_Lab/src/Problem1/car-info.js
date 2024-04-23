class Car {
    brand;
    model;
    horsePower;
    _year;
    constructor(brand, model, horsePower, year) {
        this.brand = brand;
        this.model = model;
        this.horsePower = horsePower;
        this._year = year;
    }
    getBrand() {
        return this.brand;
    }
    get year() {
        return this._year;
    }
    setBrand(brand) {
        this.brand = brand;
    }
    getModel() {
        return this.model;
    }
    setModel(model) {
        this.model = model;
    }
    getHorsePower() {
        return this.horsePower;
    }
    setHorsePower(horsePower) {
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
//# sourceMappingURL=car-info.js.map