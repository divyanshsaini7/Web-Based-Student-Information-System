const modal = document.getElementById("courseModal");
const addBtn = document.getElementById("addCourseBtn");
const closeBtn = document.querySelector(".close");
const form = document.getElementById("courseForm");
const tableBody = document.querySelector("#courseTable tbody");
const searchInput = document.getElementById("searchInput");

let courses = [
  { id: "C101", name: "Mathematics", assigned: "Class 10A" },
  { id: "C102", name: "Science", assigned: "Class 10B" },
  { id: "C103", name: "English", assigned: "Class 9A" }
];

let editingIndex = -1;

// Render table
function renderCourses() {
  tableBody.innerHTML = "";
  courses.forEach((course, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${course.id}</td>
      <td>${course.name}</td>
      <td>${course.assigned}</td>
      <td>
        <button class="action-btn edit-btn" onclick="editCourse(${index})">Edit</button>
        <button class="action-btn delete-btn" onclick="deleteCourse(${index})">Delete</button>
      </td>`;
    tableBody.appendChild(row);
  });
}

renderCourses();

// Open modal for add
addBtn.onclick = () => {
  document.getElementById("modalTitle").textContent = "Add Course";
  form.reset();
  editingIndex = -1;
  modal.style.display = "block";
};

// Close modal
closeBtn.onclick = () => (modal.style.display = "none");
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};

// Add/Edit course
form.onsubmit = (e) => {
  e.preventDefault();
  const id = document.getElementById("courseId").value.trim();
  const name = document.getElementById("courseName").value.trim();
  const assigned = document.getElementById("assignedClass").value.trim();

  const courseData = { id, name, assigned };

  if (editingIndex === -1) {
    courses.push(courseData);
  } else {
    courses[editingIndex] = courseData;
  }

  modal.style.display = "none";
  renderCourses();
};

// Edit
function editCourse(index) {
  editingIndex = index;
  const c = courses[index];
  document.getElementById("modalTitle").textContent = "Edit Course";
  document.getElementById("courseId").value = c.id;
  document.getElementById("courseName").value = c.name;
  document.getElementById("assignedClass").value = c.assigned;
  modal.style.display = "block";
}

// Delete
function deleteCourse(index) {
  if (confirm("Are you sure you want to delete this course?")) {
    courses.splice(index, 1);
    renderCourses();
  }
}

// Search filter
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  document.querySelectorAll("#courseTable tbody tr").forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(query) ? "" : "none";
  });
});
