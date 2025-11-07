// Handle contact form submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("confirmationMsg").textContent = 
    "✅ Thank you! Your message has been sent successfully.";
  this.reset();
});

// Notification bell
document.querySelector(".bell").addEventListener("click", () => {
  alert("No new notifications.");
});
