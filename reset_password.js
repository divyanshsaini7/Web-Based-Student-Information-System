// Reset Password Logic
const form = document.getElementById("resetForm");
const newPass = document.getElementById("newPassword");
const confirmPass = document.getElementById("confirmPassword");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const newPassword = newPass.value.trim();
  const confirmPassword = confirmPass.value.trim();

  // Validation checks
  if (newPassword === "" || confirmPassword === "") {
    showMessage("❌ Please fill out both fields.", "error");
    return;
  }

  if (newPassword.length < 6) {
    showMessage("❌ Password must be at least 6 characters long.", "error");
    return;
  }

  if (newPassword !== confirmPassword) {
    showMessage("❌ Passwords do not match. Try again.", "error");
    return;
  }

  // Success message
  showMessage("✅ Password reset successful! Redirecting to login...", "success");

  // Disable button temporarily
  const btn = document.querySelector(".btn-reset");
  btn.disabled = true;
  btn.style.background = "#9ca3af";
  btn.style.cursor = "not-allowed";

  // Simulate redirect to login page after 2 seconds
  setTimeout(() => {
    window.location.href = "login.html";
  }, 2000);
});

// Show message function
function showMessage(text, type) {
  message.textContent = text;
  message.className = `message ${type}`;
  message.style.display = "block";
}
