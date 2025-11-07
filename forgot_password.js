// Forgot Password Logic
const form = document.getElementById("forgotForm");
const emailInput = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = emailInput.value.trim();

  if (email === "") {
    message.textContent = "❌ Please enter your registered email.";
    message.className = "message error";
    message.style.display = "block";
    return;
  }

  // Simple email format check
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    message.textContent = "❌ Please enter a valid email address.";
    message.className = "message error";
    message.style.display = "block";
    return;
  }

  // Simulate sending reset link
  message.textContent = "✅ A password reset link has been sent to your email.";
  message.className = "message success";
  message.style.display = "block";

  // Optionally disable button after sending
  const btn = document.querySelector(".btn-send");
  btn.disabled = true;
  btn.style.background = "#9ca3af";
  btn.style.cursor = "not-allowed";

  // Clear field after a short delay
  setTimeout(() => {
    emailInput.value = "";
  }, 2000);
});
