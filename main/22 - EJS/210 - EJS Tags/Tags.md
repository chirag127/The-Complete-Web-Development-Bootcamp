# EJS Tags and Their Use

## Introduction

EJS (Embedded JavaScript) is a templating engine for Node.js and web browsers that allows you to embed dynamic content and logic in your HTML files. It provides several tags to execute JavaScript code and display data within the HTML markup.

## EJS Tags

1. `<% %>`: **Scriptlet Tags**
   - Used to execute JavaScript code without displaying its output.
   - Example:
     ```html
     <% const message = "Hello, World!"; %>
     ```
   - Output: (No output as it's a scriptlet)

2. `<%= %>`: **Output Tags**
   - Used to display the output of JavaScript expressions within the HTML markup.
   - Example:
     ```html
     <p><%= message %></p>
     ```
   - Output:
     ```html
     <p>Hello, World!</p>
     ```

3. `<%- %>`: **Unescaped Output Tags**
   - Similar to `<%= %>`, but it does not escape HTML entities, allowing the output of raw HTML.
   - Example:
     ```html
     <div><%- rawHtmlContent %></div>
     ```
   - Output: (Output will be the raw HTML content without escaping)

4. `<%# %>`: **Comment Tags**
   - Used to add comments in the EJS template, which won't be included in the rendered output.
   - Example:
     ```html
     <%# This is a comment %>
     ```
   - Output: (No output as it's a comment)

5. `<% include %>`: **Include Tags**
   - Used to include and render another EJS file within the current template.
   - Example:
     ```html
     <% include('header') %>
     ```
   - Output: (The content of 'header.ejs' file will be included here)

6. `<%- include %>`: **Unescaped Include Tags**
   - Similar to `<% include %>`, but it includes and renders the file without escaping HTML entities.
   - Example:
     ```html
     <%- include('footer') %>
     ```
   - Output: (The content of 'footer.ejs' file will be included here without escaping)

7. `<% for %>`: **Looping Tags**
   - Used for performing loops in the EJS template.
   - Example:
     ```html
     <ul>
       <% for (let item of items) { %>
         <li><%= item %></li>
       <% } %>
     </ul>
     ```
   - Output: (A list of items will be generated based on the 'items' array)

8. `<% if %>`: **Conditional Tags**
   - Used for adding conditional logic in the template.
   - Example:
     ```html
     <% if (user.isAdmin) { %>
       <p>Welcome, Admin!</p>
     <% } else { %>
       <p>Welcome, User!</p>
     <% } %>
     ```
   - Output: (Displays a welcome message based on whether 'user.isAdmin' is true or false)

## Conclusion

EJS tags provide a convenient and straightforward way to embed JavaScript code and display dynamic content in HTML files. Whether you need to execute logic, loop through data, or apply conditional statements, EJS tags enable you to create dynamic and responsive templates for your web applications.

Remember that when using EJS, it's essential to sanitize and validate any user-provided data to prevent potential security vulnerabilities like cross-site scripting (XSS) attacks. Always handle user input with care and escape output appropriately, especially when using unescaped output tags (`<%- %>`).

### HTML Code
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>EJS Tags</title>
  </head>

  <body>
    <h1>
      <!-- Page Title: Challange about EJS Tag -->
      Challange about EJS Tag
    </h1>
    <% const d = new Date(); let seconds = d.getSeconds(); %>

    <p>
      Current second:
      <!-- Display current second -->
      <%= seconds %>
    </p>

    <% if (seconds % 2 === 0) { %>
      <ul>
        <!-- List of items goes here if current second is even. -->
        <% items.forEach((fruit) => { %>
          <li>
            <%= fruit %>
          </li>
        <% }) %>
        <!-- If the current second is even and there are no items, the following message should be displayed: -->
        <!-- <p>No items to display</p> -->
      </ul>
    <% } else { %>
      <!-- If the current second is odd, display the following message: -->
      <p>No items to display</p>
    <% } %>

    <p>
      <!-- Display HTML content from a variable called htmlContent -->
      <%- htmlContent %>
    </p>

    <!-- Include the footer from the "footer.ejs" file -->
    <%- include("footer.ejs") %>
  </body>
</html>
