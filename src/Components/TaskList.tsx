import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

// list tasks, break them up, prioritise, do them, measure progress
/// change positions (prioritise)
/// cross out/done pile
/// measure pile somehow (stack grows, bigger number?)

const TaskList = () => {
  const mockList = ["Clean Room", "Study Docker", "Eat Pasta"];
  const [taskList, setList] = useState(mockList);

  const handleSplit = (index: number) => {
    const currentTask = taskList[index];
    const copyNumber = taskList.filter((task) =>
      task.startsWith(currentTask)
    ).length;

    setList((prev) => {
      const newList = [...prev];
      newList.splice(index + 1, 0, `${prev[index]} ${copyNumber}`);
      return newList;
    });
  };

  return (
    <div>
      TaskList
      <div>
        {taskList.map((task, index) => (
          <div
            key={index}
            style={{ border: "red 2px solid", margin: "5px", padding: "5px" }}
          >
            <TextField
              value={task}
              onChange={(e) =>
                setList((prev) => {
                  const newList = [...prev];
                  newList[index] = e.target.value;
                  return newList;
                })
              }
            />
            <Button onClick={() => handleSplit(index)}>Split</Button>
            <Button
              onClick={() =>
                setList((list) => list.filter((taskItem) => taskItem !== task))
              }
            >
              Delete
            </Button>
            <Button>Up</Button>
            <Button>Down</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
