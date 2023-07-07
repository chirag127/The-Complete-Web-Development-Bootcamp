# Handling Requests and Responses the GET Request

in this lesson we will learn how to handle the GET request in expressjs

## 1 - Handling GET Request

to handle the GET request we use the get method

```js
app.get('/', (req, res) => {
  res.send('Hello World');
});
```

## 2 - Handling POST Request

to handle the POST request we use the post method

```js

app.post('/', (req, res) => {
  res.send('Hello World');
});
```

## 3 - Handling PUT Request

to handle the PUT request we use the put method

```js

app.put('/', (req, res) => {
  res.send('Hello World');
});
```