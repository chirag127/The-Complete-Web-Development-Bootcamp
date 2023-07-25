# EJS Tags

EJS (Embedded JavaScript) allows you to embed JavaScript code directly within HTML templates using specific tags. These tags enable dynamic content generation and provide flexibility in rendering data on the client-side.

## `<%= ... %>`

The `<%= ... %>` tag is used to output the result of a JavaScript expression into the HTML template. It dynamically replaces the tag with the evaluated value of the expression.

**Example:**

```html
<!-- index.ejs -->

<body>
  <h1>Hello, <%= name %>!</h1>
</body>


In this example, when the template is rendered with data { name: 'John' }, the resulting HTML will be `<h1>Hello, John!</h1>`.

## `<% ... %>`

The `<% ... %>` tag is used to include JavaScript code in the template without rendering the output. It's useful for adding logic and control flow to the template.

**Example:**

html
<!-- index.ejs -->

<body>
  <% if (isLoggedIn) { %>
    <p>Welcome, <%= username %>!</p>
  <% } else { %>
    <p>Please log in to continue.</p>
  <% } %>
</body>


In this example, the template will display a personalized welcome message if the `isLoggedIn` variable is true; otherwise, it will prompt the user to log in.

## `<%- ... %>`

The `<%- ... %>` tag is used to output unescaped HTML content. It's similar to `<%= ... %>`, but it does not escape special HTML characters like `<`, `>`, and `&`.

**Example:**

html
<!-- index.ejs -->

<body>
  <h1><%- pageTitle %></h1>
</body>


In this example, when the template is rendered with data { `pageTitle`: `<em>Welcome to EJS Website</em>` }, the resulting HTML will display the `pageTitle` value as raw HTML, rendering the `<em>` tags correctly.

## `<%# ... %>`

The `<%# ... %>` tag is used for comments within the EJS template. Anything inside this tag will be ignored and not processed during rendering.

**Example:**

html
<!-- index.ejs -->

<body>
  <%# This is a comment. It will not be displayed in the rendered HTML. %>
  <h1>Hello, <%= name %>!</h1>
</body>


In this example, the comment inside the `<%# ... %>` tag will be ignored, and only the `<h1>` tag with the dynamic content will be rendered.

These are some of the commonly used EJS tags that allow you to create dynamic and interactive templates for your Node.js and JavaScript web applications. By leveraging these tags, you can seamlessly integrate server-side data into your client-side web pages.


I hope this is what you are looking for. Let me know if you have any other questions.
