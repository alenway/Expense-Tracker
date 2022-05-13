import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";

const DUMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 5, 24),
  },
  {
    id: "e2",
    title: "Health Insurance",
    amount: 399.07,
    date: new Date(2022, 3, 12),
  },
  {
    id: "e3",
    title: "Life Insurance",
    amount: 589.99,
    date: new Date(2022, 7, 5),
  },
  {
    id: "e4",
    title: "House Insurance",
    amount: 956.22,
    date: new Date(2022, 9, 2),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
