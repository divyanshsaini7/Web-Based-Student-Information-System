// Handle Class Creation
const classForm = document.getElementById("classForm");
const classTable = document.getElementById("classTable").querySelector("tbody");

classForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("className").value;
  const teacher = document.getElementById("classTeacher").value;

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${name}</td>
    <td>${teacher}</td>
    <td><button onclick="deleteRow(this)">Delete</button></td>
  `;
  classTable.appendChild(row);

  classForm.reset();
});

// Delete Class Row
function deleteRow(button) {
  button.parentElement.parentElement.remove();
}

// Assign Students to Class (demo)
const assignForm = document.getElementById("assignForm");

assignForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const student = document.getElementById("studentName").value;
  const assignedClass = document.getElementById("assignClass").value;

  alert(`✅ ${student} has been assigned to ${assignedClass}.`);
  assignForm.reset();
});
