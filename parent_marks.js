// Sample marks data
const marksData = [
  { subject: "Mathematics", mid: 85, final: 90 },
  { subject: "Science", mid: 78, final: 88 },
  { subject: "English", mid: 82, final: 84 },
  { subject: "History", mid: 75, final: 80 },
  { subject: "Computer Science", mid: 92, final: 95 }
];

// Calculate and display marks table
const tableBody = document.getElementById("marksTableBody");

marksData.forEach(m => {
  const avg = ((m.mid + m.final) / 2).toFixed(1);
  let grade = "A";
  if (avg >= 90) grade = "A+";
  else if (avg >= 80) grade = "A";
  else if (avg >= 70) grade = "B";
  else if (avg >= 60) grade = "C";
  else grade = "D";

  const row = `
    <tr>
      <td>${m.subject}</td>
      <td>${m.mid}</td>
      <td>${m.final}</td>
      <td>${avg}</td>
      <td>${grade}</td>
    </tr>
  `;
  tableBody.insertAdjacentHTML("beforeend", row);
});

// Chart.js Setup
const subjects = marksData.map(m => m.subject);
const midMarks = marksData.map(m => m.mid);
const finalMarks = marksData.map(m => m.final);
const avgMarks = marksData.map(m => ((m.mid + m.final) / 2).toFixed(1));

// Trend Chart (Line)
const trendCtx = document.getElementById("trendChart").getContext("2d");
new Chart(trendCtx, {
  type: "line",
  data: {
    labels: subjects,
    datasets: [
      {
        label: "Midterm",
        data: midMarks,
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59,130,246,0.1)",
        fill: true,
        tension: 0.3
      },
      {
        label: "Final",
        data: finalMarks,
        borderColor: "#10b981",
        backgroundColor: "rgba(16,185,129,0.1)",
        fill: true,
        tension: 0.3
      }
    ]
  },
  options: {
    responsive: true,
    plugins: { legend: { position: "top" } },
    scales: {
      y: { beginAtZero: true, max: 100 }
    }
  }
});

// Exam Comparison (Bar)
const examCtx = document.getElementById("examChart").getContext("2d");
new Chart(examCtx, {
  type: "bar",
  data: {
    labels: subjects,
    datasets: [
      {
        label: "Midterm",
        data: midMarks,
        backgroundColor: "#3b82f6"
      },
      {
        label: "Final",
        data: finalMarks,
        backgroundColor: "#10b981"
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true, max: 100 }
    }
  }
});
