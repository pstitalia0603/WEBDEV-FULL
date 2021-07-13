// //jshint esversion:6
// const fs = require('fs');
//
// fs.copyFileSync("file1.txt","file2.txt");

const superheroes = require('superheroes');

superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]

var mySuperHeroName = superheroes.random();
//=> 'Spider-Ham'

console.log(mySuperHeroName);



const supervillains = require('supervillains');

supervillains.all;
//=> ['Abattoir', 'Able Crown', …]

var mySuperVillains = supervillains.random();
//=> 'Mud Pack'

console.log(mySuperVillains);
