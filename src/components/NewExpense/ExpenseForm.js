import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm() {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const  dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };
    const formHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        console.log(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };
    return (
        <form onSubmit={formHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={titleChangeHandler} value={enteredTitle} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" onChange={amountChangeHandler} value={enteredAmount} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" min="2023-06-01" max="2024-12-31" onChange={dateChangeHandler} value={enteredDate} />
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
};