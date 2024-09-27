import "./ExpenseItem.css"

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

export default function ExpenseItem({ date, title, amount, location }) {

    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const day = date.getDate();
    
    return (
        <div className="expense-item">
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div className="expense-item__location">{location}</div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
        </div>
    );
}