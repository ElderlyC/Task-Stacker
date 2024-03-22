import "./App.css";
//import MainHabits from "./Components/MainHabits";
import WeeklyProgress from "./Components/WeeklyProgress";
import Streak from "./Components/Streak";
import TaskList from "./Components/TaskList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <MainHabits /> */}
        {/* <WeeklyProgress />
        <Streak /> */}
        <TaskList />
      </header>
    </div>
  );
}

export default App;
