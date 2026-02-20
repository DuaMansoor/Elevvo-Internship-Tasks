import React from "react";

function Filters({ category, setCategory, search, setSearch }) {
  const categories = ["All", "Tech", "Travel", "Food"];

  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={category === cat ? "active" : ""}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Filters;
