import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import db from '../firebase/firebase';

const Log = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const dummyResults = [
      { name: 'Chicken Breast', calories: 165 },
      { name: 'Banana', calories: 105 },
      { name: 'Almonds (10)', calories: 70 }
    ];
    setResults(dummyResults);
  };

  const handleLog = async (item) => {
    try {
      await addDoc(collection(db, 'foodLogs'), {
        name: item.name,
        calories: item.calories,
        timestamp: new Date()
      });
      alert('✅ Food logged!');
    } catch (err) {
      console.error('Error logging food:', err);
    }
  };

  return (
    <div className="page log-page">
  <h2>Log Food</h2>

  <div className="search-bar">
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search for food"
    />
    <button onClick={handleSearch}>Search</button>
  </div>

  <ul className="food-list">
    {results.map((item, index) => (
      <li key={index} className="food-item">
        <span><strong>{item.name}</strong> - {item.calories} cal</span>
        <button onClick={() => handleLog(item)}>Log</button>
      </li>
    ))}
  </ul>
</div>

  );
};

export default Log;
