import moment from "moment";
import "./App.css";

function App() {
  const startingDate = "28/12/2020";
  const tasks = ["Kitchen", "Toilets", "Corridors", "Bins"];
  const housemates = ["Lyndon", "Jen", "Anais", "Martim"];
  const startDate = moment(startingDate, "DD/MM/YYYY");
  const now = moment();
  const diff = now.diff(startDate, "weeks");

  const housematesWithTasks = housemates.map((housemate, i) => {
    const housematesLength = housemates.length;
    const currNum = (diff % housematesLength) + i;
    return {
      housemate,
      task:
      currNum >= 4
          ? tasks[currNum % housematesLength]
          : tasks[(diff % housematesLength) + i],
    };
  });

  const weekStartingDate = moment(startingDate, "DD/MM/YYYY").add(String(diff), 'weeks').format('DD/MM');
  const weekEndingDate = moment(startingDate, "DD/MM/YYYY").add(String(diff), 'weeks').add('6', 'days').format('DD/MM');

  return (
    <div className="App">
      <header>
        <h1>Your task of the week</h1>
        <h2>{`${weekStartingDate} - ${weekEndingDate}`}</h2>
      </header>
      <div className="app-content">
        <div className="app-tasks">
          {housematesWithTasks.map((h) => {
            return (
              <div className="app-task-column" key={h.task}>
                <div className="app-task-row">{h.housemate}</div>
                <div className="app-task-row">{h.task}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
