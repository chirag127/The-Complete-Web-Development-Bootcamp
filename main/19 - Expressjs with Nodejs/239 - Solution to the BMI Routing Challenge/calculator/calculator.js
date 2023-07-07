
const express = require("express");

const bodyParser = require("body-parser");







const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {

    res.sendFile(__dirname + "/index.html");

}

);

app.post("/", function(req, res) {

    console.log(req.body);


    res.send("the answer is " + (Number(req.body.num1) + Number(req.body.num2)));

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
