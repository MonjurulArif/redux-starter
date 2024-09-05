function sayHello() {
  return "Hello World";
}

let fn = sayHello;
fn();
sayHello();

function greet(fnMessage) {
  console.log("From greet: ", fnMessage());
}

greet(sayHello); 


function sayHello() {
  return function () {
    return "Hello World";
  }
}

 