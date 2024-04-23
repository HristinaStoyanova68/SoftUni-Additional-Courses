"use strict";
// namespace AnimalGroup {
//     interface MammalType {
//         legsCount: number;
//         animalType: string;
//         furColor?: string;
//     }
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = require("./student");
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
var People;
(function (People) {
    class Person {
        name;
        constructor(name) {
            this.name = name;
        }
        getName() {
            return `The name is: ${this.name}`;
        }
    }
    People.Person = Person;
})(People || (People = {}));
const p = new People.Person('Pesho');
console.log(p.getName());
///<reference path="student.ts" />
const ivanStudent = new student_1.StudentGroup.Student([5, 6], 'math');
console.log(ivanStudent);
var Shop;
(function (Shop) {
    let TechShop;
    (function (TechShop) {
        class Game {
            gameName;
            maxGameScore;
            constructor(gameName, maxGameScore) {
                this.gameName = gameName;
                this.maxGameScore = maxGameScore;
            }
        }
        TechShop.Game = Game;
    })(TechShop = Shop.TechShop || (Shop.TechShop = {}));
})(Shop || (Shop = {}));
const game = new Shop.TechShop.Game('Pokemon', 10);
console.log(game.gameName);
console.log(game.maxGameScore);
var shop = Shop.TechShop; //ALIAS
const g2 = new shop.Game('StarWars', 10);
//# sourceMappingURL=main.js.map