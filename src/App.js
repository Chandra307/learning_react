import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {id: "1", date: new Date(2024, 2, 12),title: "Pen", amount: "12", location: "Bangalore" },
    {id: "2", date: new Date(2024, 1, 3),title: "Lounge", amount: "10", location: "Delhi" },
    {id: "3", date: new Date(2024, 5, 8),title: "Chips", amount: "6", location: "Hyderabad" },
    {id: "4", date: new Date(2024, 3, 30),title: "Popcorn", amount: "40", location: "Mumbai" }
  ];
  return (
    <div>
      <h1>Getting started with React.</h1>
      {expenses.map((expense, index) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            amount={expense.amount}
            location={expense.location}
            title={expense.title} >
          </ExpenseItem>
        );
      })}
    </div>
  );
}

export default App;