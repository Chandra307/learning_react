import "./ExpenseItem.css"

export default function ExpenseItem({ date, title, amount, location }) {
    return (
        <div className="expense-item">
            <div>{new Date(date).toISOString()}</div>
            <div className="expense-item__location">{location}</div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
        </div>
    );
}