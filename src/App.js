import Header from "./components/composition/Header";
import Footer from "./components/composition/Footer";
import Expenses from "./components/expenses/Expenses";

function App() {

  const expenses = [
    {
      title: "Car Insurence",
      amount: 294.67,
      day: new Date(2021, 5, 26).getDate(),
      month: new Date(2021, 5, 26).toLocaleString("en-US", { month: "long" }),
      year: new Date(2021, 5, 26).getFullYear(),
    },
    {
      title: "Wheel Insurence",
      amount: 29.67,
      day: new Date(2021, 5, 26).getDate(),
      month: new Date(2021, 5, 26).toLocaleString("en-US", { month: "long" }),
      year: new Date(2021, 5, 26).getFullYear(),
    },
    {
      title: "Break Insurence",
      amount: 94.67,
      day: new Date(2021, 5, 26).getDate(),
      month: new Date(2021, 5, 26).toLocaleString("en-US", { month: "long" }),
      year: new Date(2021, 5, 26).getFullYear(),
    },
    {
      title: "Car Insurence",
      amount: 294.67,
      day: new Date(2021, 5, 26).getDate(),
      month: new Date(2021, 5, 26).toLocaleString("en-US", { month: "long" }),
      year: new Date(2021, 5, 26).getFullYear(),
    },
  ];

  return (
    <div>
      <Header />
      <Expenses expenses={expenses} />
      <Footer />
    </div>
  );
}

export default App;
