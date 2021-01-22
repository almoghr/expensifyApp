import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses"
import { setTextFilter } from "./actions/filters"
import getVisibleExpenses from "./selectors/expenses"
import "./styles/styles.scss";

const store = configureStore();
store.dispatch(addExpense({ description: 'water bill', amount: 200 }));
store.dispatch(addExpense({ description: 'gas bill', amount: 150, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'rent bill', amount: 3600 }));
store.dispatch(addExpense({ description: 'mezonot', amount: 3100 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  // <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  // </React.StrictMode>
);

ReactDOM.render(jsx, document.getElementById("root"));
