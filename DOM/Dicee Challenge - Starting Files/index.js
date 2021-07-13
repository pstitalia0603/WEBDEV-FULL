// alert("Working?!");

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//TEACHER SOLUTION
// var randomDiceImage = "dice" + randomNumber1 + ".png";
// var randomDiceImage2 = "dice" + randomNumber2 + ".png";
// var randomImageSource = "images/" + randomDiceImage;
// var randomImageSource2 = "images/" + randomDiceImage2;
// var image1 = document.querySelectorAll("img")[0];
// var image2 = document.querySelectorAll("img")[1];
// image1.setAttribute("src", randomImageSource);
// image2.setAttribute("src", randomImageSource2);

//MY SOLUTION
document.querySelector(".img1").setAttribute("src","images/dice"+ randomNumber1 + ".png");

document.querySelector(".img2").setAttribute("src","images/dice"+ randomNumber2 + ".png");


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
document.querySelector("h1").innerHTML = "Stalemate!";
}
