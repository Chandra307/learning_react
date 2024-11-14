import React from "react";
import "./ExpensesFilter.css";

export default function ExpenesesFilter(props) {
    const selectYearHandler = (event) => {
        props.onYearChange(event.target.value);
    };
    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label htmlFor="year">Filter by Year</label>
                <select id="year" onChange={selectYearHandler} value={props.selected}>
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                </select>
            </div>
        </div>
    );
};