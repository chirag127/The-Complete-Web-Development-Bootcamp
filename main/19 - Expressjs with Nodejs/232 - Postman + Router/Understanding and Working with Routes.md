# Understanding and Working with Routes

## 1. Introduction

In this lesson we will learn how to work with routes in expressjs

## 2. What is a Route?

A route is a section of Express code that associates an HTTP verb (GET, POST, PUT, DELETE, etc.), a URL path/pattern, and a function that is called to handle that pattern.

## 3. Creating a Route

To create a route we use the get method

```js

app.get('/', (req, res) => {
  res.send('Hello World');
});

```

## 4. Creating a Route with Parameters

To create a route with parameters we use the get method and add a colon before the parameter name

```js

app.get('/users/:userId', (req, res) => {
  res.send('Hello World');
});

```

## 5. Creating a Route with Multiple Parameters

To create a route with multiple parameters we use the get method and add a colon before the parameter name

```js

app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send('Hello World');
});

```

## 6. Creating a Route with Optional Parameters

To create a route with optional parameters we use the get method and add a question mark after the parameter name

```js

app.get('/users/:userId/books/:bookId?', (req, res) => {
  res.send('Hello World');
});

```

## 7. Creating a Route with Regular Expressions

To create a route with regular expressions we use the get method and add a colon before the parameter name

```js

app.get('/users/:userId(\\d+)', (req, res) => {
  res.send('Hello World');
});

```

## now it s prettry painfull to restart the server every time we make a change to the code so we will use nodemon to restart the server automatically

## 8. Installing nodemon

to install nodemon we use the following command

```bash

npm install -g nodemon

```

## 9. Using nodemon

to use nodemon we use the following command

```bash

nodemon app.js

```

## 10. Creating a Route with Regular Expressions

To create a route with regular expressions we use the get method and add a colon before the parameter name

```js

app.get('/users/:userId(\\d+)', (req, res) => {
  res.send('Hello World');
});

```


nodemon will save our sanity and time keep in mind that we will use it in development only
