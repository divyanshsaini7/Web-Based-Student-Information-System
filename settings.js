// --- Profile Save ---
document.getElementById("profileForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("✅ Profile updated successfully!");
});

// --- Password Change ---
document.getElementById("passwordForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const newPass = document.getElementById("newPassword").value;
  const confirmPass = document.getElementById("confirmPassword").value;

  if (newPass !== confirmPass) {
    alert("❌ Passwords do not match!");
    return;
  }

  alert("🔒 Password updated successfully!");
  e.target.reset();
});

// --- Preferences Save ---
document.getElementById("preferencesForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const theme = document.getElementById("themeSelect").value;
  const notifications = document.getElementById("notificationsSelect").value;

  alert(`⚙️ Preferences saved:\nTheme: ${theme}\nNotifications: ${notifications}`);
});
