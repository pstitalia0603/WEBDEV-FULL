//jshint esversion:6
const express = require("express");
//const bodyParser = require("body-parser");

const app = express();

//app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(request,response) {
  response.send("<h1>Hello, world!</h1>");
});




app.listen(3000, function() {
  console.log("Server started on port 3000");
});
