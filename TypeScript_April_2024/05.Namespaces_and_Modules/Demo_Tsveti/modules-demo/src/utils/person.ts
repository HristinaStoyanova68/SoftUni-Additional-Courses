import { PersonType } from "../types/Person";


export const getRandomUniqueId = (): string => {
   
    return `UserId: ${Math.floor(Math.random() * 10000)}`;
}

export const getAvgAge = (persons: PersonType[]): number => {

    let sum = 0;

    persons.forEach((person) => {
        sum += person.age
    });

    const avgAge = sum / persons.length;

    return avgAge;
}