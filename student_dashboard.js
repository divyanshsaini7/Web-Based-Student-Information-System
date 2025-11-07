// Mock upcoming events data
const events = [
  { date: "2025-11-10", event: "Math Midterm Exam", details: "Room 204, 10:00 AM" },
  { date: "2025-11-12", event: "Science Quiz", details: "Online via Portal" },
  { date: "2025-11-18", event: "Sports Day", details: "Main Ground, 9:00 AM" },
];

// Fill the table dynamically
const tableBody = document.getElementById("eventsTable");

events.forEach((item) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${item.date}</td>
    <td>${item.event}</td>
    <td>${item.details}</td>
  `;
  tableBody.appendChild(row);
});

// Simulate dynamic update (optional)
document.getElementById("attendance").textContent = "92%";
document.getElementById("gpa").textContent = "8.7";
document.getElementById("noticeCount").textContent = "3 New";
