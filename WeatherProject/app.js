const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");

});

app.post("/", function(req,res){
//  console.log(req.body.cityName);

  const query = req.body.cityName;
  const apiKey = "fcf4496258efb3b5ba94d61b49549712";
  const unit = "imperial";
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&units="+unit+"&appid="+apiKey;

  https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data",function(data){
      //console.log(data);
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weaDesc = weatherData.weather[0].description;
    //  const location = weatherData.name;
      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"

      res.write("<p>The weather is currently " + weaDesc +"</p>");
      res.write("<h1>The temperature in "+ query + " is " + temp + " degrees Farenheit.</h1>");
      res.write("<img src=" + imageURL +">");
      res.send();

    //  console.log(temp);
    //  console.log(weaDesc);
    //  console.log(icon);

      // const object = {
      //   name: "Paula",
      //   favoriteFood: "Pizza"
      // }
      // console.log(JSON.stringify(object));
    //  console.log(weatherData);
    })
  });

  //  res.send("Server is up and running");






//  console.log("Post Request Received");

});



app.listen(3000,function() {
  console.log("Server on port 3000");
});
