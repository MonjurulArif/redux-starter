import * as actions from "./actionTypes";


export const bugAdded = description =>  ({
  type: actions.BUG_ADDED,
    payload: {
      // description: description
      description    // TODO:  if the property and value are same write shorthand syntax
    }
})

export const bugResolved = id => ({
  type: actions.BUG_RESOLVED,
    payload: {
      // id: id
      id     // TODO:  if the property and value are same write shorthand syntax
    }
})


// export function bugAdded(description){
//   return {
//     type: actions.BUG_ADDED,
//     payload: {
//       description: "Bug1"
//     }
//   }
// }