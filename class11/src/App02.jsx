import { useState } from "react";

// sets up useState , what variable, what function changes it, and what start value
const Home = () => {

  const [name, setName] = useState('Kevin');

// function  actually making dynamic chnage
  let handleClick = () => {
    setName('Cookie')
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{ name }</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Home;