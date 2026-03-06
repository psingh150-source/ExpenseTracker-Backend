const BASE_URL = "http://localhost:8080/api/users";

export const getExpenses = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const addExpense = async (expense) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(expense),
  });
  return res.json();
};

export const deleteExpense = async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
};

export const getTotalExpense = async () => {
  const res = await fetch(`${BASE_URL}/total-expense`);
  return res.json();
};

export const getCategoryTotal = async () => {
  const res = await fetch(`${BASE_URL}/category-total`);
  return res.json();
};