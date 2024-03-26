import "./ExpenseItem.css"

export default function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>26 March 2024</div>
            <div className="expense-item__location">
                Challapalli
            </div>
            <div className="expense-item__description">
                <h2>Book</h2>
                <div className="expense-item__price">$20</div>
            </div>
        </div>
    );
}