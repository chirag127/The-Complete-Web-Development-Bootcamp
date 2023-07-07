
const express = require("express");


const app = express();

// app.get(3000, function() {
//     console.log("Server started on port 3000");
// }

// );

// teh above code is not working so we will use the below code to make it work

app.listen(3300, function() {
    console.log("Server started on port 3000");
}

);

// now we will go to the browser and type localhost:3000 and we will see the message on the console

// now we will go to the browser and type localhost:3000/contact and we will see the message on the console

// now we will go to the browser and type localhost:3000/about and we will see the message on the console

app.get("/", function(req, res) {

    console.log(req);

    res.send("<h1>Hello, World!</h1>");

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


// now we will go to the browser and type localhost:3000/about and we will see the message on the console

// now we will go to the browser and type localhost:3000/hobbies and we will see the message on the console

app.get("/hobbies", function(req, res) {

    res.send("<ul><li>Coffee</li><li>Code</li><li>More Coffee</li></ul>");

}

);


/* i'm still not able to understand the difference between app.get and app.post

Cannot GET /
set 限制解除
x1
>
<
>>
<<
O
x1

*/

// I forgot to restart the server after making changes to the code and that's why I was getting the above error

// now we will go to the browser and type localhost:3000/hobbies and we will see the message on the console

// now we will go to the browser and type localhost:3000/about and we will see the message on the console

// now we will go to the browser and type localhost:3000/contact and we will see the message on the console

// now we will go to the browser and type localhost:3000 and we will see the message on the console
