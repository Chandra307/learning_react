import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenesesFilter from "./ExpensesFilter";

export default function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState("2023");
    const yearChangeHandler = (chosenYear) => {
        setSelectedYear(chosenYear);
    };
    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedYear;
    });

    return (
        <Card className="expenses">
            <ExpenesesFilter 
                onYearChange={yearChangeHandler}
                selected={selectedYear}
            />
            {filteredExpenses.map((expense) => {
                return (
                    <ExpenseItem
                        key={expense.id}
                        date={expense.date}
                        amount={expense.amount}
                        location={expense.location}
                        title={expense.title}
                    />
                )
            })}
        </Card>
    );
}