import React, { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState<string[]>([]);
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "flex" }}>
          <div style={{ margin: "30px" }}>
            Main List (Today)
            <ul>
              {list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div style={{ margin: "30px" }}>
            Job Search
            <ul>
              <li
                onClick={(e) => {
                  const text = (e.target as HTMLElement).textContent || "";
                  setList((p) => [...p, text]);
                }}
              >
                item 1
              </li>
              <li>item 2</li>
              <li>item 3</li>
            </ul>
          </div>
          <div style={{ margin: "30px" }}>
            Programming
            <ul>
              <li>item 4</li>
              <li>item 5</li>
              <li>item 6</li>
            </ul>
          </div>
          <div style={{ margin: "30px" }}>
            Personal
            <ul>
              <li>item 7</li>
              <li>item 8</li>
              <li>item 9</li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
