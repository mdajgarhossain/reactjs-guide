import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "Course Purchase",
      amount: 13.45,
      date: new Date(2021, 3, 15),
    },
    {
      id: "e3",
      title: "App Hosting",
      amount: 50.34,
      date: new Date(2021, 2, 18),
    },
    {
      id: "e4",
      title: "Marketing",
      amount: 215,
      date: new Date(2021, 3, 24),
    },
    {
      id: "e5",
      title: "Travelling",
      amount: 150.2,
      date: new Date(2021, 5, 17),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
