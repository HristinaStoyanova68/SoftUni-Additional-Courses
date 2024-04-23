// Encapsulation
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    getNameInCapitalLetter() {
        return this.name.toUpperCase();
    }
}
const p = new Person("Boby");
// console.log(p.getNameInCapitalLetter());
// Abstraction
class Car {
    made;
    model;
    color;
    constructor(made, model, color) {
        this.made = made;
        this.model = model;
        this.color = color;
    }
    getDetails() {
        return `This car is made in ${this.made}, model ${this.model} in color: ${this.color}.`;
    }
}
const bmwCar = new Car("Germany", "BMW", "red");
// console.log(bmwCar.getDetails());
class Car2 {
    horsePower;
    engine;
    constructor(horsePower, engine) {
        this.horsePower = horsePower;
        this.engine = engine;
    }
    getCoeffForDiesel() {
        return this.horsePower * 1.5;
    }
    getCoeffForGas() {
        return this.horsePower * 3;
    }
    getCoeff() {
        if (this.engine === "diesel") {
            return this.getCoeffForDiesel();
        }
        return this.getCoeffForGas();
    }
}
const dieselCar = new Car2(89, "diesel");
// console.log(dieselCar.getCoeff());
//Inheritance
class Mamal {
    move() {
        // console.log("This mamal is moving!");
    }
    speak() {
        // console.log("This mamal is speaking!");
    }
}
class Dog extends Mamal {
    constructor() {
        super();
    }
    move() {
        // console.log("The dog is moving");
    }
}
class Mouse extends Mamal {
    constructor() {
        super();
    }
}
class Cat extends Mamal {
    constructor() {
        super();
    }
}
const dog = new Dog();
dog.move();
dog.speak();
class MyHTMLElement {
    click() {
        // console.log("click");
    }
    focus() {
        // console.log("fokus");
    }
}
class SelectBox extends MyHTMLElement {
}
const selectBox = new SelectBox();
selectBox.click();
selectBox.focus();
class CheckBox extends MyHTMLElement {
}
const checkBox = new CheckBox();
checkBox.click();
checkBox.focus();
class Lion {
    move() {
        // console.log("Moving by walking!");
    }
}
class Bird {
    move() {
        // console.log("Moving by flying!");
    }
}
class Fish {
    move() {
        // console.log("Moving by swimming!");
    }
}
const lion = new Lion();
const fish = new Fish();
const bird = new Bird();
lion.move();
fish.move();
bird.move();
class TextBox {
    render() {
        // console.log("TextBox render text!");
    }
}
class SelectBox1 {
    render() {
        // console.log("SelecttBox render select!");
    }
}
class CheckBox1 {
    render() {
        // console.log("CheckBox render check!");
    }
}
const textBox = new TextBox();
const selectBox1 = new SelectBox1();
const checkBox1 = new CheckBox1();
textBox.render();
selectBox1.render();
checkBox1.render();
//SOLID principle
// Single Responsibility
// Open-Closed Principle
class MyCar {
    color;
    constructor(color) {
        this.color = color;
    }
    getMsgWithColor() {
        // console.log(`This car is in ${this.color} color!`);
    }
}
class VW extends MyCar {
    serialNumber;
    constructor(color, serialNumber) {
        super(color);
        this.serialNumber = serialNumber;
    }
    getSNDetails() {
        // console.log(`${this.color} -> ${this.serialNumber}`);
    }
}
const myVW = new VW("red", "rgsrethrjtyjmtdtr");
myVW.getMsgWithColor();
myVW.getSNDetails();
class AddressService {
    street;
    suite;
    city;
    zipcode;
    geo;
}
class PersonUser {
    id;
    name;
    username;
    email;
}
//Dependency Inversion (Principle) -->> Dependency Injection (Pattern)
class Wallet {
    balance;
    constructor(balance) {
        this.balance = balance;
    }
}
class Course {
    courses;
    constructor(courses) {
        this.courses = courses;
    }
}
// !! BAD PRACTICE: !!
// class User {
//     wallet: Wallet;
//     username: string;
//     course: Course;
//     constructor(username: string, balance: number, courses: string[]) {
//         this.username = username;
//         this.wallet = new Wallet(balance);
//         this.course = new Course(courses)
//     }
// }
// const userPesho = new User('Pesho', 3000, ['Math', 'JS', 'HTML&CSS']);
// console.log(`${userPesho.username}'s balance: ${userPesho.wallet.balance} and do courses: ${userPesho.course.courses.join(', ')}`);
// const userMaria = new User('Maria', 20000, ['DB', 'JS', 'HTML&CSS']);
// console.log(`${userMaria.username}'s balance: ${userMaria.wallet.balance} and do courses: ${userMaria.course.courses.join(', ')}`);
// !! GOOD PRACTICE: !!
class User {
    wallet;
    username;
    course;
    // !! INJECTED DEPENDENCY !!
    constructor(username, wallet, course) {
        this.username = username;
        this.wallet = wallet;
        this.course = course;
    }
}
const walletPesho = new Wallet(3000);
const coursesPesho = new Course(["Math", "JS", "HTML&CSS"]);
const userPesho = new User("Pesho", walletPesho, coursesPesho);
// console.log(`${userPesho.username}'s balance: ${userPesho.wallet.balance} and do courses: ${userPesho.course.courses.join(', ')}`);
// console.log('......................');
const walletMaria = new Wallet(20000);
const coursesMaria = new Course(["DB", "JS", "HTML&CSS"]);
const userMaria = new User("Maria", walletMaria, coursesMaria);
// console.log(`${userMaria.username}'s balance: ${userMaria.wallet.balance} and do courses: ${userMaria.course.courses.join(', ')}`);
//Getters and Setters
class Person10 {
    _name;
    constructor(name) {
        this._name = name;
    }
    get name() {
        //can put some logic
        return this._name;
    }
    set name(newName) {
        if (newName.length <= 3) {
            throw new Error("Name must be at least 5 characters!");
        }
        this._name = newName.toUpperCase();
    }
}
const p10 = new Person10("Ivan");
// console.log(p10.name);
p10.name = "alisa";
// console.log(p10.name);
//Access modifiers
class Creature {
    name;
    age;
    color;
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
}
class AnotherCreature extends Creature {
    constructor(name, age, color) {
        super(name, age, color); //new Creature
    }
    getColor() {
        return this.color;
    }
}
const creature = new Creature('CraftItem', 1, 'yellow');
const anotherCreature = new AnotherCreature('AnotherCraftItem', 2, 'green');
// console.log(anotherCreature.getColor());
//Abstract Class
//# sourceMappingURL=app.js.map