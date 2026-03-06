import { useEffect, useState } from "react";
import { getTotalExpense, getMonthlyTotal, getCategoryTotal } from "../services/api";

function Dashboard({total1, categoryTotals1}) {

  const [total, setTotal] = useState(0);
  const [categoryTotals, setCategoryTotals] = useState({});

  useEffect(() => {

    getTotalExpense().then(setTotal);
    getCategoryTotal().then(setCategoryTotals);

  }, []);

  return (
    <div className="dashboard">

      <div className="card">
        <h3>Total Expense</h3>
        <p>₹ {total1}</p>
      </div>


      <div className="card">
        <h3>Category Totals</h3>
        {Object.keys(categoryTotals).map(cat => (
          <p key={cat}>{cat} : ₹ {categoryTotals1[cat]}</p>
        ))}
      </div>

    </div>
  );
}

export default Dashboard;