// Sample data
let students = [
  { id: 1, name: "Aarav Sharma", class: "10-A", attendance: 92, marks: 88, contact: "aarav@example.com" },
  { id: 2, name: "Priya Mehta", class: "9-B", attendance: 85, marks: 91, contact: "priya@example.com" },
  { id: 3, name: "Rohan Gupta", class: "10-B", attendance: 78, marks: 82, contact: "rohan@example.com" },
];

const tableBody = document.querySelector("#studentTable tbody");
const searchInput = document.getElementById("searchInput");
const modal = document.getElementById("studentModal");
const addBtn = document.getElementById("addBtn");
const cancelBtn = document.getElementById("cancelBtn");
const form = document.getElementById("studentForm");
const modalTitle = document.getElementById("modalTitle");

let editingId = null;

// Display students
function renderTable(data) {
  tableBody.innerHTML = "";
  data.forEach((s) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${s.id}</td>
      <td>${s.name}</td>
      <td>${s.class}</td>
      <td>${s.attendance}%</td>
      <td>${s.marks}%</td>
      <td>${s.contact}</td>
      <td>
        <button class="action-btn edit-btn" onclick="editStudent(${s.id})">Edit</button>
        <button class="action-btn delete-btn" onclick="deleteStudent(${s.id})">Delete</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

renderTable(students);

// Search filter
searchInput.addEventListener("keyup", () => {
  const term = searchInput.value.toLowerCase();
  const filtered = students.filter(
    (s) =>
      s.name.toLowerCase().includes(term) ||
      s.class.toLowerCase().includes(term) ||
      String(s.id).includes(term)
  );
  renderTable(filtered);
});

// Open modal for Add
addBtn.addEventListener("click", () => {
  modalTitle.textContent = "Add Student";
  form.reset();
  editingId = null;
  modal.style.display = "flex";
});

// Close modal
cancelBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Add/Edit Submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newStudent = {
    id: editingId || students.length + 1,
    name: document.getElementById("name").value,
    class: document.getElementById("class").value,
    attendance: parseInt(document.getElementById("attendance").value),
    marks: parseInt(document.getElementById("marks").value),
    contact: document.getElementById("contact").value,
  };

  if (editingId) {
    const index = students.findIndex((s) => s.id === editingId);
    students[index] = newStudent;
  } else {
    students.push(newStudent);
  }

  renderTable(students);
  modal.style.display = "none";
});

// Edit function
function editStudent(id) {
  const s = students.find((stu) => stu.id === id);
  editingId = id;
  modalTitle.textContent = "Edit Student";
  document.getElementById("name").value = s.name;
  document.getElementById("class").value = s.class;
  document.getElementById("attendance").value = s.attendance;
  document.getElementById("marks").value = s.marks;
  document.getElementById("contact").value = s.contact;
  modal.style.display = "flex";
}

// Delete function
function deleteStudent(id) {
  if (confirm("Are you sure you want to delete this student?")) {
    students = students.filter((s) => s.id !== id);
    renderTable(students);
  }
}

// Close modal on outside click
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
