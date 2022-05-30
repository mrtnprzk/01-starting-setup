import React, {useState} from 'react'
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {

  const [option, setOption] = useState("2022");
  
  function onChangeFilter(selectedYear) {
    setOption(selectedYear);  
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear() === Number(option);
  });

  return (
    <Card className="expenses">
      <ExpenseFilter selectedYear={option} onChangeFilter={onChangeFilter} />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList filteredExpenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses