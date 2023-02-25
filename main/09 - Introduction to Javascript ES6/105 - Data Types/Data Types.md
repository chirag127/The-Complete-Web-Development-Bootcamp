# Data Types

## Primitive Data Types

### String

A string (or a text string) is a series of characters like "John Doe".

Strings are written with quotes. You can use single or double quotes.

They have a size of 2 bytes per character.

```javascript
var message = "Hello World"
```

### Number

A number is a numeric value like 12345.

Numbers are written without quotes.

They have a size of 8 bytes.

```javascript
var number = 12345
```

### Boolean

A boolean has only two values: true or false.

Booleans are not written with quotes.

They have a size of 1 byte.

```javascript
var boolean = true
```

### Undefined

A variable that has not been assigned a value is undefined.

Undefined values are not written with quotes.

They have a size of 1 byte.

```javascript
var undefined
```

### Null

Null is "nothing". It is supposed to be something that doesn't exist.

Null values are not written with quotes.

They have a size of 1 byte.

```javascript
var null = null
```

## Non-Primitive Data Types

### Array

An array is a special type of variable. It doesn't contain just one value, but many.

Arrays are written with square brackets.

They have a size of 8 bytes per element.

```javascript
var array = ["Hello", "World"]
```

### Object

An object is a special type of variable. It doesn't contain just one value, but many.

Objects are written with curly brackets.

They have a size of 8 bytes per element.

```javascript
var object = {message: "Hello World"}
```

### Function

A function is a set of statements that performs a task or calculates a value.

Functions are written with curly brackets.

They have a size of 8 bytes per element.

```javascript
function sayHello() {
  alert("Hello World")
}
```

## Data Type Conversions

### toString()

The toString() method converts a number to a string.

```javascript
var x = 123;
x.toString();    // returns 123 from variable x
(123).toString();    // returns 123 from literal 123
(100 + 23).toString();    // returns 123 from expression 100 + 23
```

### toExponential()

The toExponential() method converts a number into an exponential notation.

```javascript
var x = 9.656;
x.toExponential(2);    // returns 9.66e+0
x.toExponential(4);    // returns 9.6560e+0
x.toExponential(6);    // returns 9.656000e+0
```
