# ES6 JavaScript Features

## 1. Arrow Functions

- Shorter syntax for function expressions.
- Lexically binds `this` keyword.

```javascript
const add = (a, b) => a + b;
```

## 2. let and const

- Block-scoped variables.
- `let` for mutable bindings, `const` for immutable bindings.

```javascript
let count = 0;
const PI = 3.14;
```

## 3. Template Literals

- Multiline strings and string interpolation.

```javascript
const name = 'John';
const message = `Hello, ${name}!`;
```

## 4. Destructuring Assignment

- Extract values from arrays or properties from objects.

```javascript
// Array Destructuring
const [a, b] = [1, 2];

// Object Destructuring
const {name, age} = {name: 'John', age: 30};
```

## 5. Default Parameters

- Function parameters with default values.

```javascript
function greet(name = 'Guest') {
  return `Hello, ${name}!`;
}
```

## 6. Rest and Spread Operators

- Collect remaining elements or expand elements.

```javascript
// Rest Operator
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

// Spread Operator
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
```

## 7. Classes

- Syntactic sugar for constructor functions and prototype-based inheritance.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

const john = new Person('John', 30);
```

## 8. Modules

- Import and export functionalities from different files.

```javascript
// Exporting
export const PI = 3.14;
export function square(x) {
  return x * x;
}

// Importing
import { PI, square } from './math.js';
```

## 9. Promises

- Asynchronous operations with better syntax than callbacks.

```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data'), 1000);
  });
};

fetchData().then(data => console.log(data));
```

## 10. Enhanced Object Literals

- Shorthand syntax for initializing properties from variables.

```javascript
const name = 'John';
const person = {
  name,
  greet() {
    return `Hello, my name is ${name}`;
  }
};
```

## 11. Iterators and For...Of Loop

- Custom iteration behavior and simpler loop syntax.

```javascript
const array = [1, 2, 3];
for (const value of array) {
  console.log(value);
}
```

## 12. Map and Set

- Collections for unique values and key-value pairs.

```javascript
const set = new Set([1, 2, 3]);
const map = new Map([['name', 'John'], ['age', 30]]);
```

## 13. Symbols

- Unique and immutable primitive values.

```javascript
const sym = Symbol('description');
const obj = {
  [sym]: 'value'
};
```

## 14. Async/Await

- Syntactic sugar for Promises, allowing asynchronous code to be written in a synchronous style.

```javascript
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
}
```

