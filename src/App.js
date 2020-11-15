import './App.css';
import React from "react";
import NavBar from "./components/Navigation/NavBar";
import MemoryGame from "./components/Memory Game/MemoryGame";
import GameContextProvider from "./context/GameContext";

function App() {
  return (
    <div className="App">
      <NavBar />
      <GameContextProvider>
          <MemoryGame />
      </GameContextProvider>
    </div>
  );
}

export default App;
