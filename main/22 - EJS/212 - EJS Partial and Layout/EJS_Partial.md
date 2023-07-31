# EJS Partial and Layouts

## Introduction to EJS Partial and Layouts

EJS (Embedded JavaScript) provides powerful features to create reusable components and layouts 
in web applications. Two essential concepts in EJS for achieving this reusability are Partial 
and Layouts. These concepts enable you to break down your templates into smaller, manageable components and create consistent page layouts.

### EJS Partial

An EJS Partial is a reusable snippet of EJS code that represents a specific component or section of a web page. 
Partials allow you to define a code snippet once and include it in multiple templates wherever needed.
This promotes code reusability and simplifies maintenance by avoiding duplicate code.

### EJS Layouts

EJS Layouts are templates that provide the structure and common elements for the entire web application. 
Instead of repeating the common HTML elements (like header, footer, navigation) in every template, 
you can create an EJS layout to define these elements once and use it as a base template for all other pages.

## How to Use EJS Partial and Layouts

To use EJS Partial and Layouts, follow these steps:

1. **Install EJS**: Ensure you have EJS installed in your Node.js project. You can install it using npm with the following command:


## npm install ejs

```bash

2. **Create Partials**: Identify the sections of your web page that you want to reuse.
Create EJS files for each partial and save them in a separate directory (e.g., "partials"). These files will contain the reusable code snippets.

3. **Include Partials**: In your main templates, you can include the partials using EJS syntax:
```html
<% include path/to/partial.ejs %>

```

Create Layout: Design your layout template, which will contain the common HTML elements like header, footer, navigation, etc. 
Save this file as "layout.ejs" or any desired name.

Use Layout: In your application, specify the layout template for each page to provide a consistent structure.
You can do this using the EJS options in your Node.js application:

```js

const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layout'); // Specify the layout template

app.get('/', (req, res) => {
  res.render('home', { title: 'Home Page' });
});

// Other routes...

app.listen(3000, () => {
  console.log('Server started on port 3000');
});


```

# Example: Using EJS Partial and Layouts
Let's look at a simple example to understand how to use EJS Partial and Layouts:

## EJS Layout (layout.ejs):

```html
<!DOCTYPE html>
<html>
<head>
  <title><%= title %></title>
</head>
<body>
  <header>
    <!-- Common header content goes here -->
    <h1>My Website</h1>
  </header>

  <main>
    <!-- Page-specific content will be included here -->
    <%- body %>
  </main>

  <footer>
    <!-- Common footer content goes here -->
    <p>&copy; 2023 My Website</p>
  </footer>
</body>
</html>

```

## EJS Partial (header.ejs):


```html
<nav>
  <!-- Common navigation links go here -->
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
</nav>

```

## EJS Page Template (home.ejs):

```html
<% include partials/header %>

<section>
  <!-- Page-specific content goes here -->
  <h2>Welcome to our website!</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</section>

<% include partials/footer %>

```

## Node.js Application (app.js):

```js
const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layout');

app.get('/', (req, res) => {
  res.render('home', { title: 'Home Page' });
});

// Other routes...

app.listen(3000, () => {
  console.log('Server started on port 3000');
});


```

In this example, we have a layout template (layout.ejs) that defines the common structure of the web pages. 
We also have a header partial (header.ejs) that contains the common navigation links. 
The home.ejs template includes the header partial and uses the layout template to wrap the page-specific content.

By using EJS Partial and Layouts, you can easily create a maintainable and consistent structure for your web application while promoting code reusability and readability.

Remember to install the necessary packages and configure your Node.js application properly to use EJS. The above example assumes you have already set up the necessary environment and Express framework.

python
