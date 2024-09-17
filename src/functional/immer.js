import { produce } from "immer";

// Not Immer
let book1 = { title: "Harry Potter" };

function publish1(book1){
    book1.isPublished = true;
}

publish1(book1);
console.log("Book1: ", book1);
//Output:
// Book1:  {title: 'Harry Potter', isPublished: true}


// Immer
let book2 = { title: "Harry Potter" };

// produce( initial state, function that takes argument and return something)
// produce( initial state, object => return something)
function publish2(book2){
    return produce(book2, draftBook => {
        draftBook.isPublished = true;
        // Proxy copy of book2 to draftBook then apply changes to draftBook
    });
}

let updated =  publish2(book2);

console.log("Book2: ",book2);
//Ouput:
// Book2:  {title: 'Harry Potter'}
console.log("Updated: ",updated);
//Ouput:
// Updated:  {title: 'Harry Potter', isPublished: true}
