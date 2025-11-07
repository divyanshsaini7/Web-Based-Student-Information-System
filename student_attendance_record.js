const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let totalDays = 0;
let presentDays = 0;
let currentMonth = 0;

const calendarContainer = document.getElementById("calendarContainer");
const monthLabel = document.getElementById("monthLabel");

// Generate attendance for each month
function generateAttendanceData() {
  const data = [];

  months.forEach((monthName, monthIndex) => {
    const daysInMonth = new Date(2025, monthIndex + 1, 0).getDate();
    const days = [];

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(2025, monthIndex, i);
      const isSunday = date.getDay() === 0;

      if (monthIndex === 11) {
        // December — all not marked
        days.push("not-marked");
      } else if (isSunday) {
        // Sundays excluded from total, shown separately
        days.push("sunday");
      } else {
        // Other days randomly present or absent
        const rand = Math.random();
        let status = rand < 0.8 ? "present" : "absent";
        days.push(status);

        totalDays++;
        if (status === "present") presentDays++;
      }
    }
    data.push(days);
  });

  return data;
}

const attendanceData = generateAttendanceData();

function renderCalendar(monthIndex) {
  calendarContainer.innerHTML = "";
  monthLabel.textContent = months[monthIndex];

  const calendar = document.createElement("div");
  calendar.classList.add("calendar");

  // Weekday headers
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const weekdayRow = document.createElement("div");
  weekdayRow.classList.add("weekdays");
  weekdays.forEach(day => {
    const w = document.createElement("div");
    w.classList.add("weekday");
    w.textContent = day;
    weekdayRow.appendChild(w);
  });
  calendar.appendChild(weekdayRow);

  const grid = document.createElement("div");
  grid.classList.add("days");

  const days = attendanceData[monthIndex];
  const firstDay = new Date(2025, monthIndex, 1).getDay();

  // Blank cells before month start
  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement("div");
    grid.appendChild(empty);
  }

  days.forEach((status, i) => {
    const date = new Date(2025, monthIndex, i + 1);
    const isSunday = date.getDay() === 0;

    const dayDiv = document.createElement("div");
    dayDiv.classList.add("day");

    if (isSunday) {
      dayDiv.classList.add("sunday");
    } else if (status === "present") {
      dayDiv.classList.add("present");
    } else if (status === "absent") {
      dayDiv.classList.add("absent");
    } else if (status === "not-marked") {
      dayDiv.classList.add("not-marked");
    }

    dayDiv.textContent = i + 1;
    grid.appendChild(dayDiv);
  });

  calendar.appendChild(grid);
  calendarContainer.appendChild(calendar);
}

// Slider Controls
document.getElementById("prevBtn").addEventListener("click", () => {
  currentMonth = (currentMonth - 1 + 12) % 12;
  renderCalendar(currentMonth);
});
document.getElementById("nextBtn").addEventListener("click", () => {
  currentMonth = (currentMonth + 1) % 12;
  renderCalendar(currentMonth);
});

// Initial Render
renderCalendar(currentMonth);

// Summary (excluding Sundays)
const percent = ((presentDays / totalDays) * 100).toFixed(1);
document.getElementById("totalDays").textContent = totalDays;
document.getElementById("presentDays").textContent = presentDays;
document.getElementById("attendancePercent").textContent = `${percent}%`;

// Download placeholder
document.getElementById("downloadBtn").addEventListener("click", () => {
  alert("PDF download feature coming soon!");
});
