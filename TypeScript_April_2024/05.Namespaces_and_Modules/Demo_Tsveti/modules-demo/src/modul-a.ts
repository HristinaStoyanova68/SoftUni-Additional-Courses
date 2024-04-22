// export const a: number = 5;

// export function test() {
//     return 'test123';
// }

// export const test2 = () => '123456';

const a = 5;

function test() {
  return "test123";
}

const test2 = () => '123456';

export { a, test, test2 };

//or
// export {a, test as getRandomUniqueId, test2}

export default function test3() {
    return 'test123456';
}
