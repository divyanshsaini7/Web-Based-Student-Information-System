// Notice data
const notices = [
  {
    title: "Mid-Term Exam Schedule Released",
    date: "2025-02-15",
    category: "exam",
    content: "The mid-term exam timetable for all classes has been released. Students can check the schedule on the notice board or the SIS portal under 'Timetable'."
  },
  {
    title: "Annual Sports Meet 2025",
    date: "2025-01-28",
    category: "event",
    content: "The Annual Sports Meet will be held from February 10 to February 12. All students are encouraged to participate. Registration closes on February 5."
  },
  {
    title: "Campus Cleanliness Drive",
    date: "2025-02-01",
    category: "general",
    content: "Join the campus cleanliness drive on February 3 at 9 AM in front of the main building. Let’s make our campus greener and cleaner!"
  },
  {
    title: "Practical Exams Notice",
    date: "2025-02-18",
    category: "exam",
    content: "Practical exams will be conducted between February 25 and March 1. All students must check their respective lab timings."
  }
];

const noticeList = document.getElementById("noticeList");
const filterDate = document.getElementById("filterDate");
const filterCategory = document.getElementById("filterCategory");
const resetFilters = document.getElementById("resetFilters");
const modal = document.getElementById("noticeModal");
const modalTitle = document.getElementById("modalTitle");
const modalDate = document.getElementById("modalDate");
const modalCategory = document.getElementById("modalCategory");
const modalBody = document.getElementById("modalBody");
const closeModal = document.querySelector(".close");

// Render notices
function renderNotices(filteredNotices = notices) {
  noticeList.innerHTML = "";
  if (filteredNotices.length === 0) {
    noticeList.innerHTML = "<p>No notices found for selected filters.</p>";
    return;
  }

  filteredNotices.forEach(n => {
    const div = document.createElement("div");
    div.classList.add("notice-card");
    div.innerHTML = `
      <h3>${n.title}</h3>
      <small>${n.date} | Category: ${n.category}</small>
      <p>${n.content.substring(0, 80)}...</p>
      <a href="#" class="read-btn" data-title="${n.title}">Read Full Notice</a>
    `;
    noticeList.appendChild(div);
  });
}

// Filter logic
function applyFilters() {
  const dateVal = filterDate.value;
  const categoryVal = filterCategory.value;

  const filtered = notices.filter(n => {
    const dateMatch = dateVal ? n.date === dateVal : true;
    const categoryMatch = categoryVal === "all" ? true : n.category === categoryVal;
    return dateMatch && categoryMatch;
  });

  renderNotices(filtered);
}

filterDate.addEventListener("change", applyFilters);
filterCategory.addEventListener("change", applyFilters);
resetFilters.addEventListener("click", () => {
  filterDate.value = "";
  filterCategory.value = "all";
  renderNotices();
});

// Modal handling
noticeList.addEventListener("click", e => {
  if (e.target.classList.contains("read-btn")) {
    e.preventDefault();
    const title = e.target.getAttribute("data-title");
    const notice = notices.find(n => n.title === title);

    modalTitle.textContent = notice.title;
    modalDate.textContent = `Date: ${notice.date}`;
    modalCategory.textContent = `Category: ${notice.category}`;
    modalBody.textContent = notice.content;

    modal.style.display = "flex";
  }
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});

// Initial load
renderNotices();
