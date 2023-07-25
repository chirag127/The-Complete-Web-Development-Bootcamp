// Import the Express module

import express from "express";

// Create an Express application
const app = express();

// Listen on port 3300
app.listen(3300, function() {
  // Log a message to the console
  console.log("Server started on port 3300");
});

// This code imports the Express module and creates an Express application.
// The application is then configured to listen on port 3300.
// When the application starts, a message is logged to the console.

// now we will go to the browser and type localhost:3000 and we will see the message on the console

// now we will go to the browser and type localhost:3000/contact and we will see the message on the console

// now we will go to the browser and type localhost:3000/about and we will see the message on the console

app.get("/", function(req, res) {

    console.log(req);

    res.send("<h1>Hello, World!</h1>");

}

);

app.get("/contact", function(req, res) {

    res.send("Contact me at: 239847239847");

}

);

app.get("/about", function(req, res) {

    res.send("My name is chirag singhal;");
}

);


// now we will go to the browser and type localhost:3000/about and we will see the message on the console

// now we will go to the browser and type localhost:3000/hobbies and we will see the message on the console

app.get("/hobbies", function(req, res) {

    res.send("<ul><li>Coffee</li><li>Code</li><li>More Coffee</li></ul>");

}

);


/* i'm still not able to understand the difference between app.get and app.post

Cannot GET /
set 限制解除
x1
>
<
>>
<<
O
x1

*/

// I forgot to restart the server after making changes to the code and that's why I was getting the above error

// now we will go to the browser and type localhost:3000/hobbies and we will see the message on the console

// now we will go to the browser and type localhost:3000/about and we will see the message on the console

// now we will go to the browser and type localhost:3000/contact and we will see the message on the console

// now we will go to the browser and type localhost:3000 and we will see the message on the console
