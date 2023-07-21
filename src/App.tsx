import React, { useEffect, useState } from 'react';
import './App.css';
import Search from './Components/Search';
import Tasks from './Components/Tasks';

function App() {

  type ObjectType = {
    id: number;
    todo: string;
  };

  const [data, setData] = useState<ObjectType[]>([]);

  useEffect(() => {
    // Step 3: Retrieve existing data from Local Storage when the component mounts
    const storedData = localStorage.getItem('myTodo');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  return (
    <>
      <center>
        <h1 style={{ marginTop: "1rem" }}>Welcome to Raj Todos</h1>
      </center>
      <Search />
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
        {
          data ? data.map((e) => (
            <Tasks id={e.id} todo={e.todo} />
          )) : null
        }
      </div>
    </>
  );
}

export default App;
