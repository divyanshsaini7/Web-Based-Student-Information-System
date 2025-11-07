const calendarDays = document.getElementById("calendar-days");
const currentMonthDisplay = document.getElementById("currentMonth");

const totalDaysEl = document.getElementById("totalDays");
const daysPresentEl = document.getElementById("daysPresent");
const daysAbsentEl = document.getElementById("daysAbsent");
const notMarkedEl = document.getElementById("notMarked");
const attendancePercentEl = document.getElementById("attendancePercent");

let currentDate = new Date(2025, 0, 1); // Start from January 2025

function renderCalendar() {
  calendarDays.innerHTML = "";

  const year = 2025;
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  currentMonthDisplay.textContent = `${currentDate.toLocaleString("default", {
    month: "long",
  })} ${year}`;

  let totalDays = 0;
  let presentCount = 0;
  let absentCount = 0;
  let notMarkedCount = 0;

  // Fill empty slots for days before 1st
  for (let i = 0; i < firstDay; i++) {
    const emptyDiv = document.createElement("div");
    calendarDays.appendChild(emptyDiv);
  }

  for (let day = 1; day <= lastDate; day++) {
    const dayDiv = document.createElement("div");
    const date = new Date(year, month, day);
    const isSunday = date.getDay() === 0;

    dayDiv.classList.add("day");
    dayDiv.textContent = day;

    if (isSunday) {
      dayDiv.classList.add("sunday");
    } else if (month === 11) {
      // December - Not marked
      dayDiv.classList.add("not-marked");
      notMarkedCount++;
    } else {
      totalDays++;
      // Random attendance except Sunday
      const present = Math.random() > 0.15; // 85% chance present
      if (present) {
        dayDiv.classList.add("present");
        presentCount++;
      } else {
        dayDiv.classList.add("absent");
        absentCount++;
      }
    }

    calendarDays.appendChild(dayDiv);
  }

  const percent =
    totalDays > 0 ? ((presentCount / totalDays) * 100).toFixed(1) : 0;

  totalDaysEl.textContent = totalDays;
  daysPresentEl.textContent = presentCount;
  daysAbsentEl.textContent = absentCount;
  notMarkedEl.textContent = notMarkedCount;
  attendancePercentEl.textContent = `${percent}%`;
}

// Month Navigation
document.getElementById("prevMonth").addEventListener("click", () => {
  if (currentDate.getMonth() > 0) {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
  }
});

document.getElementById("nextMonth").addEventListener("click", () => {
  if (currentDate.getMonth() < 11) {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
  }
});

renderCalendar();
