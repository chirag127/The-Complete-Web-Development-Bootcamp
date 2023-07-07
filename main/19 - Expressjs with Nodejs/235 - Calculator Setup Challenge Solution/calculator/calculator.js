
const express = require("express");

const app = express();

app.get("/", function(req, res) {

    res.send("<h1>Hello, World!</h1>");

}

);

app.listen(3300, function() {

    console.log("Server started on port 3000");

}

);

app.get("/contact", function(req, res) {

    res.send("Contact me at: 239847239847");

}


);

app.get("/about", function(req, res) {

    res.send("My name is chirag singhal;");

}

);

