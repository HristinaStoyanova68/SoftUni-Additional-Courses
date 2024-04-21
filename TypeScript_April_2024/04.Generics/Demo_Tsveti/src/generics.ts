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
function getParamInfo<T>(param: T): string {
  return `This is your param: ${param} and its type is ${typeof param}`;
}

// const paramNumber = getParamInfoNumber(123);
// console.log(paramNumber);
// const paramStr = getParamInfoStr('123');
// console.log(paramStr);
// const paramObj = getParamInfoObj({name: 'Pesho'});
// console.log(paramObj);

// const param = getParamInfo(123);
// const param1 = getParamInfo('123');
// const param2 = getParamInfo({name: 'Pesho'});
// const paramBool = getParamInfo(true);
// console.log(param);
// console.log(param1);
// console.log(param2);
// console.log(paramBool);

// interface UserData<T> {
//     name: string;
//     age: number;
//     id: T;
// }

// const test = getParamInfo<UserData<number>>({
//     name: 'Pesho',
//     age: 25,
//     id: 123,
// });

// console.log(test);

// const test2 = getParamInfo<UserData<string>>({
//     name: 'Pesho',
//     age: 25,
//     id: 'xxx',
// });

// console.log(test2);

// const attachId = <T>(obj: T) => {
//     const id = Math.round(Math.random() * 100);

//     return {...obj, id};
// }

// type PresonType = {
//     name: string;
//     age: number;
//     email: string;
// }

// const person: PresonType = {
//     name: 'Mitko',
//     age: 22,
//     email: 'mitko22@abv.bg',
// }

// const personWithId = attachId<PresonType>(person);
// console.log(personWithId);
// console.log(personWithId.id);

// type AnimalType = {
//     furColor: string;
//     legsCount: number;
//     type: string;
// }

// const animal: AnimalType = {
//     furColor: 'black',
//     legsCount: 4,
//     type: 'mamal',
// }

// const animalWithId = attachId<AnimalType>(animal);
// console.log(animalWithId.id);

// interface DocumentObject<T> {
//     id: number;
//     name: string;
//     data: T;
// }

// type SomeType = {name: string, age: number, address: string}

// const doc1: DocumentObject<SomeType> = {
//     id: 1,
//     name: 'person',
//     data: {
//         name: 'Pesho',
//         age: 22,
//         address: 'Sofia, BG',
//     }
// };

// const doc2: DocumentObject<boolean> = {
//     id: 2,
//     name: 'question',
//     data: true
// }

// const doc3: DocumentObject<string[]> = {
//     id: 3,
//     name: 'list',
//     data: [
//         'first',
//         'second',
//         'third'
//     ]
// }

// const takeLast = (array: number[]): number => {
//   return array.pop();
// };

// //to make above in generic type:
// const takeLast2 = <T>(array: T[]): T => {
//     return array.pop();
//   };

// const lastNum = takeLast2<number>([1, 2, 3, 4]);
// console.log(lastNum);

// const lastBool = takeLast2<boolean>([true, false]);
// console.log(lastBool);

// const lastStr = takeLast2<string>(['a', 'b', 'c']);
// console.log(lastStr);

// const randomObj = { a: '1', b: '2', c: '3'};
// const tuples = Object.entries(randomObj);
// console.log(tuples);

// const makeTuples = <T, V>(a: T, b: V): (T | V )[] => {
//     return [a, b];
// }

// const tuple1 = makeTuples('Hello', 123);
// const tuple2 = makeTuples(123, 'mama');

// console.log(tuple1);
// console.log(tuple2);

// interface GenericConstructor<T, V> {
//   (arg1: T, arg2: V): [T, V];
// }

// const simpleFn: GenericConstructor<string, string> = <T, V>(
//   arg1: T,
//   arg2: V
// ) => {
//   return [arg1, arg2];
// };

// console.log(simpleFn('Hello', 'world'));

// class Collection<T> {
//     data: T[];

//     constructor(...params: T[]) {
//         this.data = params;
//     }

//     addElement(el: T) {
//         this.data.push(el);
//     }

//     removeElement(el: T) {
//         let index = this.data.indexOf(el);

//         if (index > -1) {
//             this.data.splice(index, 1);
//         }
//     }

//     reverseElements() {
//         return this.data.reverse();
//     }
// }

// const numCollection = new Collection(1, 2, 3, 4);
// numCollection.addElement(55);
// numCollection.removeElement(4);
// numCollection.reverseElements();
// console.log(numCollection.data);

// const strCollection = new Collection('a', 'b', 'c', 'd');
// strCollection.addElement('z');
// strCollection.removeElement('b');
// strCollection.reverseElements()
// console.log(strCollection.data);

// class UserTest<F, S> {
//     first: F;
//     second: S;

//     constructor(f: F, s: S) {
//         this.first = f;
//         this.second = s;
//     }

//     showBoth() {
//         return `First: ${this.first}, Second: ${this.second}`;
//     }
// }

// const test1 = new UserTest(123, 'Pokemon');
// console.log(test1);


interface FullName {
    firstName: string;
    lastName: string;
}

interface MandatoryId {
    id: number;
}

//interface MyConstraint extends FullName, MandatoryId {}
type MyConstraint = FullName & MandatoryId;

function fullName<T extends MyConstraint>(obj: T) {
    return `The Id is ${obj.id} and full name is ${obj.firstName} ${obj.lastName}`;
}

const person = {
    age: 33,
    address: 'Sofia, BG',
    firstName: 'Kiril',
    lastName: 'Kirilov',
    id: 1,
}

console.log(fullName(person));

