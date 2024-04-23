class Calculator {
  num1: number;
  operator: string;
  num2: number;

  constructor(num1: number, operator: string, num2: number) {
    this.num1 = num1;
    this.operator = operator;
    this.num2 = num2;
  }

  sum() {
    if (this.operator === "+") {
      return this.num1 + this.num2;
    }
  }

  subtraction() {
    if (this.operator === "-") {
      return this.num1 - this.num2;
    }
  }

  multiplication() {
    if (this.operator === "*") {
      return this.num1 * this.num2;
    }
  }

  division() {
    if (this.operator === "/") {
        if (this.num2 !== 0) {

            return this.num1 / this.num2;
        } else {
            throw new Error('Division by zero!')
        }
    }
  }
}

function calculator(num1: number, operator: string, num2: number): number {
 

  const calc = new Calculator(num1, operator, num2);

  if (operator === "+") {
    return calc.sum();
  }

  if (operator === "-") {
    return calc.subtraction();
  }

  if (operator === "*") {
    return calc.multiplication();
  }

  if (operator === "/") {
    return calc.division();
  } else {
    throw new Error('Invalid operator!');
  }
}

console.log(calculator(5, "+", 10));
console.log(calculator(25.5, "-", 3));
console.log(calculator(9, "/", 2));
console.log(calculator(7, "*", 5));
