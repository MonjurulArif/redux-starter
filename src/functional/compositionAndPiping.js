import { compose, pipe } from "lodash/fp"; 

let input = "    JavaScript    ";
let output = "<div>" + input.trim() + "</div>";
console.log("Output: ",output);
//Output:
// Output:  <div>JavaScript</div>

const trim = str => str.trim();
const wrapInDiv1 =  str => "<div>" + str + "</div>";
const wrapInDiv2 =  str => `<div>${str}</div>`;
// first "wrap" takes argument 'type' and returns one funtion that takes argument 'str'
const wrap =  type => str => `<${type}>${str}</${type}>`;
const toLowerCase = str => str.toLowerCase();

//same as transform
const result1 = wrapInDiv1(toLowerCase(trim(input)));
const result2 = wrapInDiv2(toLowerCase(trim(input)));

// compose is also a Higher Order Function,  takes function as argument and returns function
// compose operates from right to left -> trim, toLowerCase, wrap
const transform1 = compose(wrapInDiv1, toLowerCase, trim);
const transform2 = compose(wrapInDiv2, toLowerCase, trim);
const transform3 = compose(wrap("div"), toLowerCase, trim );
const transform4 = compose(wrap("span"), toLowerCase, trim );
console.log("transform1: ",transform1(input));
console.log("transform2: ",transform2(input));
console.log("transform3: ",transform3(input));
console.log("transform4: ",transform4(input));
//Output:
// transform1:  <div>javascript</div>
// transform2:  <div>javascript</div>
// transform3:  <div>javascript</div>
// transform4:  <span>javascript</span>

// pipe is also a Higher Order Function,  takes function as argument and returns function
// pipe operates from left to right-> trim, toLowerCase, wrap
const transform5 = pipe(trim, toLowerCase, wrapInDiv1);
const transform6 = pipe(trim, toLowerCase, wrapInDiv2);
const transform7 = pipe(trim, toLowerCase, wrap("div"));
const transform8 = pipe(trim, toLowerCase, wrap("span"));
console.log("transform5: ",transform5(input));
console.log("transform6: ",transform6(input));
console.log("transform7: ",transform7(input));
console.log("transform8: ",transform8(input));
//Output:
// transform5:  <div>javascript</div>
// transform6:  <div>javascript</div>
// transform7:  <div>javascript</div>
// transform8:  <span>javascript</span>



