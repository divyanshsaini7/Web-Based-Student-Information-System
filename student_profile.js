// Handle profile update
document.getElementById("profileForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  alert(`✅ Profile Updated!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`);
});
