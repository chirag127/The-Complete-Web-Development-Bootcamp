# What Well Make A Calculator

## 1. Introduction

In this lesson we will learn how to build a calculator with expressjs and nodejs

## 2. Creating a Calculator

To create a calculator we will use the following code

```js

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

```

## 3. Creating a Calculator with Parameters

To create a calculator with parameters we will use the following code

```js

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

```


## lets first make a mkdir calculator

```vahs

mkdir calculator
cd calculator
touch calculator.js

```

```
run wi th the codemode calculator.js
```

```js

