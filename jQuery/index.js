// $(document).ready(function() {
//   $("h1").css("color","red");
// });


 // $("h1").css("color","red");


// //in vanilla javascript
// document.querySelector("h1");
//document.querySelectorAll("button");
// //in jquery
// $("h1");
// $("button")

// console.log($("h1").css("font-size")); //with single value, you get the property
//
//
// ($("h1").css("font-size", "5rem")); //with two properties, you change the value
//

// $("h1").addClass("big-title margin-50"); //adding multiple css classes

//jQuery manipulate text and html
// $("h1").text("Bye");
// $("button").text("Don't Click Me");
//
// $("button").html("<em>Hey</em>")
//
//
// //jQuery manipulate attributes
// console.log($("img").attr("src"));
//
// $("a").attr("href","https://www.yahoo.com");

//event listeners
// $("h1").click(function() {
//   $("h1").css("color","purple");
// });

//vanilla javascript
// for (var i = 0; i<5; i++){
//   document.querySelectorAll("button")[i].addEventListener("click",function(){
//     document.querySelector("h1").style.color="purple";
//   });
// }

//same as above in jQuery
// $("button").click(function() {
//   $("h1").css("color","purple");
// });
//
// $("input").keydown(function(event) {
//   console.log(event.key);
// });

// $(document).keydown(function(event) {
//   $("h1").text(event.key);
// });

// $(document).keydown(function(event) {
//   $("h1").text(event.key);
// });
//
// $("h1").on("click",function() {
//   $("h1").css("color","purple");
// });
//
//
// $("h1").before("<button>Before</button>");
// $("h1").after("<button>After</button>");
// $("h1").prepend("<button>prepend</button>");
// $("h1").append("<button>append</button>");
//
// //remove all buttons
// $("button").remove();


 $("button").on("click",function() {
  // $("h1").show();
  //$("h1").hide();
  //$("h1").toggle();
  //$("h1").fadeOut();
  //$("h1").fadeIn();
//  $("h1").fadeToggle();
//$("h1").slideUp();
//$("h1").slideDown();
//$("h1").slideToggle();
//$("h1").animate({opacity: 0.5}); //only css rules that have a numeric value
//chaining animations
$("h1").slideUp().slideDown().animate({opacity:0.5});
 });
