import { FormEventHandler, useState, useEffect } from "react";
import { LinearProgress, TextField, Button } from "@mui/material";
// keep track of the amount of time spent on each habit
// array of habit, time, goalTime saved locally
// work towards a weekly goal
// fill the tube with green when adding time

type HabitTime = { habit: string; spentTime: string; goalTime: string };
type AddingTime = { [key: string]: number };
const WeeklyProgress = () => {
  const storedHabits = localStorage.getItem("habitTimes");
  const [habitTimes, setHabitTimes] = useState<HabitTime[]>(
    storedHabits ? JSON.parse(storedHabits) : []
  );
  const [habitName, setHabitName] = useState("");
  const [goalTime, setGoalTime] = useState(210);

  const [valueToAdd, setValueToAdd] = useState<AddingTime>(
    Object.fromEntries(habitTimes.map((habit: HabitTime) => [habit.habit, 10]))
  );

  const handleAddHabit: FormEventHandler = (event) => {
    event.preventDefault();
    setHabitTimes((prev: HabitTime[]) => [
      ...prev,
      { habit: habitName, spentTime: "0", goalTime: goalTime.toString() },
    ]);
    setHabitName("");
    setGoalTime(210);
    setValueToAdd((prev: AddingTime) => ({ ...prev, [habitName]: 10 }));
  };

  const handleAddTime = (habit: HabitTime, valueToAdd: AddingTime) => {
    const updatedHabitTimes = habitTimes.map((item: HabitTime) =>
      item.habit === habit.habit
        ? {
            ...item,
            spentTime: String(+item.spentTime + valueToAdd[habit.habit]),
          }
        : item
    );
    setHabitTimes(updatedHabitTimes);
  };

  const handleReset = () => {
    setHabitTimes((prev) =>
      prev.map((habit) => ({
        ...habit,
        spentTime: "0",
      }))
    );
  };

  useEffect(() => {
    localStorage.setItem("habitTimes", JSON.stringify(habitTimes));
  }, [habitTimes]);

  return (
    <div>
      <form
        onSubmit={handleAddHabit}
        style={{ display: "flex", marginBottom: "30px" }}
      >
        <TextField
          placeholder="Habit"
          inputProps={{ style: { fontSize: "2rem" } }}
          required
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
        />
        <TextField
          inputProps={{ style: { fontSize: "2rem" } }}
          sx={{ width: "100px" }}
          type="number"
          label="Goal (min)"
          value={goalTime}
          onChange={(e) => setGoalTime(+e.target.value)}
        />
        <Button sx={{ fontSize: "2rem" }} variant="contained" type="submit">
          Add Habit
        </Button>
      </form>
      {habitTimes.map((habit: HabitTime) => (
        <div key={habit.habit}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100px",
              width: "600px",
            }}
          >
            <span style={{ minWidth: "200px" }}>{habit.habit}</span>

            <LinearProgress
              color="success"
              variant="determinate"
              value={(+habit.spentTime / +habit.goalTime) * 100}
              sx={{ height: "38px", minWidth: "100%" }}
            />
            <span style={{ minWidth: "100px" }}>{`${(
              (+habit.spentTime / +habit.goalTime) *
              100
            ).toFixed()}%`}</span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "20px",
              }}
            >
              <span
                style={{
                  display: "flex",
                  fontSize: "3rem",
                }}
              >
                +
                <TextField
                  type="number"
                  inputProps={{ style: { fontSize: "1.5rem" } }}
                  sx={{ width: "100px" }}
                  onChange={(e) =>
                    setValueToAdd((prev: AddingTime) => ({
                      ...prev,
                      [habit.habit]: +e.target.value,
                    }))
                  }
                  value={valueToAdd[habit.habit]}
                />
              </span>
              <Button
                sx={{ fontSize: "1rem", fontWeight: "800" }}
                variant="contained"
                onClick={() => handleAddTime(habit, valueToAdd)}
              >
                Add Time
              </Button>
            </div>
          </div>
        </div>
      ))}
      <Button variant="contained" onClick={handleReset}>
        Reset
      </Button>
    </div>
  );
};

export default WeeklyProgress;
