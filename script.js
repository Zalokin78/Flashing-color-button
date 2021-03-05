"use strict";

//learning process coding..........

/* let r = 15,
  g,
  b;

let rand;
let hexR = r.toString(16);

console.log(hexR);

let randGen = function () {
  rand = Math.floor(Math.random() * 16);
  return rand;
};

console.log(`random number - ${randGen()}`);

let x = [(r = randGen()), (g = randGen()), (b = randGen())];

console.log(x); */

/* let r, g, b;

let rgb = [r, g, b];

let rand;

let randHexGen = function () {
  for (let i = 0; i <= 2; i++) {
    rand = Math.floor(Math.random() * 16);
    rgb[i] = rand.toString(16);
  }
  return rgb;
};
console.log(randHexGen());



let color = `#${rgb[0] + rgb[1] + rgb[2]}`;


document.getElementById("button-colour").style.backgroundColor = color;



console.log("color = " + color);
 */

//proper code below....

//individual colour values
let r, g, b;

//define colour array
let rgb = [r, g, b];

let rand;

//when button is clicked...
document.getElementById("button-colour").addEventListener("click", function () {
  //iterate through each array element
  for (let i = 0; i <= 2; i++) {
    //random number between 0 and 16
    rand = Math.floor(Math.random() * 16);
    //convert each array random value to hexadecimal
    rgb[i] = rand.toString(16);
  }

  //set backgroundColor using string literal with array hex values
  document.getElementById("button-colour").style.backgroundColor = `#${
    rgb[0] + rgb[1] + rgb[2]
  }`;
});
