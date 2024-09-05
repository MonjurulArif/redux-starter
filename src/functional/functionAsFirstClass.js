function sayHello(){
  return "Hello World1";
}

let fn = sayHello;
fn();
sayHello();

function greet(fnMessage){
  console.log("From greet: ",fnMessage());
}

greet(sayHello);
//Output:
// From greet:  Hello World1
console.log("First: ",greet(sayHello));
//Output:
// From greet:  Hello World1
// First: undefined

function sayHello2(){
  return function(){
      return "Hello World2";
  }
}

let fn2 = sayHello2();
let message = fn2();
console.log(message);
//Output:
// Hello World2

