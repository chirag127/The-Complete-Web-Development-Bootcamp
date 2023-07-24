// Import required modules
import express from "express"; // Import the Express web framework.

const app = express(); // Create an Express application.
const port = 3000; // Define the port number on which the server will listen.

// Custom middleware function 'logger' to log request method and URL
const logger = (req, res, next) => {
  console.log("Request Method:", req.method); // Log the HTTP request method (e.g., GET, POST, etc.).
  console.log("Request URL:", req.url); // Log the URL of the incoming request.
  next(); // Call the 'next()' function to pass control to the next middleware in the chain.
};

app.use(logger); // Use the custom 'logger' middleware for all incoming requests.

// Define a route for the home page
app.get("/", (req, res) => {
  res.send("Hello"); // Send a response with "Hello" when the root path ("/") is accessed.
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Listening on port ${port}`); // Display a message when the server starts and listens on the specified port.
});
