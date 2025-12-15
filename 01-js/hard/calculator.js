/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(value) {
    this.result += value;
  }

  subtract(value) {
    this.result -= value;
  }

  multiply(value) {
    this.result *= value;
  }

  divide(value) {
    if (value === 0) {
      throw new Error("Division by zero");
    }
    this.result /= value;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    // 1️⃣ Validate allowed characters
    if (!/^[\d+\-*/().\s]+$/.test(expression)) {
      throw new Error("Invalid characters in expression");
    }

    const numbers = [];
    const operators = [];

    const precedence = (op) => {
      if (op === "+" || op === "-") return 1;
      if (op === "*" || op === "/") return 2;
      return 0;
    };

    const applyOperator = () => {
      if (numbers.length < 2) throw new Error("Invalid expression");

      const b = numbers.pop();
      const a = numbers.pop();
      const op = operators.pop();

      if (op === "+") numbers.push(a + b);
      if (op === "-") numbers.push(a - b);
      if (op === "*") numbers.push(a * b);
      if (op === "/") {
        if (b === 0) throw new Error("Division by zero");
        numbers.push(a / b);
      }
    };

    let i = 0;

    while (i < expression.length) {
      const char = expression[i];

      if (char === " ") {
        i++;
        continue;
      }

      // 2️⃣ Parse number (supports decimals)
      if ((char >= "0" && char <= "9") || char === ".") {
        let value = "";
        let dotCount = 0;

        while (
          i < expression.length &&
          ((expression[i] >= "0" && expression[i] <= "9") ||
            expression[i] === ".")
        ) {
          if (expression[i] === ".") dotCount++;
          if (dotCount > 1) throw new Error("Invalid number format");

          value += expression[i];
          i++;
        }

        numbers.push(Number(value));
        continue;
      }

      if (char === "(") {
        operators.push(char);
      } else if (char === ")") {
        if (!operators.includes("(")) {
          throw new Error("Invalid parentheses");
        }

        while (operators[operators.length - 1] !== "(") {
          applyOperator();
        }
        operators.pop(); // remove '('
      } else {
        while (
          operators.length &&
          precedence(operators[operators.length - 1]) >= precedence(char)
        ) {
          applyOperator();
        }
        operators.push(char);
      }

      i++;
    }

    // 3️⃣ Check for unmatched parentheses
    if (operators.includes("(")) {
      throw new Error("Invalid parentheses");
    }

    while (operators.length) {
      applyOperator();
    }

    if (numbers.length !== 1) {
      throw new Error("Invalid expression");
    }

    this.result = numbers.pop();
    return this.result;
  }
}

module.exports = Calculator;
