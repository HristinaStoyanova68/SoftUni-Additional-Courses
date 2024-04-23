"use strict";
// export const a: number = 5;
Object.defineProperty(exports, "__esModule", { value: true });
exports.test2 = exports.test = exports.a = void 0;
// export function test() {
//     return 'test123';
// }
// export const test2 = () => '123456';
const a = 5;
exports.a = a;
function test() {
    return "test123";
}
exports.test = test;
const test2 = () => '123456';
exports.test2 = test2;
//or
// export {a, test as getRandomUniqueId, test2}
function test3() {
    return 'test123456';
}
exports.default = test3;
//# sourceMappingURL=modul-a.js.map