// Handle Profile Form
const profileForm = document.getElementById("profileForm");
const profileMsg = document.getElementById("profileMsg");

profileForm.addEventListener("submit", e => {
  e.preventDefault();

  const email = document.getElementById("parentEmail").value.trim();
  const contact = document.getElementById("parentContact").value.trim();

  if (email && contact) {
    profileMsg.textContent = "✅ Profile updated successfully!";
    profileMsg.style.color = "green";
  } else {
    profileMsg.textContent = "❌ Please fill all editable fields.";
    profileMsg.style.color = "red";
  }

  setTimeout(() => (profileMsg.textContent = ""), 3000);
});

// Handle Password Change
const passForm = document.getElementById("passwordForm");
const passMsg = document.getElementById("passMsg");

passForm.addEventListener("submit", e => {
  e.preventDefault();

  const oldPass = document.getElementById("oldPass").value.trim();
  const newPass = document.getElementById("newPass").value.trim();
  const confirmPass = document.getElementById("confirmPass").value.trim();

  if (!oldPass || !newPass || !confirmPass) {
    passMsg.textContent = "❌ All fields are required.";
    passMsg.style.color = "red";
  } else if (newPass !== confirmPass) {
    passMsg.textContent = "⚠️ New passwords do not match.";
    passMsg.style.color = "orange";
  } else {
    passMsg.textContent = "✅ Password updated successfully!";
    passMsg.style.color = "green";
    passForm.reset();
  }

  setTimeout(() => (passMsg.textContent = ""), 3000);
});
