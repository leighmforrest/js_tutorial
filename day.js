function dayOfTheWeek(date) {
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfTheWeek[now.getDay()]
}

function greeting(date) {
    return `Hello, World! Happy ${dayOfTheWeek(date)} from file!`;
}
