const mongoose = require ('mongoose');

//mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser:true});

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true,"Please add a name"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
 },
  review:String
});

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const Fruit = mongoose.model("Fruit",fruitSchema);
const Person = mongoose.model("Person",personSchema);

const fruit = new Fruit ({
  rating: 10,
  review:"Peaches are so yummy!"
});

const pineapple = new Fruit({
  name: "Pineapple",
  score: 9,
  review: "Great fruit."
});

const pear = new Fruit({
  name: "Pear",
  score: 7.5,
  review:"Makes you poo!"
});

//pear.save();


const person = new Person ({
  name: "John",
  age: 37,
  favoriteFruit: pear
});



// const kiwi = new Fruit({
//   name: "Kiwi",
//   score: 10,
//   review: "The best fruit!"
// });
//
// const orange = new Fruit({
//   name: "Orange",
//   score: 4,
//   review: "Too sour for me"
// });
//
// const banana = new Fruit({
//   name: "Banana",
//   score: 3,
//   review: "Weird texture"
// });

//fruit.save();

// Fruit.insertMany([kiwi,orange,banana],function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to fruitsDB");
//   };
// });

//person.save();


Fruit.find(function(err,fruits){
  if (err) {
    console.log(err);
  } else {
    // console.log(fruits);

    mongoose.connection.close();
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  };
});

// Fruit.updateOne({_id:"5f43ecb33fa5f50d9739b0df"},{name: "Peach"},function(err){
//   if (err) {
//     console.log(err);
//   } else {
//      console.log("Successfully updated the document.");
//    }
// });

// Fruit.deleteOne({_id:"5f43ecb33fa5f50d9739b0df"},function(err){
//   if (err) {
//     console.log(err);
//   } else {
//      console.log("Successfully deleted the document.");
//    }
// });

// Person.deleteMany({name:"John"},function(err){
//   if (err) {
//       console.log(err);
//     } else {
//        console.log("Successfully deleted all documents.");
//      };
//   });
