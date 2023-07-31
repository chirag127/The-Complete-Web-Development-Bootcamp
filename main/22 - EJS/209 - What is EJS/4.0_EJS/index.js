// Import the 'express' module
import express from "express";
// Create an Express application
const app = express();
// Define the port number
const port = 3000;

// Start the server and listen for incoming requests on the specified port
app.listen(port, () => {
  console.log("Server is running on " + `${port}`);
});

// Route handler for the root URL ("/")
app.get("/", (req, res) => {
  // Get the current date
  const today = new Date();
  // Get the day of the week (0: Sunday, 1: Monday, ..., 6: Saturday)
  const day = today.getDay();

  // Check if it's a weekend (Sunday or Saturday)
  if (day === 0 || day === 6) {
    // Render the 'index.ejs' template with data for the weekend
    res.render("index.ejs", {
      dayType: "a weekend",
      advice: "It's time to relax and enjoy the weekend!",
    });
  } else {
    // Render the 'index.ejs' template with data for a weekday
    res.render("index.ejs", {
      dayType: "a weekday",
      advice: "It's time to work hard and be productive!",
    });
  }
});
