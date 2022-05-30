import React, {useState} from 'react'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {

  const [option, setOption] = useState("all");
  
  function onChangeFilter(selectedYear) {
    setOption(selectedYear);
  }

  return (
    <Card className="expenses">
      <ExpenseFilter selectedYear={option} onChangeFilter={onChangeFilter} />
      {props.expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          id={index}
          expenseTitle={expense.title}
          expenseAmount={expense.amount}
          expenseDate={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses