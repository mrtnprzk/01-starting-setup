import React from 'react'
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  return (
    <div className="expense-date">
      <div className="expense-date__month">{props.expenseMonth}</div>
      <div className="expense-date__year">{props.expenseYear}</div>
      <div className="expense-date__day">{props.expenseDay}</div>
    </div>
  );
}

export default ExpenseDate