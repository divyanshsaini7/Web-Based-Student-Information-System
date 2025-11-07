// --- Simple Bar Chart using Canvas API ---
const canvas = document.getElementById("performanceChart");
const ctx = canvas.getContext("2d");

const students = ["Aarav", "Siya", "Rahul"];
const marks = [88, 91, 85];

const barWidth = 100;
const gap = 60;
const startX = 70;
const baseY = 250;

ctx.fillStyle = "#1e3a8a";
ctx.font = "16px Segoe UI";
ctx.fillText("Student Performance (%)", 200, 30);

// Draw bars
marks.forEach((mark, i) => {
  const x = startX + i * (barWidth + gap);
  const height = mark * 2; // scale up for visibility
  ctx.fillStyle = "#1e3a8a";
  ctx.fillRect(x, baseY - height, barWidth, height);
  
  // labels
  ctx.fillStyle = "#333";
  ctx.fillText(students[i], x + 20, baseY + 20);
  ctx.fillText(mark + "%", x + 25, baseY - height - 10);
});

// --- Export Buttons (Simulation) ---
document.getElementById("exportPDF").addEventListener("click", () => {
  alert("📄 PDF Export generated successfully!");
});

document.getElementById("exportExcel").addEventListener("click", () => {
  alert("📊 Excel Export generated successfully!");
});
