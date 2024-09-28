import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";



export default function ExpenseItem({ date, title, amount, location }) {
    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__location">{location}</div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
        </Card>
    );
}