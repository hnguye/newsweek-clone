const time = document.querySelector('time');

// Getting day of the week dynamically
function getDynamicDay() {
  let today = new Date();

  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

  const dd = String(today.getDate())
    .padStart(2, '0'); // Get the adjusted date
  const mm = String(today.getMonth() + 1)
    .padStart(2, '0'); // January is 0!
  const yyyy = today.getFullYear();

  let weekday = String(weekdays[today.getDay()])
    .slice(0, 3);
  let month = String(months[today.getMonth()])
    .slice(0, 3);

  today = `${weekday}, ${month} ${dd}, ${yyyy}`;

  return today;
};

time.innerHTML = `<time>${getDynamicDay()}</time>`
