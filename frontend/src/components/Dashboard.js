function Dashboard({ total1, categoryTotals1 }) {

  return (
    <div className="dashboard">

      <div className="card">
        <h3>Total Expense</h3>
        <p>₹ {total1}</p>
      </div>

      <div className="card">
        <h3>Category Totals</h3>

        {Object.keys(categoryTotals1).length === 0 ? (
          <p>No categories</p>
        ) : (
          Object.entries(categoryTotals1).map(([category, amount]) => (
            <p key={category}>
              {category} : ₹ {amount}
            </p>
          ))
        )}

      </div>

    </div>
  );
}

export default Dashboard;