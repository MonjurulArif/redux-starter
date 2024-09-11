import { compose, pipe } from "lodash/fp";

// "Currying" is a technique that allows to take a function that has N arguments and
//  convert it to a function that has a single argument

let input = "    JavaScript    ";
let output = "<div>" + input.trim() + "</div>";

const trim = str => str.trim();
const wrapInDiv = str => `<${div}>${str}</${div}>`;
const wrap = type => `<${type}>${str}</${type}>`;
const toLowerCase = str => str.toLowerCase();

const transform = pipe(trim, toLowerCase, wrap("div"));
console.log(transform(input));


// first add1 takes 'a' and returns one funtion that takes input 'b'
function add1(a){
  return function(b){
      return a + b;
  }; 
}

add1(1)(5);  // add(1, 5)
console.log("First:",add1(1)(5))
//Output:
// First: 6

// first add2 takes 'a' and returns one funtion that takes input 'b'
const add2 = a => b => a + b;  // (a, b) => a + b;

add2(2)(5);  // add(1, 5)
console.log("Second:",add1(2)(5))
//Output:
// Second: 7

//  ****  'add1' and 'add2' are same function  ****







