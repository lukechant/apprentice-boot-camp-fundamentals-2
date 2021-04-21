// const datatypeConverter = require('../util-datatype-converter');

let numberInUse = 0, numberType = 0;
let arrayLength = [0, 0, 0, 0, 0].length;
// console.log(arrayLength);

function makeTheString() {
  let string = "";
  for (; numberInUse < 100; numberInUse++) string += fizzBuzzer(numberInUse) + " ";
  console.log( string.substring(0, string.length - 1));
  return string.substring(0, string.length - 1);
}

function buzz() {
  arrayLength = [0, 0, 0, 0, 0].length;
  return "Buzz";
}

function fizz() {
  numberType = 0;// it needs to do this!
  return 'Fizz';
  
}

function fizzBuzzer(numberInUse) {

  numberType++; //1 
  arrayLength--; //4
  const isAMultipleOfThree = numberType == 0b11;
  const isAMultipleOfFive = arrayLength == 0;
  let s = isAMultipleOfThree || isAMultipleOfFive ? "" : numberInUse + 1;
  if (isAMultipleOfThree) s += fizz();
  if (isAMultipleOfFive) s += buzz();
  return s;
}

module.exports.makeTheString = makeTheString;