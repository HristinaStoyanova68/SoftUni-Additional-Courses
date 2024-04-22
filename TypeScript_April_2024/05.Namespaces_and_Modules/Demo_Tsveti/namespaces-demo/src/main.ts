// namespace AnimalGroup {
//     interface MammalType {
//         legsCount: number;
//         animalType: string;
//         furColor?: string;
//     }

import { StudentGroup } from "./student";

//     export class Mammal implements MammalType{
//         legsCount: number;
//         animalType: string;
//         furColor: string;
    
//         constructor(animalType: string, furColor: string) {
//             this.animalType = animalType;
//             this.furColor = furColor;
//             this.legsCount = 4;
//         }
    
//         getDetails() {
//             return `This ${this.animalType} has ${this.legsCount} legs and ${this.furColor} fur color.`;
//         }
//     }
// }

// const m1 = new Mammal('cat', 'white');
// console.log(m1.getDetails());

// const m2 = new AnimalGroup.Mammal('dog', 'black');
// console.log(m2.getDetails());

namespace People {
    export class Person {
        name: string;

        constructor (name: string) {
            this.name = name;
        }

        getName() {
            return `The name is: ${this.name}`;
        }
    }
}

const p = new People.Person('Pesho');
console.log(p.getName());

///<reference path="student.ts" />

const ivanStudent = new StudentGroup.Student([5,6], 'math');
console.log(ivanStudent);

namespace Shop {
    export namespace TechShop {
        export class Game {
            gameName: string;
            maxGameScore: number;

            constructor(gameName: string, maxGameScore: number) {
                this.gameName = gameName;
                this.maxGameScore = maxGameScore;
            }
        }
    }
}

const game = new Shop.TechShop.Game('Pokemon', 10);
console.log(game.gameName);
console.log(game.maxGameScore);

import shop = Shop.TechShop; //ALIAS
const g2 = new shop.Game('StarWars', 10);




