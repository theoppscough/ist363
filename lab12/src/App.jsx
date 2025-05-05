import React, { useState } from "react";
import pioneers from "./pioneers";
import Home from "./Home"
import Pioneer from "./Pioneer";

function App() {
  
  const handleSelect = (id) => {
    const updated = pioneers.map((p) =>
      p.id === id ? { ...p, viewed: true } : p
    );
    setPioneers(updated);
    const pioneer = updated.find((p) => p.id === id);
    setSelectedPioneers(pioneer);
  };

  const handleReturn = () => {
    setSelectedPioneer(null);
  };

  return (
    <div className="container mt-4">
      {selectedPioneer ? (
        <Pioneer pioneer={selectedPioneer} onReturn={handleReturn} />
      ) : (
        <Home pioneers={pioneers} onSelect={handleSelect} />
      )}
    </div>
  );
}

export default App;