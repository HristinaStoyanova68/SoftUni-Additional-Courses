interface PersonDetails {
    firstName: string,
    lastName: string,
    age: number,
}

const createPerson = (firstname: string, lastName: string, age: string): PersonDetails => {
    return {
        firstName: firstname,
        lastName: lastName,
        age: Number(age),
    }
}

// const person = createPerson("Peter", "Pan", "20");
const person = createPerson("George", "Smith", "18");

console.log(person);
