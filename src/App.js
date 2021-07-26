import moment from 'moment';
import { calculateHouseMateWithTask, createListWithDates } from './lib/utils';
import './App.css';

function App() {
  const startingDate = '28/12/2020';
  const tasks = ['Kitchen', 'Toilets', 'Corridors', 'Bins & Supplies'];
  const housemates = ['Lyndon', 'Jen', 'Anais', 'Martim'];
  const startDate = moment(startingDate, 'DD/MM/YYYY');
  const now = moment();
  const numberOfWeeksElapsed = now.diff(startDate, 'weeks');

  console.log(
    'calc',
    calculateHouseMateWithTask(
      housemates,
      tasks,
      startDate,
      numberOfWeeksElapsed
    )
  );

  console.log(
    'list',
    createListWithDates(housemates, tasks, startDate, numberOfWeeksElapsed)
  );
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
              return (
                <div className="app-task">
                  <h2 className="app-task-date-title">
                    {`${weekDateDetails.weekStartDate} - ${weekDateDetails.weekEndDate}`}
                    {i === 1 ? ' - Current' : ''}
                  </h2>

                  <div className="app-task-details-container">
                    {houseMatesWithTasks.map((h) => {
                      return (
                        <div className="app-task-column" key={h.task}>
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
