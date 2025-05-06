import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase/firebase';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const Progress = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchLogs = async () => {
      const snapshot = await getDocs(collection(db, 'foodLogs'));
      const data = snapshot.docs.map(doc => doc.data());

      // Group and sum calories by date
      const grouped = {};
      data.forEach(item => {
        const date = new Date(item.timestamp.seconds * 1000).toLocaleDateString();
        grouped[date] = (grouped[date] || 0) + item.calories;
      });

      const labels = Object.keys(grouped);
      const calories = Object.values(grouped);

      setChartData({
        labels,
        datasets: [
          {
            label: 'Calories Logged',
            data: calories,
            fill: false,
            borderColor: '#ff6f00',
            tension: 0.3,
            pointRadius: 4
          }
        ]
      });
    };

    fetchLogs();
  }, []);

  return (
    <div className="page progress-page">
      <h2>Progress Tracker</h2>
      {chartData ? (
        <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
          <Line data={chartData} />
        </div>
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
};

export default Progress;
