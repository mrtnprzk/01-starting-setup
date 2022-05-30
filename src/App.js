import React, { useState } from "react";
import Header from "./components/composition/Header";
import Footer from "./components/composition/Footer";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([]);

  function addItem(expense) {
    setExpenses((prevItem) => [...prevItem, expense]);
  }

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
