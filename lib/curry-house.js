var curry = require('./curry');

function calculate (num1) {
  return function (operator) {
    switch (operator) {
      case '+' :
      case 'add' :
        return function (num2) {
          return num1 + num2;
        };
      case '-' :
      case 'subtract' :
        return function (num2) {
          return num1 - num2;
        };
      case '*' :
      case 'multiply' :
        return function (num2) {
          return num1 * num2;
        };
      case '/' :
      case 'divide' :
        return function (num2) {
          return num1 / num2;
        };
      case '%' :
      case 'modulo' :
        return function (num2) {
          return num1 % num2;
        };
      case '^' :
      case 'power of' :
        return function (num2) {
          return Math.pow(num1, num2);
        };
      default :
        break;
    }
  };
}

function random (start) {
  return {
    to : function (end) {
      return Math.floor(Math.random() * (end - start)) + start;
    },
    toInclude : function () {
      return Math.floor(Math.random() * (end - start + 1) + start);
    }
  };
}

function concat(string1, string2) {
  return string1.concat(string2);
}

var prependGreeting = curry(concat, 'Hello ');

function add (num1, num2, num3) {
  return num1 + num2 + num3;
}

var add4and5 = curry(add, 4, 5);

function calculator(operator) {
  switch (operator) {
    case '+' :
    case 'add' :
      return function (op1, op2) {
        return op1 + op2;
      };
    case '-' :
    case 'subtract' :
      return function (op2, op1) {
        return op1 - op2;
      };
    case '*' :
    case 'multiply' :
      return function (op1, op2) {
        return op1 * op2;
      };
    case '/' :
    case 'divide' :
      return function (op1, op2) {
        return op2 / op1;
      };
    case '%' :
    case 'modulo' :
      return function (op1, op2) {
        return op2 % op1;
      };
    case '^' :
    case 'power of' :
      return function (op1, op2) {
        return Math.pow(op2, op1);
      };
    default :
      break;
  }
}

var add5 = curry(calculator('+'), 5);
var sub5 = curry(calculator('-'), 5);
var multiply5 = curry(calculator('*'), 5);
var divide5 = curry(calculator('/'), 5);
var mod5 = curry(calculator('%'), 5);
var pow3 = curry(calculator('^'), 3);

module.exports = {
  calculate : calculate,
  random : random,
  prependGreeting : prependGreeting,
  add4and5 : add4and5,
  calculator : calculator,
  add5 : add5,
  sub5 : sub5,
  multiply5 : multiply5,
  divide5 : divide5,
  mod5 : mod5,
  pow3 : pow3
};