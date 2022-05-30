import React from "react";
import ExpenseAmount from "./ExpenseAmount";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  
  return (
    <Card className="expense-item">
      <ExpenseDate
        expenseDate={props.expenseDate}
      />
      <div className="expense-item__description">
        <h2>{props.expenseTitle}</h2>
        <ExpenseAmount expenseAmount={props.expenseAmount} />
      </div>
    </Card>
  );
};

export default ExpenseItem;
