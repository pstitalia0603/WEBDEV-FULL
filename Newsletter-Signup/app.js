//jshint esversion: 6

const express = require("express");
const bodyParser = require ("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req,res) {

  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME:firstName,
          LNAME: lastName
        }
      }
    ]
  }
//  console.log(firstName, lastName, email);
  const jsonData = JSON.stringify(data);

  const url = "https://us17.api.mailchimp.com/3.0/lists/23e1053797";
  const options = {
    method: "POST",
    auth: "psfra:5e095b925dba2700570092221521a018-us17"
  };

  const request = https.request(url,options,function(response){

      if (response.statusCode === 200 ) {
        res.sendFile(__dirname + "/success.html");
      } else {
        res.sendFile(__dirname + "/failure.html");
      }

    response.on("data",function(data){
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();


});

app.post("/failure", function(req,res){
  res.redirect("/");
});


//LOCAL
//app.listen(3000, function() {
//HEROKU and locally
app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});


//API KEY MAILCHIMP
//5e095b925dba2700570092221521a018-us17

//list
//23e1053797
