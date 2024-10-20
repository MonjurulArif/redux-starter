import store from "./store";

console.log('store:', store);

const unsubscribe =  store.subscribe(() => {
  console.log("Store Changed!", store.getState());
})

store.dispatch({
  type: "bugAdded",
  payload: {
    description: "Bug1"
  }
});

unsubscribe();

store.dispatch({
  type: "bugRemoved",
  payload: {
    id: 1
  }
});

console.log('store.getState():', store.getState());
