import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import "./NewExpense.css";

const NewExpense = (props) => {

  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className="new-expense">
      {isHidden ? (
        <button onClick={() => setIsHidden(false)}>Add New Expense</button>
      ) : (
        <ExpenseForm addItem={props.addItem} setIsHidden={setIsHidden} />
      )}
    </div>
  );
}

export default NewExpense