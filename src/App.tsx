import React, { useState } from "react";
import "./App.css";
import SubList from "./Components/SubList";
import HabitCalendar from "./Components/HabitCalendar";

function App() {
  const [list, setList] = useState<string[]>([]);
  const listList = [
    { "Job Search": ["make a resume", "apply to jobs", "do interviews"] },
    { Programming: ["learn Next", "try SQL", "finish task project"] },
    { Personal: ["shave", "mow lawn", "clean room"] },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "flex" }}>
          <div style={{ margin: "30px" }}>
            <h2>Main List (Today)</h2>
            <ul>
              {list.map((item, index) => (
                <div key={index} style={{ display: "flex" }}>
                  <li
                    onClick={() =>
                      setList((prevList) =>
                        prevList.filter((itemToRemove) => item !== itemToRemove)
                      )
                    }
                  >
                    {item}
                  </li>
                  {/* <input type="checkbox" /> */}
                </div>
              ))}
            </ul>
          </div>
          <div>
            <div style={{ display: "flex" }}>
              {listList.map((listObj, index) => (
                <div key={index} style={{ margin: "30px" }}>
                  <h3>{Object.keys(listObj)[0]}</h3>
                  <ol>
                    {Object.values(listObj)[0].map(
                      (tasklist: string[], index: number) => (
                        <li
                          key={index}
                          onClick={(e) => {
                            const text =
                              (e.target as HTMLElement).textContent || "";
                            if (!list.includes(text))
                              setList((p) => [...p, text]);
                          }}
                        >
                          {tasklist}
                        </li>
                      )
                    )}
                  </ol>
                </div>
              ))}
              <SubList />
            </div>
            <div>
              <HabitCalendar />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
