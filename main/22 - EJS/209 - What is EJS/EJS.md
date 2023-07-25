# EJS (Embedded JavaScript)

EJS (Embedded JavaScript) is a popular templating engine for Node.js and JavaScript web applications. It allows you to embed JavaScript code directly within HTML templates, making it easier to generate dynamic content and display data from the server-side in the client-side web pages.

## How to Use EJS

To use EJS in your Node.js application, follow these steps:

1. Install EJS as a dependency using npm:

```bash
npm install ejs
```

Create an EJS template file (e.g., index.ejs) inside a views folder. The template can contain HTML and embedded JavaScript code using EJS tags:

```html
<!-- index.ejs -->

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EJS Example</title>
</head>

<body>
  <h1>Hello, <%= name %>!</h1>
  <p>Today is <%= dayOfWeek %>.</p>
</body>

</html>
```
In this template, we have used the <%= ... %> EJS tags to embed JavaScript code. The data inside these tags will be dynamically replaced with the actual values when the template is rendered.

Set up the Express application to use EJS as the view engine:

```js
// app.js

const express = require('express');
const app = express();
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Route handler
app.get('/', (req, res) => {
  const data = {
    name: 'John',
    dayOfWeek: 'Monday'
  };

  // Render the EJS template with data
  res.render('index', data);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

```

In this code, we've set the view engine to EJS using app.set('view engine', 'ejs'). Then, we have a route handler for the root URL (/) that renders the index.ejs template with the provided data (name and dayOfWeek).

Run the application and access it in the browser:
After running the application using node app.js, navigate to http://localhost:3000 in your web browser. The dynamic content in the EJS template will be rendered, displaying "Hello, John!" and "Today is Monday." (assuming it's Monday when you access the page). The values are dynamically inserted based on the data provided in the route handler.


