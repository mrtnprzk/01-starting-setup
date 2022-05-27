import React from 'react'
import "./ExpenseAmount.css";

const ExpenseAmount = (props) => {
  return <div className="expense-item__price">${props.expenseAmount}</div>;
}

export default ExpenseAmount