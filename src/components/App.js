// App.js
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <div className={`App ${mode}`}>
      <h1>My App</h1>
      <button onClick={toggleMode}>Toggle Mode</button>
    </div>
  );
}

export default App;