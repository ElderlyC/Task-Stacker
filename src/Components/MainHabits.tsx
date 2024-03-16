import { useState, KeyboardEventHandler } from "react";
import { Grid, Paper, TextField, Button, Typography } from "@mui/material";
// simple task list of main habits
// time blocking? -highlight current habit
// end design should be simple and satisfying!
type Habit = { id: string; completed: boolean };
const MainHabits = () => {
  const [habitList, setHabitList] = useState<Habit[]>([]);
  const [task, setTask] = useState("");

  const handleHabitClick = (id: string) => {
    setHabitList((prev) => {
      return prev.map((habit) => {
        if (habit.id === id) return { ...habit, completed: !habit.completed };
        return habit;
      });
    });
  };

  const handleAddTask = () => {
    if (task === "") return;
    setHabitList((prev) => [...prev, { id: task, completed: false }]);
    console.log("Task added:", task, habitList);
    setTask("");
  };

  const handleDeleteTask = (id: string) => {
    setHabitList((prev) => prev.filter((task) => task.id !== id));
  };

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === "Enter") handleAddTask();
  };
  return (
    <div>
      <div style={{ margin: "20px" }}>
        <div>
          <TextField
            label="Add new task"
            onKeyDown={handleKeyDown}
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <Button variant="outlined" onClick={handleAddTask}>
          Add
        </Button>
      </div>

      <Grid container spacing={4} width={"600px"}>
        {habitList.map((habit, index) => (
          <Grid item key={index} xs={3} display="flex" justifyContent="center">
            <Paper
              style={{
                height: "100px",
                width: "100px",
                backgroundColor: habit.completed ? "green" : "transparent",
                cursor: "pointer",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              onClick={() => handleHabitClick(habit.id)}
            >
              <Typography variant="button" fontWeight={700}>
                {habit.id}
              </Typography>
              <Button
                onClick={() => handleDeleteTask(habit.id)}
                variant="contained"
                color="error"
                size="small"
              >
                X
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MainHabits;
