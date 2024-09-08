// Higher Order Function takes "function" as a arguments and returns "function"
function greet(fn){
  console.log("From sayHello(): ", fn());
}

greet(sayHello);
//Output:
/*
From sayHello():  ƒ (){
                      return "Hello World";
                  }
  */

greet(sayHello());
//Output:
// From sayHello():  Hello World


function sayHello(){
  return function(){
      return "Hello World";
  }
}

let numbers = [1, 2, 3];
const Numbers = numbers.map(number => number * 2);
console.log("Numbers: ", Numbers);
//Output:
// Numbers:  (3) [2, 4, 6]

setTimeout(() => console.log("Hello"), 1000);

//Output: 
// Hello 
//after 1 second
