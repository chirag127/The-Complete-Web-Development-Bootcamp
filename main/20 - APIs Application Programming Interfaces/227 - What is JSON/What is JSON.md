# JSON vs. .js Format

## JSON (JavaScript Object Notation):

JSON is a lightweight data interchange format used to transmit data between a server and a client. It uses a simple key-value pair format and supports various programming languages. JSON files have the `.json` extension.

Example JSON data representing a person:

```json
{
  "name": "John Doe",
  "age": 30,
  "email": "john@example.com"
}
```

## Js (JavaScript) Format:

.js files are JavaScript files containing executable code written in JavaScript. They can include functions, objects, variables, and executable statements. .js files have the .js extension.

Example JavaScript object representing a person:
```js
const person = {
  name: "John Doe",
  age: 30,
  email: "john@example.com"
};


```

## Converting JS Object to JSON
To convert a JavaScript object to JSON, use the JSON.stringify() method.

Example in JavaScript:

```js

const person = {
  name: "John Doe",
  age: 30,
  email: "john@example.com"
};

const jsonStr = JSON.stringify(person);
console.log(jsonStr); // Output: {"name":"John Doe","age":30,"email":"john@example.com"}

```

## Converting JSON to JS Object
To convert a JSON string back to a JavaScript object, use the JSON.parse() method.

Example in JavaScript:

```js
const jsonString = '{"name":"John Doe","age":30,"email":"john@example.com"}';

const person = JSON.parse(jsonString);
console.log(person); // Output: { name: 'John Doe', age: 30, email: 'john@example.com' }


```