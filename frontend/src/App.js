import { useEffect, useState } from "react";
import { getExpenses, getTotalExpense, getMonthlyTotal } from "./services/api";

import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import Dashboard from "./components/Dashboard";

function App() {

  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);
  const [monthly, setMonthly] = useState(0);

  const loadData = async () => {
    const data = await getExpenses();
    setExpenses(data);

    const totalData = await getTotalExpense();
    setTotal(totalData);

    const monthlyData = await getMonthlyTotal();
    setMonthly(monthlyData);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="container">

      <h1>Expense Tracker</h1>

      <Dashboard total={total}/>


      <AddExpense refresh={loadData} />

      <ExpenseList expenses={expenses} refresh={loadData} />

    </div>
  );
}

export default App;