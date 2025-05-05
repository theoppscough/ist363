import { useState } from "react";
import About from './About'
// ./ means same folder as the App.jsx file
function Home () {
  return (
      <div>
          <h1>Home Page</h1>
      </div>
  );
}
//conditional rendering aka navigation SPAs
function App () {
  const [page, setPage] = useState('home');
  return (
    <>
    <nav class="text-danger"> 
      <a onClick={() => setPage('home')} class="m-2 text-danger bg-warning">Home</a>
      <a onClick={() => setPage('about')} class="m-2 text-danger bg-warning">About</a>
    </nav>
     {page === 'home' && <Home />}
     {page === 'about' && <About />}
    </>
  );
}

export default App;