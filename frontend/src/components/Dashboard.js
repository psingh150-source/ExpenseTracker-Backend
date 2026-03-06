import { useEffect, useState } from "react";
import { getTotalExpense, getMonthlyTotal, getCategoryTotal } from "../services/api";

function Dashboard() {

  const [total, setTotal] = useState(0);
  const [monthly, setMonthly] = useState(0);
  const [categoryTotals, setCategoryTotals] = useState({});

  useEffect(() => {

    getTotalExpense().then(setTotal);
    getMonthlyTotal().then(setMonthly);
    getCategoryTotal().then(setCategoryTotals);

  }, []);

  return (
    <div className="dashboard">

      <div className="card">
        <h3>Total Expense</h3>
        <p>₹ {total}</p>
      </div>


      <div className="card">
        <h3>Category Totals</h3>
        {Object.keys(categoryTotals).map(cat => (
          <p key={cat}>{cat} : ₹ {categoryTotals[cat]}</p>
        ))}
      </div>

    </div>
  );
}

export default Dashboard;