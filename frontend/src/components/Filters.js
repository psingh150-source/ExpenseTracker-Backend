import { useState } from "react";

const BASE_URL = "http://localhost:8080/api/users";

function Filters({ setExpenses }) {

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const searchByTitle = async () => {
    const res = await fetch(`${BASE_URL}/search?title=${title}`);
    const data = await res.json();
    setExpenses(data);
  };

  const filterByCategory = async () => {
    const res = await fetch(`${BASE_URL}/category/${category}`);
    const data = await res.json();
    setExpenses(data);
  };

  const filterByDate = async () => {
    const res = await fetch(`${BASE_URL}/date?start=${start}&end=${end}`);
    const data = await res.json();
    setExpenses(data);
  };

  const resetFilters = async () => {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    setExpenses(data);
  };

  return (
    <div className="filters">

      <h3>Filters</h3>

      <div>

        <input
          placeholder="Search by title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button onClick={searchByTitle}>Search</button>

      </div>

      <div>

        <input
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button onClick={filterByCategory}>Filter Category</button>

      </div>

      <div>

        <input
          type="date"
          onChange={(e) => setStart(e.target.value)}
        />

        <input
          type="date"
          onChange={(e) => setEnd(e.target.value)}
        />

        <button onClick={filterByDate}>Filter Date</button>

      </div>

      <button onClick={resetFilters}>Reset</button>

    </div>
  );
}

export default Filters;