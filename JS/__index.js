// function lifeInWeeks(age) {

//     var yearsRemaining = 90 - age;
//     var days = yearsRemaining * 365;
//     var weeks = yearsRemaining * 52;
//     var months = yearsRemaining * 12;

//     console.log("You have " + days + " days, " + weeks + " weeks and " + months + " months left");
// }

// lifeInWeeks(42);




// BMI Calculator

// function bmiCalculator(weight,height) {
//     var bmi = weight / (Math.pow(height,2));
//     return Math.round(bmi);
// }


// var bmi = bmiCalculator(65,1.8);

// console.log(bmi);


// var n = Math.random();
// n = n * 6;
// n = Math.floor(n) + 1;

// console.log(n);


//love score generator

// // prompt("Your name: ");
// // prompt("Your sig other name: ");
// var n = Math.random();
// n = n * 100;
// n = Math.floor(n) + 1;

// if (n >= 70) {
//     alert("Your score is: " + n + "%. Awesome!");


// }

// if (n > 30 && n<70) {

// alert("Your score is: " + n + "%. Cool.");
// }

// if (n<=30){
//      alert("Your score is: " + n + "%. Eh.");
// }



// // console.log(n);
// // alert("Your score is: " + n + "%");



//leap year check

// var checkYear = prompt("Enter Year: ");

// if checkYear % 4 = 0 {
//     if checkYear % 100 = 0 {
//     if checkYear % 400 = 0 {
//            alert(checkYear + " is a Leap Year!")
//     }
//     }
//     else {
//         alert(checkYear + " is not a Leap Year.")
//     }
// }

// else {
//     alert(checkYear + " is not a Leap Year.")
// }


function isLeap(year) {

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap Year!";
            } else {
                return "Not Leap Year.";
            }

        } else {
            return "Leap Year.";
        }

    } else {
        return "Not Leap Year.";
    }
}


isLeap(2016);
