const hours = {
  Monday: "10:00 AM - 7:00 PM",
  Tuesday: "10:00 AM - 7:00 PM",
  Wednesday: "10:00 AM - 7:00 PM",
  Thursday: "10:00 AM - 7:00 PM",
  Friday: "10:00 AM - 7:00 PM",
  Saturday: "10:00 AM - 7:00 PM",
  Sunday: "10:00 AM - 6:00 PM"
};

const dayName = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  timeZone: "America/Los_Angeles"
}).format(new Date());

const todayRow = document.querySelector(`[data-day="${dayName}"]`);
const status = document.querySelector("#today-status");

if (todayRow) {
  todayRow.classList.add("is-today");
}

if (status && hours[dayName]) {
  status.textContent = hours[dayName];
}
