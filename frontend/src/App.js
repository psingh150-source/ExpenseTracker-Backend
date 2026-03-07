import { useEffect, useState } from "react";
import { getExpenses, getTotalExpense, getCategoryTotal } from "./services/api";

import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import Dashboard from "./components/Dashboard";

function App() {

  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);
  const [categoryTotals, setCategoryTotals] = useState({});

  const loadData = async () => {
    const data = await getExpenses();
    setExpenses(data);

    const totalData = await getTotalExpense();
    setTotal(totalData);




      const categoryData = await getCategoryTotal();
      console.log("Fetched categories:", categoryData);
       setCategoryTotals({...categoryData});
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="container">

      <h1>Expense Tracker</h1>

      <Dashboard total1={total} categoryTotals1={categoryTotals}/>


      <AddExpense refresh={loadData} />

      <ExpenseList expenses={expenses} refresh={loadData} />

    </div>
  );
}

export default App;