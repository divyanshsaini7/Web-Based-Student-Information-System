// CAPTCHA logic
const canvas = document.getElementById("captchaCanvas");
const ctx = canvas.getContext("2d");
const refreshBtn = document.getElementById("refreshCaptcha");
const captchaInput = document.getElementById("captchaInput");
const loginForm = document.getElementById("loginForm");

let captchaCode = "";

// Generate random alphanumeric string
function generateCaptcha() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let code = "";
  for (let i = 0; i < 5; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  captchaCode = code;
  drawCaptcha();
}

// Draw CAPTCHA on canvas
function drawCaptcha() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = "28px Arial";
  ctx.fillStyle = "#333";

  // Slight random rotation for each character
  for (let i = 0; i < captchaCode.length; i++) {
    const char = captchaCode[i];
    const x = 15 + i * 20;
    const y = 30 + Math.random() * 5;
    const angle = (Math.random() - 0.5) * 0.4;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.fillText(char, 0, 0);
    ctx.restore();
  }

  // Add some noise
  for (let i = 0; i < 20; i++) {
    ctx.beginPath();
    ctx.moveTo(Math.random() * 120, Math.random() * 40);
    ctx.lineTo(Math.random() * 120, Math.random() * 40);
    ctx.strokeStyle = "rgba(0,0,0,0.2)";
    ctx.stroke();
  }
}

// Refresh CAPTCHA
refreshBtn.addEventListener("click", generateCaptcha);

// Form Submit
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const userCaptcha = captchaInput.value.trim();

  if (userCaptcha === captchaCode) {
    alert("✅ CAPTCHA verified! Redirecting to dashboard...");
    const role = document.getElementById("role").value;
    if (role === "admin") window.location.href = "admin_dashboard.html";
    else if (role === "student") window.location.href = "student_dashboard.html";
    else if (role === "parent") window.location.href = "parent_dashboard.html";
    else alert("Please select a role.");
  } else {
    alert("❌ Incorrect CAPTCHA. Please try again.");
    generateCaptcha();
    captchaInput.value = "";
  }
});

// Initialize
generateCaptcha();
