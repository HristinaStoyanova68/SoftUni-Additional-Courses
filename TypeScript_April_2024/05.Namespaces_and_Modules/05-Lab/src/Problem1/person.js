"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduction() {
        return `My name is ${this.name} and I am ${this.age} years old.`;
    }
    sayGoodbye(name) {
        return `Dear ${this.name}, it was a pleasure meeting you!`;
    }
}
exports.Person = Person;
let p = new Person('Ivan Ivanov', 25);
console.log(p.introduction());
console.log(p.sayGoodbye('Petar Petrov'));
//# sourceMappingURL=person.js.map