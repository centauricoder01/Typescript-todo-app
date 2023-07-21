import React from 'react';
import './App.css';
import Search from './Components/Search';
import Tasks from './Components/Tasks';

function App() {
  return (
    <>
      <center>
        <h1 style={{ marginTop: "1rem" }}>Welcome to Raj Todos</h1>
      </center>
      <Search />
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
        <Tasks />
      </div>
    </>
  );
}

export default App;
