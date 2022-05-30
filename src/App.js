import React, { useState } from "react";
import Header from "./components/Composition/Header";
import Footer from "./components/Composition/Footer";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([
    {
      title: "1",
      amount: "1",
      date: new Date(2019, 5, 5),
    },
    {
      title: "2",
      amount: "2",
      date: new Date(2020, 5, 5),
    },
    {
      title: "3",
      amount: "3",
      date: new Date(2021, 5, 5),
    },
    {
      title: "4",
      amount: "4",
      date: new Date(2021, 5, 5),
    },
  ]);

  function addItem(expense) {
    setExpenses((prevItem) => {
      return [expense, ...prevItem];
    });
  };

  return (
    <div>
      <Header />
      <NewExpense addItem={addItem} />
      <Expenses expenses={expenses} />
      <Footer />
    </div>
  );
}

export default App;
