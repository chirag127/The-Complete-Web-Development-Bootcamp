# Parsing Data in EJS

## Introduction to Data Parsing in EJS

EJS (Embedded JavaScript) is a popular templating engine that allows you to dynamically generate HTML content by embedding JavaScript code within HTML files. One of the essential features of EJS is its ability to parse and render data dynamically, making it easy to display dynamic content based on variables, arrays, or objects.

## How Data Parsing Works in EJS

Data parsing in EJS involves inserting dynamic data into your HTML template during the rendering process. EJS uses delimiters to distinguish between static HTML content and dynamic JavaScript code. The delimiters used by EJS are as follows:

- `<% %>`: Used for executing JavaScript code without displaying its output.
- `<%= %>`: Used for displaying the output of JavaScript expressions within the HTML markup.
- `<%- %>`: Similar to `<%= %>`, but it doesn't escape HTML entities, allowing the output of raw HTML.
- `<%# %>`: Used for adding comments in the EJS template that won't be included in the rendered output.

When you render an EJS template, the engine will process the template, execute the JavaScript code within the delimiters, and replace them with the corresponding output.

## How to Use Data Parsing in EJS

To use data parsing in EJS, follow these steps:

1. **Install EJS**: First, make sure you have EJS installed in your Node.js project. You can install it using npm with the following command:

2. **Create an EJS Template**: Create an HTML file with the `.ejs` extension, which will serve as your EJS template. In this template, you can use the EJS delimiters to insert dynamic data.

3. **Pass Data to the Template**: In your Node.js application, define the data you want to use in your EJS template. This data can be in the form of variables, arrays, or objects.

4. **Render the Template**: Use the EJS engine to render the template and pass the data as a context object. The EJS engine will process the template, replace the EJS delimiters with the corresponding data, and return the final HTML output.

## Example: Using Data Parsing in EJS

Let's look at a simple example to understand how data parsing works in EJS:

### EJS Template (template.ejs):

```html
<!DOCTYPE html>
<html>
  <head>
    <title>EJS Data Parsing Example</title>
  </head>
  <body>
    <h1>Hello, <%= name %>!</h1>
    <ul>
      <% fruits.forEach((fruit) => { %>
      <li><%= fruit %></li>
      <% }); %>
    </ul>
  </body>
</html>
```

## Node.js Application (app.js):

```js
const ejs = require("ejs");
const fs = require("fs");

// Sample data to be passed to the template
const data = {
  name: "John",
  fruits: ["Apple", "Banana", "Orange"],
};

// Read the EJS template file
fs.readFile("template.ejs", "utf8", (err, template) => {
  if (err) throw err;

  // Render the EJS template with the data
  const renderedHTML = ejs.render(template, data);

  // Output the final HTML
  console.log(renderedHTML);
});
```

## Output

```Html


<!DOCTYPE html>
<html>
<head>
  <title>EJS Data Parsing Example</title>
</head>
<body>
  <h1>Hello, John!</h1>
  <ul>
    <li>Apple</li>
    <li>Banana</li>
    <li>Orange</li>
  </ul>
</body>
</html>



```

In this example, the EJS template contains placeholders <%= name %> and <%= fruit %> for dynamic data. The Node.js application reads the template, renders it using the ejs.render() function, and replaces the placeholders with the actual data, resulting in the final HTML output.

With data parsing in EJS, you can create dynamic and interactive HTML templates for your web applications, making it easier to display dynamic content and handle user-specific data.
