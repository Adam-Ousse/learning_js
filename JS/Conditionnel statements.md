# Conditional Statements in JavaScript

Conditional statements in JavaScript are essential for controlling the flow of execution based on certain conditions. These statements allow you to perform different actions depending on whether a condition evaluates to true or false. There are several types of conditional statements available in JavaScript, including `if`, `else`, `else if`, `switch`, and the ternary operator.

## The `if` Statement

The `if` statement is used to execute a block of code if a specified condition is true. Its syntax is straightforward:

```javascript
if (condition) {
  // code to execute if condition is true
}
```

For example, checking if a user has enough balance to purchase an item:

```javascript
const balance = 500;
const jeansPrice = 40;

if (jeansPrice <= balance) {
  console.log("You have enough money to purchase the item!");
}
```

## The `else` and `else if` Statements

The `else` statement allows you to specify a block of code to be executed if the condition in the `if` statement is false. The `else if` statement lets you add more conditions to check if the initial condition is not met.

```javascript
if (condition1) {
  // code to execute if condition1 is true
} else if (condition2) {
  // code to execute if condition1 is false and condition2 is true
} else {
  // code to execute if both condition1 and condition2 are false
}
```

## The `switch` Statement

The `switch` statement is useful when you have multiple conditions to check against a single expression. It evaluates an expression and executes the block of code associated with the matching case.

```javascript
switch (expression) {
  case value1:
    // code to execute if expression equals value1
    break;
  case value2:
    // code to execute if expression equals value2
    break;
  default:
    // code to execute if none of the above cases match
}
```

## The Ternary Operator

The ternary operator (`condition? exprIfTrue : exprIfFalse`) provides a concise way to write simple `if-else` statements. It's particularly useful for assigning values based on a condition.

```javascript
let age = 21;
const message = (age >= 18)? "You are eligible to vote." : "You are not eligible to vote.";
console.log(message); // Output: You are eligible to vote.
```

These conditional statements are fundamental to writing dynamic and interactive JavaScript applications. By using them effectively, you can create programs that respond to various conditions and user inputs, enhancing the overall user experience.
