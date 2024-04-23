"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAvgAge = exports.getRandomUniqueId = void 0;
const getRandomUniqueId = () => {
    return `UserId: ${Math.floor(Math.random() * 10000)}`;
};
exports.getRandomUniqueId = getRandomUniqueId;
const getAvgAge = (persons) => {
    let sum = 0;
    persons.forEach((person) => {
        sum += person.age;
    });
    const avgAge = sum / persons.length;
    return avgAge;
};
exports.getAvgAge = getAvgAge;
//# sourceMappingURL=person.js.map