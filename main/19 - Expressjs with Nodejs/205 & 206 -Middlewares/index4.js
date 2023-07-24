// IMPORTANT COMMAND: Run 'npm install express body-parser' to install required dependencies.
// Then, you can run this script with 'node filename.js'.

import express from "express"; // Import the Express web framework.
import bodyParser from "body-parser"; // Import the 'body-parser' middleware to parse request bodies.
import { dirname } from "path"; // Import the 'dirname' function from the 'path' module.
import { fileURLToPath } from "url"; // Import the 'fileURLToPath' function from the 'url' module.

const __dirname = dirname(fileURLToPath(import.meta.url)); // Get the current directory name using 'dirname' and 'fileURLToPath'.

const app = express(); // Create an Express application.
const port = 3000; // Define the port number on which the server will listen.
var bandName = ""; // Variable to store the generated band name.

app.use(bodyParser.urlencoded({ extended: true })); // Use the 'bodyParser' middleware to parse URL-encoded request bodies.

function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"]; // Generate the band name by combining "street" and "pet" values from the request body.
  next(); // Call the 'next()' function to pass control to the next middleware in the chain.
}

app.use(bandNameGenerator); // Use the 'bandNameGenerator' middleware for all incoming requests.

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html"); // Send the "index.html" file located in the 'public' folder to the client.
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`); // Send the generated band name as a response to the POST request.
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`); // Display a message when the server starts and listens on the specified port.
});
