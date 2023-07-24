// Import required modules
import express from "express"; // Import the Express web framework.
import morgan from 'morgan'; // Import the 'morgan' middleware for logging.

const app = express(); // Create an Express application.
const port = 3000; // Define the port number on which the server will listen.

// Use the 'morgan' middleware with 'tiny' format for logging HTTP requests.
app.use(morgan('tiny'));

// Define a route for the home page
app.get("/", (req, res) => {
  res.send("Hello"); // Send a response with "Hello" when the root path ("/") is accessed.
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Listening on port ${port}`); // Display a message when the server starts and listens on the specified port.
});

