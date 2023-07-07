# Solution to the BMI Routing Challenge

## app.js

```js

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  console.log(req.body);


  # we will calculate the bmi here
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

```

## index.html

```html

<!DOCTYPE html>

<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>BMI Calculator</title>
  </head>
  <body>
    <form action="/" method="post">
      <input type="text" name="num1" placeholder="First Number">
      <input type="text" name="num2" placeholder="Second Number">
      <button type="submit" name="button">Calculate</button>
    </form>
  </body>

</html>

```

## index.html

```html

<!DOCTYPE html>
