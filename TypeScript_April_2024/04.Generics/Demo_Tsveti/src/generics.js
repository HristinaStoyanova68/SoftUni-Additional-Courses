// const getParamInfoNumber = (param: number): string => {
//     return `This is your param: ${param} and its type is ${typeof param}`;
// }
// const getParamInfoStr = (param: string): string => {
//     return `This is your param: ${param} and its type is ${typeof param}`;
// }
// const getParamInfoObj = (param: object): string => {
//     return `This is your param: ${param} and its type is ${typeof param}`;
// }
//function expression
// const getParamInfo = <T>(param: T): string => {
//     return `This is your param: ${param} and its type is ${typeof param}`;
// }
//function declaration:
function getParamInfo(param) {
    return `This is your param: ${param} and its type is ${typeof param}`;
}
function fullName(obj) {
    return `The Id is ${obj.id} and full name is ${obj.firstName} ${obj.lastName}`;
}
const person = {
    age: 33,
    address: 'Sofia, BG',
    firstName: 'Kiril',
    lastName: 'Kirilov',
    id: 1,
};
console.log(fullName(person));
//# sourceMappingURL=generics.js.map