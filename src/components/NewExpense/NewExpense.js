import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        props.onAddExpense({ ...enteredExpenseData, id: Math.random().toString() });
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
};