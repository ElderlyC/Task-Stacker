import { LinearProgress } from "@mui/material";
// keep track of the amount of time spent on each habit
// array of habit, time, goalTime saved locally
// work towards a weekly goal
// fill the tube with green when adding time

const WeeklyProgress = () => {
  const habitTime = [
    { habit: "Job Search", spentTime: 40, goalTime: 210 },
    { habit: "Tech Study", spentTime: 20, goalTime: 210 },
    { habit: "Project Work", spentTime: 210, goalTime: 360 },
  ];
  return (
    <div>
      {habitTime.map((habit) => (
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
              value={(habit.spentTime / habit.goalTime) * 100}
              sx={{ height: "38px", minWidth: "100%" }}
            />
            <span style={{ minWidth: "100px" }}>{`${(
              (habit.spentTime / habit.goalTime) *
              100
            ).toFixed()}%`}</span>
            <div
              style={{
                display: "flex",
                fontSize: "1rem",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontSize: "3rem",
                  verticalAlign: "center",
                }}
              >
                +
              </span>
              <input
                type="number"
                style={{ width: "60px", fontSize: "2rem" }}
                defaultValue={10}
              />
              <button>Add Time</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeeklyProgress;
