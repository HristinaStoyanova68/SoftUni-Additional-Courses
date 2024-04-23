class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getPersonalInfo() {
        return `${this.name} is ${this.age} years old.`;
    }
}
// const personInput: string = 'Peter 12';
const personInput = 'Sofia 33';
const [inputName, inputAgeAsStr] = personInput.split(' ');
const inputAge = Number(inputAgeAsStr);
const person = new Person(inputName, inputAge);
console.log(person.getPersonalInfo());
//# sourceMappingURL=opinion-poll.js.map