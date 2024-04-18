class Person {
    name: string;
    age: number;

    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getPersonalInfo() {
        return `${this.name} is ${this.age} years old.`;
    }
}

// const personInput: string = 'Peter 12';
const personInput: string = 'Sofia 33';
const [inputName, inputAgeAsStr] = personInput.split(' ');
const inputAge = Number(inputAgeAsStr);
const person = new Person(inputName, inputAge);

console.log(person.getPersonalInfo());