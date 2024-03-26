import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>
      <h1>Getting started with React.</h1>
      <ExpenseItem date="2024, 2, 12" location="Challapalli" title="Pen" amount="12"></ExpenseItem>
      <ExpenseItem date="2024, 1, 3" location="Hyderabad" title="Lounge" amount="10"></ExpenseItem>
      <ExpenseItem date="2024, 5, 8" location="Nellore" title="Chips" amount="6"></ExpenseItem>
      <ExpenseItem date="2023, 3, 30" location="Chennai" title="Popcorn" amount="40"></ExpenseItem>
    </div>
  );
}

export default App;
