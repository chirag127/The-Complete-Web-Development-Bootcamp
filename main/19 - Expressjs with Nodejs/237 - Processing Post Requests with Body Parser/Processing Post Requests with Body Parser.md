# Processing Post Requests with Body Parser

we were not able to access the data from the post request in the previous lesson

to access the data from the post request we will use the body parser module

## 1. Introduction

in this lesson we will learn how to process post requests with body parser

## 2. Installing Body Parser

to install body parser we will use the following command

```bash

npm install body-parser

npm install express

npm install nodemon



```

## 3. Using Body Parser

to use body parser we will use the following code

```js

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

```

## 4. Processing Post Requests with Body Parser

to process post requests with body parser we will use the following code

```js

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('Thanks for posting that');
});

```

## 5. Processing Post Requests with Body Parser

to process post requests with body parser we will use the following code

```js

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('Thanks for posting that');
});

```

## 6. Processing Post Requests with Body Parser


to process post requests with body parser we will use the following code

```js

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('Thanks for posting that');
});

```



yay tge code works

 I am happy

 