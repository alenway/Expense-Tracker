import Expenses from "./components/Expenses";
import "./App.css";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 5, 24),
    },
    {
      id: "e1",
      title: "Health Insurance",
      amount: 399.07,
      date: new Date(2022, 3, 12),
    },
    {
      id: "e1",
      title: "Life Insurance",
      amount: 589.99,
      date: new Date(2022, 7, 5),
    },
    {
      id: "e1",
      title: "House Insurance",
      amount: 956.22,
      date: new Date(2022, 9, 2),
    },
  ];
  return (
    <div>
      <h2>hello world</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
