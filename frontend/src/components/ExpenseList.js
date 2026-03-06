import { deleteExpense } from "../services/api";

function ExpenseList({ expenses, refresh }) {

  const remove = async (id) => {
    await deleteExpense(id);
    refresh();
  };

  return (
    <table>

      <thead>
        <tr>
          <th>Title</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Date</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>

        {expenses.map(e => (
          <tr key={e.id}>
            <td>{e.title}</td>
            <td>₹ {e.amount}</td>
            <td>{e.category}</td>
            <td>{e.date}</td>
            <td>
              <button onClick={() => remove(e.id)}>Delete</button>
            </td>
          </tr>
        ))}

      </tbody>

    </table>
  );
}

export default ExpenseList;