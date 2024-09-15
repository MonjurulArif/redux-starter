import { Map } from "immutable";

// JS
let book1 = {title: "Harry Potter" };

function publish(book1){
     book1.isPublished= true;
}

publish(book1);
console.log("Book1: ",book1);
//Output:
// Book1:  {title: 'Harry Potter', isPublished: true}

// Immutable JS 
let book2 = Map({ title: "Harry Potter" });
console.log("Book2: ",book2);
//Output:
/*
Book2:  Map {size: 1, 
            _root: ArrayMapNode, 
            __ownerID: undefined, 
            __hash: undefined, 
            __altered: false}
*/

console.log("Book2 Titile: ",book2.get("title"));
//Output
// Book2 Titile:  Harry Potter

//Output as plain JavaScript object
console.log("Book2 Titile: ",book2.toJS());
// Book2 Titile:  {title: 'Harry Potter'}


function publish2(book2){
    return book2.set("isPublished", true);
}

book2 = publish2(book2);

console.log("Book2: ",book2.toJS());
//Output
// Book2:  {title: 'Harry Potter', isPublished: true}
