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

2. `<%= %>`: **Output Tags**
   - Used to display the output of JavaScript expressions within the HTML markup.
   - Example:
     ```html
     <p><%= message %></p>
     ```

3. `<%- %>`: **Unescaped Output Tags**
   - Similar to `<%= %>`, but it does not escape HTML entities, allowing the output of raw HTML.
   - Example:
     ```html
     <div><%- rawHtmlContent %></div>
     ```

4. `<%# %>`: **Comment Tags**
   - Used to add comments in the EJS template, which won't be included in the rendered output.
   - Example:
     ```html
     <%# This is a comment %>
     ```

5. `<% include %>`: **Include Tags**
   - Used to include and render another EJS file within the current template.
   - Example:
     ```html
     <% include('header') %>
     ```

6. `<%- include %>`: **Unescaped Include Tags**
   - Similar to `<% include %>`, but it includes and renders the file without escaping HTML entities.
   - Example:
     ```html
     <%- include('footer') %>
     ```

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

## Conclusion

EJS tags provide a convenient and straightforward way to embed JavaScript code and display dynamic content in HTML files. Whether you need to execute logic, loop through data, or apply conditional statements, EJS tags enable you to create dynamic and responsive templates for your web applications.

Remember that when using EJS, it's essential to sanitize and validate any user-provided data to prevent potential security vulnerabilities like cross-site scripting (XSS) attacks. Always handle user input with care and escape output appropriately, especially when using unescaped output tags (`<%- %>`).
