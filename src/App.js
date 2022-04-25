import moment from "moment";
import { createListWithDates } from "./lib/utils";
import "./App.css";

function App() {
  const startingDate = "18/04/2022";
  const tasks = ["Kitchen", "Toilets", "Corridors", "Bins & Supplies"];
  const housemates = ["Jen", "Anais", "Lyndon", "Martim"];
  const startDate = moment(startingDate, "DD/MM/YYYY");
  const now = moment();
  const numberOfWeeksElapsed = now.diff(startDate, "weeks");

  const listWithHouseMateTasks = createListWithDates(
    housemates,
    tasks,
    startDate,
    numberOfWeeksElapsed
  );

  return (
    <div className="App">
      <header>
        <h1>Schuster Road 🏠</h1>
        <h3>Your task of the week 🧹</h3>
      </header>
      <div className="app-content">
        <div className="app-tasks">
          {listWithHouseMateTasks.map(
            ({ weekDateDetails, houseMatesWithTasks }, i) => {
              const isSecond = i === 1;
              return (
                <div className="app-task">
                  <h2 className="app-task-date-title">
                    {`${weekDateDetails.weekStartDate} - ${weekDateDetails.weekEndDate}`}
                    {isSecond ? " - Current" : ""}
                  </h2>

                  <div className="app-task-details-container">
                    {houseMatesWithTasks.map((h) => {
                      return (
                        <div
                          className={`app-task-column ${
                            isSecond ? "app-task-column-current" : ""
                          }`}
                          key={h.task}
                        >
                          <div className="app-task-row">{h.housemate}</div>
                          <div className="app-task-row">{h.task}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
