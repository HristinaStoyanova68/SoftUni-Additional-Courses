import { a, test, test2 } from "./modul-a";
import { PersonType } from "./types/Person";
import { getAvgAge, getRandomUniqueId } from "./utils/person";
import { capitalizeFirstLetter } from "./utils/string";
import * as modulA from './modul-a'; //!! not good for libraries and big modules !!

// console.log(a);

// console.log(test());

// console.log(test2());

console.log(a, '-', test(), '-', test2());
console.log(modulA);
console.log(modulA.a);
console.log(modulA.test);
console.log(modulA.default);



class Person implements PersonType{
  name: string;
  id: string;
  age: number;

  constructor(name: string, age: number) {
    this.id = getRandomUniqueId();
    this.name = capitalizeFirstLetter(name);
    this.age = age;
  }
}

const nikiPerson = new Person("niki", 33);
const petyaPerson = new Person("petya", 23);
const mariaPerson = new Person("maria", 13);
console.log(`${nikiPerson.name} - ${nikiPerson.id} is ${nikiPerson.age} old`);
console.log(`${petyaPerson.name} - ${petyaPerson.id} is ${petyaPerson.age} old`);
console.log(`${mariaPerson.name} - ${mariaPerson.id} is ${mariaPerson.age} old`);

const avgAge = getAvgAge([nikiPerson, petyaPerson, mariaPerson]);
console.log(avgAge);


