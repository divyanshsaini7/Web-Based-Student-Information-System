// Draw charts using pure Canvas API (no libraries)

// Performance Summary Chart
const performanceCanvas = document.getElementById("performanceChart");
const perfCtx = performanceCanvas.getContext("2d");

const subjects = ["Math", "Science", "English", "History", "IT"];
const marks = [82, 91, 76, 85, 88];

drawBarChart(perfCtx, subjects, marks, "Performance Summary (%)");

// Attendance Overview Chart
const attendanceCanvas = document.getElementById("attendanceChart");
const attCtx = attendanceCanvas.getContext("2d");

const months = ["Jan", "Feb", "Mar", "Apr", "May"];
const attendance = [88, 90, 84, 92, 89];

drawLineChart(attCtx, months, attendance, "Attendance %");

// ===== FUNCTIONS =====
function drawBarChart(ctx, labels, data) {
  const maxValue = 100;
  const barWidth = 50;
  const gap = 30;
  const startX = 40;
  const startY = 180;

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.font = "14px Arial";
  ctx.textAlign = "center";

  // Axis line
  ctx.beginPath();
  ctx.moveTo(30, 10);
  ctx.lineTo(30, startY);
  ctx.lineTo(400, startY);
  ctx.strokeStyle = "#333";
  ctx.stroke();

  labels.forEach((label, i) => {
    const x = startX + i * (barWidth + gap);
    const y = startY - (data[i] / maxValue) * 150;

    // Bar
    ctx.fillStyle = "#1e3a8a";
    ctx.fillRect(x, y, barWidth, startY - y);

    // Value
    ctx.fillStyle = "#000";
    ctx.fillText(data[i] + "%", x + barWidth / 2, y - 5);

    // Label
    ctx.fillText(label, x + barWidth / 2, startY + 15);
  });
}

function drawLineChart(ctx, labels, data) {
  const maxValue = 100;
  const startX = 40;
  const startY = 180;
  const gap = 60;

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.font = "14px Arial";
  ctx.textAlign = "center";

  // Axis line
  ctx.beginPath();
  ctx.moveTo(30, 10);
  ctx.lineTo(30, startY);
  ctx.lineTo(400, startY);
  ctx.strokeStyle = "#333";
  ctx.stroke();

  ctx.strokeStyle = "#1e3a8a";
  ctx.fillStyle = "#1e3a8a";
  ctx.beginPath();

  labels.forEach((label, i) => {
    const x = startX + i * gap;
    const y = startY - (data[i] / maxValue) * 150;

    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);

    ctx.fillRect(x - 3, y - 3, 6, 6); // point marker
    ctx.fillText(label, x, startY + 15);
  });

  ctx.stroke();

  data.forEach((val, i) => {
    const x = startX + i * gap;
    const y = startY - (val / maxValue) * 150;
    ctx.fillText(val + "%", x, y - 10);
  });
}
