import React from 'react';

const Home = () => (
  <div className="page home-page">
    <div className="home-background">
      <div className="home-content">
        <h1>Welcome to FoodTracker</h1>
        <p className="tagline">Track your meals and progress over time using the FatSecret API.</p>
        <div className="cta-section">
          <a href="/log" className="cta-button">Start Logging</a>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
