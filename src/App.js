import ExpenseItem from "./components/ExpenseItem";

function App() {
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

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
      <ExpenseItem
        title={expenses[4].title}
        amount={expenses[4].amount}
        date={expenses[4].date}
      />
    </div>
  );
}

export default App;
