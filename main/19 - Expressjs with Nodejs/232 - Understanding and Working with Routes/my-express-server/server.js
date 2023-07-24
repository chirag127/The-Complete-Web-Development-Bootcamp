// Import the Express framework
const express = require("express");

// Create an instance of Express application
const app = express();

// Set the port number for the server to listen on
const port = 3000;

// *******************************
// Instructions for Postman Testing
// *******************************
// Let’s practice using Postman. Make sure your server is running with nodemon.
// Then test the 5 different routes below with Postman. Open a separate tab for each request.
// Check that for each route you’re getting the correct status code returned to you from your server.
// You should not get any 404s or 500 status codes.
// *******************************

// Route 1: Home Page
app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

// Route 2: Register User (HTTP POST)
app.post("/register", (req, res) => {
  // TODO: Implement code to process registration data
  res.sendStatus(201); // Send a 201 status code for successful registration
});

// Route 3: Update User "angela" (HTTP PUT)
app.put("/user/angela", (req, res) => {
  res.sendStatus(200); // Send a 200 status code for successful update
});

// Route 4: Partial Update User "angela" (HTTP PATCH)
app.patch("/user/angela", (req, res) => {
  res.sendStatus(200); // Send a 200 status code for successful partial update
});

// Route 5: Delete User "angela" (HTTP DELETE)
app.delete("/user/angela", (req, res) => {
  // TODO: Implement code to delete user "angela"
  res.sendStatus(200); // Send a 200 status code for successful deletion
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
