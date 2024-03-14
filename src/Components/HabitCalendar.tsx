import { Grid, Paper } from "@mui/material";
// copy github commit calendar's concepts
// -green boxes, get darker. ordered by date.
// end design should be simple and satisfying!
const HabitCalendar = () => {
  const habits = [
    { id: "cat", completed: true },
    { id: "dog", completed: false },
    { id: "turtle", completed: false },
  ];

  const handleHabitClick = (id: string) => {
    console.log("bing bong", id);
  };
  return (
    <div style={{ display: "flex" }}>
      <Grid container spacing={1}>
        {habits.map((habit, index) => (
          <Grid item key={index} xs={2}>
            <Paper
              style={{
                height: "100px",
                backgroundColor: habit.completed ? "green" : "transparent",
                cursor: "pointer",
              }}
              onClick={() => handleHabitClick(habit.id)}
            >
              {/* Render habit details inside the cell */}
              <p>{habit.id}</p>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HabitCalendar;
