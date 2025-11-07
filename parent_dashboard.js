// Draw a simple, smooth line graph for performance summary
const canvas = document.getElementById("performanceChart");
const ctx = canvas.getContext("2d");

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

// Dummy data
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const marks = [75, 80, 85, 88, 84, 90];

// Axis setup
ctx.strokeStyle = "#ccc";
ctx.beginPath();
ctx.moveTo(50, 350);
ctx.lineTo(50, 50);
ctx.lineTo(650, 50);
ctx.stroke();

// Line graph
ctx.beginPath();
ctx.strokeStyle = "#1e3a8a";
ctx.lineWidth = 3;
marks.forEach((m, i) => {
  const x = 100 + i * 100;
  const y = 350 - (m * 3);
  if (i === 0) ctx.moveTo(x, y);
  else ctx.lineTo(x, y);
});
ctx.stroke();

// Dots
ctx.fillStyle = "#1e3a8a";
marks.forEach((m, i) => {
  const x = 100 + i * 100;
  const y = 350 - (m * 3);
  ctx.beginPath();
  ctx.arc(x, y, 6, 0, Math.PI * 2);
  ctx.fill();
});

// Labels
ctx.fillStyle = "#333";
ctx.font = "14px Segoe UI";
months.forEach((month, i) => {
  const x = 100 + i * 100;
  ctx.fillText(month, x - 15, 370);
});
