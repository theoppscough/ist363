import React, { useState } from 'react';

const Log = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    // Placeholder for FatSecret API logic
    setResults([{ name: 'Chicken Breast', calories: 165 }]);
  };

  return (
    <div className="page">
      <h2>Log Food</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for food"
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {results.map((item, index) => (
          <li key={index}>{item.name} - {item.calories} cal</li>
        ))}
      </ul>
    </div>
  );
};

export default Log;