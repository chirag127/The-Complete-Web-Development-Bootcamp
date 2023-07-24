// Import required modules and set up the server
import express from "express"; // Import the Express web framework.
import bodyParser from "body-parser"; // Import the body-parser middleware to parse request bodies.
import { dirname } from "path"; // Import the 'dirname' function from the 'path' module.
import { fileURLToPath } from "url"; // Import the 'fileURLToPath' function from the 'url' module.

const __dirname = dirname(fileURLToPath(import.meta.url)); // Get the current directory name using 'dirname' and 'fileURLToPath'.

const app = express(); // Create an Express application.
const port = 3000; // Define the port number on which the server will listen.

// Configure middleware for parsing request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Use the 'bodyParser' middleware to parse URL-encoded request bodies.

// Define a route for the home page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html"); // Send the "index.html" file located in the 'public' folder to the client.
  // console.log(__dirname + "/public/index.html");  // (Optional) Uncomment this line to log the path of the sent file.
});

// Define a route for handling form submissions
app.post("/submit", (req, res) => {
  console.log(req.body); // Log the data received in the request body (assuming it's a form submission).
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Listening on port ${port}`); // Display a message when the server starts and listens on the specified port.
});
