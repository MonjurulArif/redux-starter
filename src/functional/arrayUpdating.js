
const numbers = [1, 2, 3];

const added = [...numbers, 4];
const added1 = [4, ...numbers];
console.log("Added: ", added);
console.log("Added1: ", added1);
//Output
// Added:  (4) [1, 2, 3, 4]
// Added1:  (4) [4, 1, 2, 3]

// Adding, slice returns a new array
const index = numbers.indexOf(2);
const added2 = [
    ...numbers.slice(0, index),
    4,
    ...numbers.slice(index)
];
console.log("Added2: ",added2);
//Output
// Added2:  (4) [1, 4, 2, 3]

// Removing
const removed = numbers.filter(n =>  n!==2);
console.log("Removed: ",removed);
//Output:
// Removed:  (2) [1, 3]

// Updating
const updated = numbers.map(n =>  n===2 ? 20 : n);
console.log("Updated:", updated);
//Output:
// Updated: (3) [1, 20, 3]


