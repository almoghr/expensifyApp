import { createStore, combineReducers } from "redux";
import uuid from "uuid";

const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});

const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});

const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
});
const sortByDate = () => ({
  type: "SORT_BY_DATE",
});
const setStartDate = (startDate = undefined) => ({
  type: "SET_START_DATE",
  startDate,
});
const setEndDate = (endDate = undefined) => ({
  type: "SET_START_DATE",
  endDate,
});

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

const filtersReducerDefaultState = {
  text: "",
  sortBy: "Date",
  startDate: undefined,
  endDate: undefined,
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date",
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount",
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate,
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
        if (sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    });
};
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const rentExpense = store.dispatch(
  addExpense({ description: "Rent", amount: 100, createdAt: 1000 })
);
const coffeeExpense = store.dispatch(
  addExpense({ description: "Coffee", amount: 300, createdAt: -1000 })
);
const removeExpense = store.dispatch(
  removeExpense({ id: coffeeExpense.expense.id })
);

const changingRentExpense = store.dispatch(
  editExpense(rentExpense.expense.id, { amount: 500 })
);

const changeFilterToDynamicString = store.dispatch(setTextFilter("Rent"));
const changeFilterToEmptyString = store.dispatch(setTextFilter());

const sortingByAmount = store.dispatch(sortByAmount());
const sortingByDate = store.dispatch(sortByDate());

const startDate = store.dispatch(setStartDate(125));
store.dispatch(setStartDa7te()); // will produce undefined
const endDate = store.dispatch(setEndDate(1250));
const demoState = {
  expenses: [
    {
      id: "dhsajkdhsajk",
      description: "januarty rent",
      note: "this was the final payment for that address",
      amount: 54500,
      created: 0,
    },
  ],
  filters: {
    text: "rent",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  },
};
