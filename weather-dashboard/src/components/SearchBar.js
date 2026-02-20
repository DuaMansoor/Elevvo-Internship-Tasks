import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={() => onSearch(city)}>Search</button>
    </div>
  );
}

export default SearchBar;
