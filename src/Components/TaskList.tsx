import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import classes from "./TaskList.module.css";

// list tasks, break them up, prioritise, do them, measure progress
/// change positions (prioritise)
/// cross out/done pile
/// measure pile somehow (stack grows, bigger number?)

const TaskList = () => {
  const mockList = ["Clean Room", "Study Docker", "Eat Pasta"];
  const [taskList, setList] = useState(mockList);
  const [flashingIndex, setFlashingIndex] = useState<null | number>(null);

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

  const handleMoveTask = (direction: string, index: number) => {
    setFlashingIndex(direction === "up" ? index - 1 : index + 1);
    const newList = [...taskList];
    if (direction === "up") {
      [newList[index], newList[index - 1]] = [
        newList[index - 1],
        newList[index],
      ];
    } else
      [newList[index], newList[index + 1]] = [
        newList[index + 1],
        newList[index],
      ];
    setList(newList);
    setTimeout(() => {
      setFlashingIndex(null);
    }, 100);
  };

  return (
    <div>
      TaskList
      <div>
        {taskList.map((task, index) => (
          <div
            key={index}
            className={`${classes.listItem} ${
              index === flashingIndex ? classes.flashing : ""
            }`}
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
            <Button
              disabled={index === 0}
              onClick={() => handleMoveTask("up", index)}
            >
              Up
            </Button>
            <Button
              disabled={index === taskList.length - 1}
              onClick={() => handleMoveTask("down", index)}
            >
              Down
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
