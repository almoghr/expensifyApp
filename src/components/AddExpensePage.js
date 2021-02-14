import React from "react";
import { connect } from 'react-redux';
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";

const AddExpensePage = (props) => {
  return (
    <div>
      <ExpenseForm 
        onSubmit={(expense) => {
           props.dispatch(addExpense(expense)); 
           props.history.push('/')
        }}
      />
    </div>
  );
};

const ConnectedAddExpensePage = connect()(AddExpensePage)
export default ConnectedAddExpensePage;
