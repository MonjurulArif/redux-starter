const person = { name: "John" };
const updated = Object.assign({}, person, { name: "Bob", age: 30});
console.log("Person",person);
console.log("Updated",updated);
//Output:
/*
  Person: {
    "name": "John"
  },
Updated: {
  "name": "Bob",
  "age": 30
}
*/

const person1 = {name: "John"};
const updated1 =  {...person1, name: "Bob", age: 30};
console.log("Person1",person1);
console.log("Updated1",updated1);
//Output:
/*
  Person1: {
    "name": "John"
  },
Updated1: {
  "name": "Bob",
  "age": 30
}
*/

const person2 = {
  name: "John",
  address: {
      country: "Bangladesh",
      city: "Dhaka"
  }
};

const updated2 = { ...person2, name: "Bob" };
updated2.address.city = "Rajshahi";
console.log("Person2",person2);
console.log("Updated2",updated2);
//Output:
/*
Person2: {
  "name": "John",
  "address": {
      "country": "Bangladesh",
      "city": "Rajshahi"
  }
}
*/
/*
Updated2: {
  "name": "Bob",
  "address": {
      "country": "Bangladesh",
      "city": "Rajshahi"
  }
}
*/

const person3 = {
  name: "John",
  address: {
      country: "Bangladesh",
      city: "Dhaka"
  }
};

const updated3 =  {
  ...person3,
  address: {
      ...person3.address,
      city: "Chattagram"
  },
  name: "Bob"
};
console.log("Person3:",person3);
console.log("Updated3",updated3);
//Output:
/*
Person3: {
  "name": "John",
  "address": {
      "country": "Bangladesh",
      "city": "Dhaka"
  }
}
*/
/*
Updated3: {
  "name": "Bob",
  "address": {
      "country": "Bangladesh",
      "city": "Chattagram"
  }
}
*/



