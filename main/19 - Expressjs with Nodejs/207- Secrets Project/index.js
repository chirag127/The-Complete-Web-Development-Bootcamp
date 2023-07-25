// To see how the final website should work, run "node solution.js".
// Make sure you have installed all the dependencies with "npm i".

// Import required modules
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

// Get the current directory using the CommonJS __dirname variable
const __dirname = dirname(fileURLToPath(import.meta.url));

// Create an Express application
const app = express();
const port = 3000;

// Variable to keep track of user authorization
var userIsAuthorised = false;

// Use body-parser middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to check the password and set the userIsAuthorised variable
function passwordCheck(req, res, next) {
  const password = req.body["password"];
  if (password === "ILoveProgramming") {
    userIsAuthorised = true;
  }
  next();
}
app.use(passwordCheck);

// Route for handling GET requests to the root URL
app.get("/", (req, res) => {
  // Serve the index.html file from the "public" directory
  res.sendFile(__dirname + "/public/index.html");
});

// Route for handling POST requests to the "/check" URL
app.post("/check", (req, res) => {
  if (userIsAuthorised) {
    // If the user is authorized, serve the secret.html file from the "public" directory
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    // If the user is not authorized, serve the index.html file from the "public" directory
    res.sendFile(__dirname + "/public/index.html");
    // Alternatively, you can redirect the user back to the root URL:
    // res.redirect("/");
  }
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
