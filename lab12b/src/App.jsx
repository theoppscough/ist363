import React, { useState } from "react";
import pioneers from "./pioneers";
import Home from "./Home";
import Pioneer from "./Pioneer";

function App() {
  const [pioneersList, setPioneers] = useState(pioneers);
  const [selectedPioneer, setSelectedPioneer] = useState(null);

  const handleSelect = (id) => {
    const updated = pioneersList.map((p) =>
      p.id === id ? { ...p, viewed: true } : p
    );
    setPioneers(updated);
    const pioneer = updated.find((p) => p.id === id);
    setSelectedPioneer(pioneer);
  };

  const handleReturn = () => {
    setSelectedPioneer(null);
  };

  return (
    <div className="container mt-4">
      {selectedPioneer ? (
        <Pioneer pioneer={selectedPioneer} onReturn={handleReturn} />
      ) : (
        <Home pioneers={pioneersList} onSelect={handleSelect} />
      )}
    </div>
  );
}

export default App;
