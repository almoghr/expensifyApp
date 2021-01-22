import React from "react";
import ExpenseList from "./ExpenseList";
import ExpnseListFilters from "./ExpenseListFilters";
const ExpenseDashboardPage = () => {
  return (
    <div>
      <ExpnseListFilters />
      <ExpenseList />
    </div>
  );
};

export default ExpenseDashboardPage;
