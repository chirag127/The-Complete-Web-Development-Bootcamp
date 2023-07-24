# Handling Requests and Responses: GET, POST, PUT, PATCH, and DELETE

In this lesson, we will explore how to handle different types of requests in ExpressJS.

## 1 - Handling GET Request

The GET method is used when requesting a resource from the server. In Express, we use the app.get method to handle GET requests.

```js
app.get('/', (req, res) => {
  res.send('Hello World');
});
```

## 2 - Handling POST Request

The POST method is used when we want to send a resource or piece of information to the server. To handle POST requests, we use the app.post method.

```js

app.post('/', (req, res) => {
  res.send('Hello World');
});
```

## 3 -  Handling PUT Request

The PUT method is utilized when we want to replace existing resources. To handle PUT requests, we use the app.put method.

```js

app.put('/', (req, res) => {
  res.send('Hello World');
});
```

## 4 - Handling PATCH Request
The PATCH method is used to partially update a resource, replacing some part of it.

```js

// To handle PATCH requests, use the app.patch method
app.patch('/', (req, res) => {
  res.send('Hello World');
});
```

## 5 - Handling DELETE Request

The DELETE method is used when we want to delete a resource from the server.

```js

// To handle DELETE requests, use the app.delete method
app.delete('/', (req, res) => {
  res.send('Hello World');
});

```

By running the nodemon command with your file name as an argument, nodemon will automatically monitor changes to your files and restart the Node.js application whenever you save any changes, making the development process more efficient as you won't need to manually restart the server after each code modification.

To install nodemon module golbally and use it  we can use following command in terminal
```bssh
npm -i -g nodemon
nodemon file_name.extension_name (index.js)
```
