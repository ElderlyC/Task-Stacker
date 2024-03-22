import { TextField, Button } from "@mui/material";

// what logic to make a user engage with this?

const Streak = () => {
  const streaks = [
    ["No Youtube", 2],
    ["10pm Sleep", 1],
    ["6am Wake Up", 10],
  ];

  const handleReset = (streakCount: number) => {};

  return (
    <div>
      Streaks:
      <div>
        {streaks.map((streak, index) => (
          <div key={index}>
            {`${streak[0]}: ${streak[1]} days`}
            <Button onClick={() => handleReset(streak[1] as number)}>
              Reset
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Streak;
