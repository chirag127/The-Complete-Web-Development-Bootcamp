# Javascript Variables

## What is a variable?

A variable is a container for a value. It can be used to store data to be referenced and manipulated in a computer program. It is helpful to think of variables as containers that hold information. This information can then be used throughout your code.

## What is a variable used for?

Variables are used to store information to be referenced and manipulated in a computer program. They also provide a way of labeling data with a descriptive name, so our programs can be understood more clearly by the reader and ourselves. It is helpful to think of variables as containers that hold information. This information can then be used throughout your code.

## How to create a variable?

To create a variable, you use the keyword `var` followed by the name of the variable. The name of the variable can contain letters, digits, underscores, and dollar signs. The first character must be a letter, underscore or dollar sign. Variable names are case sensitive.

```javascript
var name = "John"
```

## Variable Naming Conventions

The naming conventions for variables are as follows:

  * The name must begin with a letter, underscore, or dollar sign.
  * The name can contain letters, numbers, underscores, or dollar signs.
  * The name is case sensitive (y and Y are different variables).

## Variable Scope

Variables can be either local or global. A local variable is declared within a function and is only available within the function. A global variable is declared outside of a function and is available to any other code in the document.

## Variable Hoisting

Before a script is executed, all variables are hoisted to the top of the script. This means that all variables are declared at the top of the script, regardless of where the actual declaration takes place.

```javascript
var name = "John"
```

## Javascript Data Types

### Number

Numbers are written with or without decimals.

They have a size of 8 bytes.

```javascript
var number = 42
```

### String

Strings are written with quotes.

They have a size of 2 bytes per character.

```javascript
var string = "Hello World"
```

### Boolean

Booleans can only have two values: true or false.

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

var null
```

### Object

Objects are variables too. But objects can contain many values.

Objects are written with curly brackets.

They have a size of 2 bytes per character.

```javascript

var object = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
```

### Array

