import { addExpense } from "../services/api";
import { useState } from "react";

function AddExpense({ refresh }) {

  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    category: "",
    date: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addExpense(expense);

    refresh();   // reload data
  };
  const today = new Date().toISOString().split("T")[0];


  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        onChange={(e) =>
          setExpense({ ...expense, title: e.target.value })
        }
      />

      <input
        placeholder="Amount"
        type="number"
        onChange={(e) =>
          setExpense({ ...expense, amount: e.target.value })
        }
      />

      <input
        placeholder="Category"
        onChange={(e) =>
          setExpense({ ...expense, category: e.target.value })
        }
      />

<input
  type="date"
  max={today}              // cannot select future date
  onChange={(e) => setExpense({ ...expense, date: e.target.value })}
/>


      <button type="submit">Add Expense</button>
    </form>
  );
}

export default AddExpense;