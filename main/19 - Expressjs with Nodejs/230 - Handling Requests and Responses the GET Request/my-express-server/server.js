// Import the 'express' module
import express from "express";

// Create an instance of the Express application
const app = express();

// Set the port number to 3000
const port = 3000;

app.listen(port, function () {
    console.log("Server started on port 3000");
  });
  
  // Handle the root route ("/") and send a response
  app.get("/", function (req, res) {
    console.log(req);
    res.send("<h1>Hello, World!</h1>");
  });
  
  // Handle the "/contact" route and send a response
  app.get("/contact", function (req, res) {
    res.send("Contact me at: 239847239847");
  });
  
  // Handle the "/about" route and send a response
  app.get("/about", function (req, res) {
    res.send("My name is Nitesh meena;");
  });
  
  // Handle the "/hobbies" route and send a response with a list of hobbies
  app.get("/hobbies", function (req, res) {
    res.send("<ul><li>Coffee</li><li>Code</li><li>More Coffee</li></ul>");
  });
  
