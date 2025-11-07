// Class Schedule Data
const classSchedule = {
  Monday: ["Math", "English", "Science", "History", "Lunch", "Computer", "Sports"],
  Tuesday: ["English", "Math", "Science", "Computer", "Lunch", "History", "Art"],
  Wednesday: ["Science", "History", "Math", "English", "Lunch", "Computer", "Library"],
  Thursday: ["Computer", "Math", "English", "Science", "Lunch", "History", "Sports"],
  Friday: ["Math", "Science", "Computer", "English", "Lunch", "History", "Activity"],
  Saturday: ["Sports", "Art", "Math", "Computer", "Lunch", "English", "Science"],
};

// Exam Timetable Data
const examTimetable = [
  { date: "2025-03-02", day: "Monday", subject: "Mathematics", time: "9:00 AM - 12:00 PM", room: "A101" },
  { date: "2025-03-04", day: "Wednesday", subject: "Science", time: "9:00 AM - 12:00 PM", room: "A102" },
  { date: "2025-03-06", day: "Friday", subject: "English", time: "9:00 AM - 12:00 PM", room: "A103" },
  { date: "2025-03-08", day: "Saturday", subject: "History", time: "9:00 AM - 12:00 PM", room: "A104" },
  { date: "2025-03-10", day: "Monday", subject: "Computer", time: "9:00 AM - 12:00 PM", room: "A105" },
];

// Populate Class Timetable
const classTableBody = document.querySelector("#classTimetable tbody");
for (let day in classSchedule) {
  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${day}</td>` + classSchedule[day].map(sub => `<td>${sub}</td>`).join("");
  classTableBody.appendChild(tr);
}

// Populate Exam Timetable
const examTableBody = document.querySelector("#examTimetable tbody");
examTimetable.forEach(exam => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${exam.date}</td>
    <td>${exam.day}</td>
    <td>${exam.subject}</td>
    <td>${exam.time}</td>
    <td>${exam.room}</td>
  `;
  examTableBody.appendChild(tr);
});
