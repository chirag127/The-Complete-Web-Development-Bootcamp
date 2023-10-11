import express from "express"; // Importing the express framework
import axios from "axios"; // Importing the axios library for making HTTP requests

const app = express(); // Creating an instance of the express application
const port = 3000; // Setting the port number for the server to run on
const API_URL = "https://secrets-api.appbrewery.com"; // Base URL for the secrets API

// TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = ""; // Your username for authentication
const yourPassword = ""; // Your password for authentication
const yourAPIKey = ""; // Your API key for authentication
const yourBearerToken = ""; // Your bearer token for authentication

app.get("/", (req, res) => {
  // Route to handle the root URL, rendering the "index.ejs" template with some initial content
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  // Route to fetch data from the API without any authentication
  try {
    const result = await axios.get(API_URL + "/random"); // Sending a GET request to the /random endpoint
    res.render("index.js", { content: JSON.stringify(result.data) }); // Rendering the "index.ejs" template with the API response data as content
  } catch (error) {
    res.status(404).send(error.message); // Handling any errors that occur during the API request
  }
});

app.get("/basicAuth", async (req, res) => {
  // Route to fetch data from the API using basic authentication
  try {
    const result = await axios.get(API_URL + "/all?page=2", {
      // Sending a GET request to the /all endpoint with basic authentication
      auth: {
        username: yourUsername, // Your username
        password: yourPassword, // Your password
      },
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) }); // Rendering the "index.ejs" template with the API response data as content
  } catch (error) {
    res.status(404).send(error.message); // Handling any errors that occur during the API request
  }
});

app.get("/apiKey", async (req, res) => {
  // Route to fetch data from the API using an API key
  try {
    const result = await axios.get(API_URL + "/filter", {
      // Sending a GET request to the /filter endpoint with an API key as a query parameter
      params: {
        score: 5, // Filter for secrets with an embarrassment score of 5 or greater
        apiKey: yourAPIKey, // Your API key
      },
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) }); // Rendering the "index.ejs" template with the API response data as content
  } catch (error) {
    res.status(404).send(error.message); // Handling any errors that occur during the API request
  }
});

const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` }, // Configuration object with the Bearer token for authorization
};

app.get("/bearerToken", async (req, res) => {
  // Route to fetch data from the API using a bearer token
  try {
    const result = await axios.get(API_URL + "/secrets/2", config); // Sending a GET request to the /secrets/{id} endpoint with the Bearer token in the headers
    res.render("index.ejs", { content: JSON.stringify(result.data) }); // Rendering the "index.ejs" template with the API response data as content
  } catch (error) {
    res.status(404).send(error.message); // Handling any errors that occur during the API request
  }
});

app.listen(port, () => {
  // Starting the server and listening on the specified port
  console.log(`Server is running on port ${port}`);
});
