// Handle Change Password Form
const passwordForm = document.getElementById("passwordForm");
passwordForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const current = document.getElementById("currentPassword").value.trim();
  const newPass = document.getElementById("newPassword").value.trim();
  const confirmPass = document.getElementById("confirmPassword").value.trim();

  if (!current || !newPass || !confirmPass) {
    alert("Please fill in all password fields.");
    return;
  }

  if (newPass.length < 6) {
    alert("New password must be at least 6 characters.");
    return;
  }

  if (newPass !== confirmPass) {
    alert("New password and confirm password do not match.");
    return;
  }

  alert("✅ Password updated successfully!");
  passwordForm.reset();
});

// Handle Profile Form (Email & Contact Editable)
const profileForm = document.getElementById("profileForm");
profileForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const contact = document.getElementById("contact").value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9+\-\s]{10,15}$/;

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!phoneRegex.test(contact)) {
    alert("Please enter a valid contact number.");
    return;
  }

  alert("✅ Profile updated successfully!");
});
