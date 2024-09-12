/*---------------Not Pure Function----------------- */
// if we give same argument it will return different result
function myFunction(number){
  return number * Math.random();
}

const newNumber = myFunction(5);
console.log("Not Pure Function:", newNumber);
//Output:
// Not Pure Function: 0.9448442474131591
// Not Pure Function: 3.352563251166613
const minAge1 = 15;
function isEligible1(age1){
  return age1 > minAge1;
}

const eligibleOrNot1 = isEligible1(5);
const eligibleOrNot2 = isEligible1(12);
/*---------------Not Pure Function----------------- */


/*---------------Pure Function----------------- */
/*
We can not use: 1) No Random value
                2) No current Date/Time
                3) No global state( DOM, files, db, etc)
                4) No mutation of parameters
*/
function myFunction2(number){
  return number * 2;
}

const newNumber2 = myFunction2(5);
console.log("Pure Function:", newNumber2);
//Output:
// Pure Function: 10
// Pure Function: 10

function isEligible2(age, nimAge2){
  return age > minAge;
}

const eligibleOrNot3 = isEligible2(8, 10);
const eligibleOrNot4 = isEligible2(7, 4);

/*---------------Pure Function----------------- */