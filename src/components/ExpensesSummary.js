import React from 'react'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'
const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount > 1 ? 'expenses' : 'expense'
    return (
        <div>
            <h1> Viewing {expenseCount} {expenseWord} totalling {expensesTotal} ₪ </h1>
        </div>
    )
}


const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    return{
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)  
    }
}
export default connect(mapStateToProps)(ExpensesSummary)