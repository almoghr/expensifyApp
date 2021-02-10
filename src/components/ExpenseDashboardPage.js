import React from "react";
import ExpenseList from "./ExpenseList";
import ExpnseListFilters from "./ExpenseListFilters";
import ExpensesSummary from "./ExpensesSummary"
const ExpenseDashboardPage = () => {
  return (
    <div>
      <ExpensesSummary />
      <ExpnseListFilters />
      <ExpenseList />
    </div>
  );
};

export default ExpenseDashboardPage;
