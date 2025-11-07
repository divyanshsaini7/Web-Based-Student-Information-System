// Sample notices (you can replace with data from backend later)
const notices = [
  {
    title: "PTM Scheduled for Nov 10",
    message: "Dear Parents, the Parent-Teacher Meeting will be held on November 10 at 10:00 AM in the school auditorium."
  },
  {
    title: "Winter Uniform Notice",
    message: "All students are required to wear the winter uniform starting from November 15."
  },
  {
    title: "Annual Function Update",
    message: "The Annual Function will be conducted on December 20. Rehearsals will begin next week."
  }
];

// Display Notices
const noticesList = document.getElementById("noticesList");
notices.forEach(n => {
  const card = document.createElement("div");
  card.classList.add("notice-card");
  card.innerHTML = `
    <h3>${n.title}</h3>
    <p>${n.message}</p>
  `;
  noticesList.appendChild(card);
});

// Handle Feedback Form
const form = document.getElementById("feedbackForm");
const status = document.getElementById("feedbackStatus");

form.addEventListener("submit", e => {
  e.preventDefault();
  const subject = document.getElementById("feedbackSubject").value.trim();
  const message = document.getElementById("feedbackMessage").value.trim();

  if (subject && message) {
    status.textContent = "✅ Feedback submitted successfully!";
    status.style.color = "green";
    form.reset();
  } else {
    status.textContent = "❌ Please fill in all fields.";
    status.style.color = "red";
  }

  setTimeout(() => (status.textContent = ""), 3000);
});
