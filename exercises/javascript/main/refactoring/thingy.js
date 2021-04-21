// const datatypeConverter = require('../util-datatype-converter');

let numberInUse = 0, numberType = 0;
let arrayLength = 5;
console.log(arrayLength);

function makeTheString() {
  let string = "";
  for (; numberInUse < 100; numberInUse++) string += fizzBuzzer(numberInUse) + " ";
  console.log( string.substring(0, string.length - 1));
  return string.substring(0, string.length - 1);
}

function buzz() {
  arrayLength = 5;
  return "Buzz";
}

function fizz() {
  numberType = 0;
  return 'Fizz';
  
}

function fizzBuzzer(numberInUse) {

  numberType++;
  arrayLength--;
  const isAMultipleOfThree = numberType == 0b11;
  const isAMultipleOfFive = arrayLength == 0;
  let s = isAMultipleOfThree || isAMultipleOfFive ? "" : numberInUse + 1;
  if (isAMultipleOfThree) s += fizz();
  if (isAMultipleOfFive) s += buzz();
  return s;
}

module.exports.makeTheString = makeTheString;