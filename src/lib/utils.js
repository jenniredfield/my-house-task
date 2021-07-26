import moment from "moment";

const NUMBER_OF_WEEK_IN_ADVANCE = 8;

export function createListWithDates(housemates, tasks, startingDate, numbersOfWeeksElapsed) {
    const lastWeek = numbersOfWeeksElapsed - 1;
    const nextFewWeeks = numbersOfWeeksElapsed + NUMBER_OF_WEEK_IN_ADVANCE;
    const listOfTasks = []

    for (let i = lastWeek; i < nextFewWeeks; i++) {
        listOfTasks.push(calculateHouseMateWithTask(housemates, tasks, startingDate, i));
    }

    return listOfTasks;
}

export function calculateHouseMateWithTask(housemates, tasks, startingDate, numbersOfWeeksElapsed) {
    const weekStartDate = moment(startingDate, "DD/MM/YYYY").add(String(numbersOfWeeksElapsed), 'weeks').format('DD/MM');
    const weekEndDate =  moment(startingDate, "DD/MM/YYYY").add(String(numbersOfWeeksElapsed), 'weeks').add('6', 'days').format('DD/MM');

    return {
        weekDateDetails: { weekStartDate, weekEndDate },
        houseMatesWithTasks: housemates.map((housemate, i) => {
            const housematesLength = housemates.length;
            const currNum = (numbersOfWeeksElapsed % housematesLength) + i;
            return {
              housemate,
              task:
              currNum >= 4
                  ? tasks[currNum % housematesLength]
                  : tasks[(numbersOfWeeksElapsed % housematesLength) + i],
            };
          })
    }
}