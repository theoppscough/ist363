import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import db from '../firebase/firebase';

const Log = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await fetch(`https://fatsecret-proxy.onrender.com/search?query=${query}`);
      const data = await res.json();
  
      const foods = data.foods.food.map(food => ({
        name: food.food_name,
        calories: parseInt(food.food_description.match(/\d+/)?.[0] || 0)
      }));
  
      setResults(foods);
    } catch (err) {
      console.error('Error fetching food:', err);
    }
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
          <li key={index}>
            {item.name} - {item.calories} cal
            <button onClick={() => handleLog(item)}>Log</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Log;
