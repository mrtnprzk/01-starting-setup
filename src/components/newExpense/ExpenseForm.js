import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

  const [expense, setExpense] = useState(
    {
      title: "",
      amount: "",
      date: new Date(""),
    },
  );

  function handleChange(e){
    
    const {name, value} = e.target
   
    setExpense((prevState) => {
      if(name !== "date"){
        return {
          ...prevState,
          [name]: value,
        };
      } else {
        return {
          ...prevState,
          [name]: new Date(value),
        };
      }
    });
  }

  function handleSubmit(e){
    e.preventDefault();

    props.addItem(expense);

    setExpense({
      title: "",
      amount: "",
      date: new Date(""),
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={expense.title}
            onChange={handleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            min="0.01"
            step="0.01"
            value={expense.amount}
            onChange={handleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="date"
            min="2019-01-01"
            max="2022-12-31"
            value={expense.date}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button
          type="submit"
        >
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm