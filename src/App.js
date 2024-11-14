import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  
  const [expenses, setExpenses] = useState([
    {id: "1", date: new Date(2024, 2, 12),title: "Pen", amount: "12", location: "Bangalore" },
    {id: "2", date: new Date(2024, 1, 3),title: "Lounge", amount: "10", location: "Delhi" },
    {id: "3", date: new Date(2024, 5, 8),title: "Chips", amount: "6", location: "Hyderabad" },
    {id: "4", date: new Date(2024, 3, 30),title: "Popcorn", amount: "40", location: "Mumbai" }
  ]);

  const addExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;