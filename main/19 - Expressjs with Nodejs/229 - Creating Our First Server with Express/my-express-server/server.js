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

app.get("/",(req ,res)=>{
    res.send("You are at Homepage");
})