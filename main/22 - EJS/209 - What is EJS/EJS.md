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
  <!-- Displaying dynamic content using EJS tags -->
  <h1>Hey, it's <%= dayType %>, <%= advice %></h1>
</body>

</html>

```
In this template, we have used the <%= ... %> EJS tags to embed JavaScript code. The data inside these tags will be dynamically replaced with the actual values when the template is rendered.

Set up the Express application to use EJS as the view engine:

```js
// Import the 'express' module
import express from "express";
// Create an Express application
const app = express();
// Define the port number
const port = 3000;

// Start the server and listen for incoming requests on the specified port
app.listen(port, () => {
  console.log("Server is running on " + `${port}`);
});

// Route handler for the root URL ("/")
app.get("/", (req, res) => {
  // Get the current date
  const today = new Date();
  // Get the day of the week (0: Sunday, 1: Monday, ..., 6: Saturday)
  const day = today.getDay();

  // Check if it's a weekend (Sunday or Saturday)
  if (day === 0 || day === 6) {
    // Render the 'index.ejs' template with data for the weekend
    res.render("index.ejs", {
      dayType: "a weekend",
      advice: "It's time to relax and enjoy the weekend!",
    });
  } else {
    // Render the 'index.ejs' template with data for a weekday
    res.render("index.ejs", {
      dayType: "a weekday",
      advice: "It's time to work hard and be productive!",
    });
  }
});
```

In this code, we've set the view engine to EJS using app.set('view engine', 'ejs'). Then, we have a route handler for the root URL (/) that renders the index.ejs template with the provided data (name and dayOfWeek).

Run the application and access it in the browser:
After running the application using node app.js, navigate to http://localhost:3000 in your web browser. The dynamic content in the EJS template will be rendered, displaying "Hello, John!" and "Today is Monday." (assuming it's Monday when you access the page). The values are dynamically inserted based on the data provided in the route handler.


