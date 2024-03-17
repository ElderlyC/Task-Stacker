import { useState, useEffect, KeyboardEventHandler } from "react";
import { Grid, Paper, TextField, Button, Typography } from "@mui/material";
// simple task list of main habits
// time blocking? -highlight current habit
// end design should be simple and satisfying!
// need to wireframe
type Habit = { id: string; completed: boolean };
const MainHabits = () => {
  const storedHabitList = localStorage.getItem("habitlist");
  const [habitList, setHabitList] = useState<Habit[]>(
    (storedHabitList && JSON.parse(storedHabitList)) || []
  );
  const incompleteHabits = habitList.filter(
    (habit) => habit.completed === false
  );
  const [currentTaskNum, setTaskNum] = useState(0);
  const [task, setTask] = useState("");

  const handleHabitClick = (id: string) => {
    setTaskNum(0);
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
    setTask("");
  };

  const handleDeleteTask = (id: string) => {
    setHabitList((prev) => prev.filter((task) => task.id !== id));
  };

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === "Enter") handleAddTask();
  };

  const handleChangeCurrent = () => {
    setTaskNum((num) => {
      if (incompleteHabits.length === 1) return 0;
      if (num === incompleteHabits.length - 1) return 0;
      return num + 1;
    });
  };

  useEffect(() => {
    localStorage.setItem("habitlist", JSON.stringify(habitList));
  }, [habitList]);

  return (
    <div style={{ display: "flex", width: "100%" }}>
      {/* <div
        style={{
          flex: 2,
          margin: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        1st Third
      </div> */}
      <div
        style={{
          margin: "20px",
          flex: 3,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4">Add New Habit</Typography>
        <div>
          <TextField
            label="Add new task"
            onKeyDown={handleKeyDown}
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div>
          <Button variant="outlined" onClick={handleAddTask}>
            Add
          </Button>
        </div>
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">Current Task</Typography>

          {incompleteHabits.length > 0 && (
            <Paper
              style={{
                height: "100px",
                width: "100px",
                backgroundColor: "transparent",
                cursor: "pointer",
                border: "2px blue solid",
                padding: "10px",
                margin: "10px",
              }}
              onClick={handleChangeCurrent}
            >
              <Typography variant="button" fontWeight={700}>
                {incompleteHabits[currentTaskNum].id}
              </Typography>
            </Paper>
          )}
        </div>
      </div>

      <Grid
        container
        spacing={4}
        width={"600px"}
        flex="2"
        margin="20px"
        display="flex"
        justifyContent="center"
      >
        {habitList.map((habit, index) => (
          <Grid item key={index} xs={5}>
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
