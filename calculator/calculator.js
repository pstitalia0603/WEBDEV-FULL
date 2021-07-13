//jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

// app.get("/contact",function(req,res){
//   res.send("Contact Me at: fef@fe.com");
// });
//
//
// app.get("/hobbies", function(req,res){
//   res.send("Yo, hobbies");
// });
//
// app.get("/about",function(req,res){
//   res.send("About me: blah, blah");
// });


app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
//  console.log(__dirname);
});

app.post("/", function(req,res) {
  //res.send("Thanks for posting that");

//  console.log(req.body);
//  console.log(req.body.num1);
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send("The result of the calculation is "+result);
});




app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname + "/bmicalculator.html");
  //  console.log(__dirname);
});

app.post("/bmicalculator", function(req,res) {

var weight = parseFloat(req.body.weight);
var height = parseFloat(req.body.height);

var result = weight / (Math.pow(height,2));
//  var result = weight /(height * height);
//  console.log(result);
  res.send("Your BMI is " + result);
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
