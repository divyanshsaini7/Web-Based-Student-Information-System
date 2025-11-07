// Static subject data
const subjects = [
  { name: "Mathematics", max: 100, obtained: 88 },
  { name: "Science", max: 100, obtained: 91 },
  { name: "English", max: 100, obtained: 76 },
  { name: "History", max: 100, obtained: 85 },
  { name: "Computer", max: 100, obtained: 92 },
];

const marksTableBody = document.querySelector("#marksTable tbody");
const gpaEl = document.getElementById("gpa");
const avgEl = document.getElementById("avgPercent");
const chartCanvas = document.getElementById("marksChart");
const ctx = chartCanvas.getContext("2d");

function calcPercentage(obt, max) {
  return (obt / max) * 100;
}
function gradeFromPercent(p) {
  if (p >= 90) return "A+";
  if (p >= 80) return "A";
  if (p >= 70) return "B";
  if (p >= 60) return "C";
  return "D";
}
function calculateGPA(avgPercent) {
  return ((avgPercent / 100) * 4).toFixed(2);
}

// Render Table (read-only)
function renderTable() {
  marksTableBody.innerHTML = "";
  subjects.forEach((s) => {
    const percent = calcPercentage(s.obtained, s.max);
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${s.name}</td>
      <td>${s.max}</td>
      <td>${s.obtained}</td>
      <td>${percent.toFixed(1)}%</td>
      <td>${gradeFromPercent(percent)}</td>
    `;
    marksTableBody.appendChild(tr);
  });

  updateSummaryAndChart();
}

function updateSummaryAndChart() {
  let totalObt = 0, totalMax = 0;
  const percents = [];
  const labels = [];

  subjects.forEach((s) => {
    totalObt += s.obtained;
    totalMax += s.max;
    const p = calcPercentage(s.obtained, s.max);
    percents.push(p);
    labels.push(s.name);
  });

  const avgPercent = (totalObt / totalMax) * 100;
  avgEl.textContent = `${avgPercent.toFixed(1)}%`;
  gpaEl.textContent = calculateGPA(avgPercent);

  drawBarChart(labels, percents);
}

// Draw simple bar chart
function drawBarChart(labels, data) {
  const w = chartCanvas.width = chartCanvas.clientWidth || 700;
  const h = chartCanvas.height = 300;
  ctx.clearRect(0, 0, w, h);

  const padding = 60;
  const chartW = w - padding * 2;
  const chartH = h - padding * 2;
  const maxVal = 100;

  // axes
  ctx.strokeStyle = "#ccc";
  ctx.beginPath();
  ctx.moveTo(padding, padding);
  ctx.lineTo(padding, padding + chartH);
  ctx.lineTo(padding + chartW, padding + chartH);
  ctx.stroke();

  const barWidth = (chartW / data.length) * 0.6;
  const gap = (chartW / data.length) - barWidth;

  // bars
  data.forEach((val, i) => {
    const x = padding + i * (barWidth + gap) + gap / 2;
    const barH = (val / maxVal) * chartH;
    const y = padding + chartH - barH;

    ctx.fillStyle = "#1e3a8a";
    ctx.fillRect(x, y, barWidth, barH);

    ctx.fillStyle = "#222";
    ctx.font = "12px Segoe UI";
    ctx.textAlign = "center";
    ctx.fillText(val.toFixed(1) + "%", x + barWidth / 2, y - 8);

    ctx.save();
    ctx.translate(x + barWidth / 2, padding + chartH + 18);
    ctx.fillText(labels[i], 0, 0);
    ctx.restore();
  });
}

// CSV Download
document.getElementById("downloadCsv").addEventListener("click", () => {
  let csv = "Subject,Max Marks,Obtained Marks,Percentage,Grade\n";
  subjects.forEach(s => {
    const p = calcPercentage(s.obtained, s.max).toFixed(1);
    csv += `"${s.name}",${s.max},${s.obtained},${p}%,${gradeFromPercent(p)}\n`;
  });
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "marksheet.csv";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});

// Print
document.getElementById("printBtn").addEventListener("click", () => {
  window.print();
});

// Init
renderTable();
