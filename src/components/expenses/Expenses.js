import React from 'react'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {

  return (
    <Card className="expenses">
      {props.expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          id={index}
          expenseTitle={expense.title}
          expenseAmount={expense.amount}
          expenseDay={expense.day}
          expenseMonth={expense.month}
          expenseYear={expense.year}
        />
      ))}
    </Card>
  );
}

export default Expenses