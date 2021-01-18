import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT_COUNT",
  incrementBy,
})
const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT_COUNT",
  decrementBy
})
const resetCount = () => ({
  type: "RESET_COUNT",
})
const resetCount = ({ count }) => ({
  type: "SET_COUNT",
  count
})

const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT_COUNT":
      return {
        count: state.count + incrementBy,
      };

    case "DECREMENT_COUNT":
      return {
        count: state.count - decrementBy,
      };
    case "SET_COUNT":
      return {
          count: action.count
      };

    case "RESET_COUNT":
      return {
        count: 0,
      };
    default:
      return state;
  }
} 
const store = createStore(counterReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5}));
store.dispatch(incrementCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(resetCount());
store.dispatch(setCount({ count: 101 }));
