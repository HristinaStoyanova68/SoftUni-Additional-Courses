"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modul_a_1 = require("./modul-a");
const person_1 = require("./utils/person");
const string_1 = require("./utils/string");
const modulA = require("./modul-a"); //!! not good for libraries and big modules !!
// console.log(a);
// console.log(test());
// console.log(test2());
console.log(modul_a_1.a, '-', (0, modul_a_1.test)(), '-', (0, modul_a_1.test2)());
console.log(modulA);
console.log(modulA.a);
console.log(modulA.test);
console.log(modulA.default);
class Person {
    name;
    id;
    age;
    constructor(name, age) {
        this.id = (0, person_1.getRandomUniqueId)();
        this.name = (0, string_1.capitalizeFirstLetter)(name);
        this.age = age;
    }
}
const nikiPerson = new Person("niki", 33);
const petyaPerson = new Person("petya", 23);
const mariaPerson = new Person("maria", 13);
console.log(`${nikiPerson.name} - ${nikiPerson.id} is ${nikiPerson.age} old`);
console.log(`${petyaPerson.name} - ${petyaPerson.id} is ${petyaPerson.age} old`);
console.log(`${mariaPerson.name} - ${mariaPerson.id} is ${mariaPerson.age} old`);
const avgAge = (0, person_1.getAvgAge)([nikiPerson, petyaPerson, mariaPerson]);
console.log(avgAge);
//# sourceMappingURL=index.js.map