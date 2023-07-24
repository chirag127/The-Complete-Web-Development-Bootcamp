# Creating Our First Server with Express

// create new folder my express server

// create new file server.js

// install express

// then init the npm project and set the entry point to server.js

```bash
# Create a new directory for the Express server
mkdir my-express-server

# Move into the newly created directory
cd my-express-server

# Create a new file named 'server.js'
touch server.js

# Initialize a new Node.js project using npm (this will prompt you to answer some questions)
npm init

# Alternatively, you can use 'npm init -y' to automatically generate a 'package.json' without any prompts
npm init -y

# Install the 'express' package into the project (this adds the 'express' dependency to 'package.json')
npm install express
```

the discrption of the project is the

this project is a dummy project to learn express

the entry point is server.js

// then we will create the server.js file

// then we will import the express module


This is how we can import express module
```js
// Import the 'express' module
import express from "express";

// Create an instance of the Express application
const app = express();

// Set the port number to 3000
const port = 3000;

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

```

Localhost refers to the practice of hosting a server on our own computer for testing and development purposes when a dedicated server computer is unavailable.

Port: A port can be thought of as a gateway that allows communication between applications, such as HTML, CSS, or JavaScript, and the underlying hardware, services, or other applications. Each application or service typically uses a different port number to facilitate this communication.

 Used for checking running port in computer
```cmd
netstat -ano | findstr "LISTENING"
```


