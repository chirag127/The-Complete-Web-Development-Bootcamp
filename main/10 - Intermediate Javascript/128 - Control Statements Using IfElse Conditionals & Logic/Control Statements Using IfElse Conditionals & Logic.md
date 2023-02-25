# Control Statements Using IfElse Conditionals & Logic

The Control Statements Using IfElse Conditionals & Logic is a control statement that allows you to execute a block of code if a condition is true. It is a very powerful statement that can be used to create some very interesting effects.

## If Statement

```js
if (condition) {
  // block of code to be executed if the condition is true
}
```

## If Else Statement

```js
if (condition) {
  // block of code to be executed if the condition is true
} else {
  // block of code to be executed if the condition is false
}
```

## If Else If Statement

```js
if (condition1) {
  // block of code to be executed if condition1 is true
} else if (condition2) {
  // block of code to be executed if the condition1 is false and condition2 is true
} else {
  // block of code to be executed if the condition1 is false and condition2 is false
}
```

## Ternary Operator

```js
condition ? expression1 : expression2;
```

## Switch Statement

```js
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

## Logical Operators

| Operator | Description |
| --- | --- |
| && | Logical AND. Returns true if both operands are true. |
| \|\| | Logical OR. Returns true if one of the operands is true. |
| ! | Logical NOT. Returns true if the operand is false. |

## Truthy and Falsy Values

- Falsy values are treated as false when evaluated in a Boolean context. The following values are falsy:
  - false
  - undefined
  - null
  - 0
  - NaN
  - The empty string ("")
- Everything else is truthy.

## Short Circuit Evaluation

- Short-circuit evaluation is a technique used in computer programming to delay the evaluation of an expression until its value is needed, and to avoid unnecessary repeated evaluations.
- In JavaScript, the logical operators && and || are short-circuit operators, which means that the right-hand side of the expression is evaluated only if the value of the left-hand side is sufficient to determine the value of the expression as a whole.
- In other words, if the left-hand side of the logical operator is false, the right-hand side will not be evaluated, because the result is already known.

## Examples

### If Statement

```js
if (true) {
  console.log("This is a true statement.");
}
```

### If Else Statement

```js
if (false) {
  console.log("This is a true statement.");
} else {
  console.log("This is a false statement.");
}
```

### If Else If Statement

```js
if (false) {
  console.log("This is a true statement.");
} else if (true) {
  console.log("This is a true statement.");
} else {
  console.log("This is a false statement.");
}
```

### Ternary Operator

```js
true ? console.log("This is a true statement.") : console.log("This is a false statement.");
```

### Switch Statement

```js
switch (new Date().getDay()) {
  case 0:
    console.log("Today is Sunday.");
    break;
  case 1:
    console.log("Today is Monday.");
    break;
  case 2:
    console.log("Today is Tuesday.");
    break;
  case 3:
    console.log("Today is Wednesday.");
    break;
  case 4:
    console.log("Today is Thursday.");
    break;
  case 5:
    console.log("Today is Friday.");
    break;
  case 6:
    console.log("Today is Saturday.");
}
```

### Logical Operators

```js
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log(!true); // false
console.log(!false); // true
```

### Truthy and Falsy Values

```js
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false

console.log(Boolean(1)); // true
console.log(Boolean("a")); // true
console.log(Boolean({})); // true
console.log(Boolean([])); // true
```

### Short Circuit Evaluation

```js
true && console.log("This is a true statement."); // This is a true statement.
false && console.log("This is a true statement."); // false
true || console.log("This is a false statement."); // true
false || console.log("This is a false statement."); // This is a false statement.
```

## Exercises

### If Statement

- Create a variable named `age` and assign it a value of `18`.
- Create an if statement that checks if the variable `age` is greater than or equal to `18`.
- If the condition is true, log the message `You are old enough to drive.` to the console.
- If the condition is false, log the message `You are not old enough to drive.` to the console.

### If Else Statement

- Create a variable named `age` and assign it a value of `18`.
- Create an if else statement that checks if the variable `age` is greater than or equal to `18`.
- If the condition is true, log the message `You are old enough to drive.` to the console.
- If the condition is false, log the message `You are not old enough to drive.` to the console.

### If Else If Statement

- Create a variable named `age` and assign it a value of `18`.
- Create an if else if statement that checks if the variable `age` is greater than `18`.
- If the condition is true, log the message `You are old enough to drive.` to the console.
- If the condition is false, create a nested if else statement that checks if the variable `age` is equal to `18`.
- 