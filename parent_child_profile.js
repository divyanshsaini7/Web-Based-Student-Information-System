// Example: Load dynamic data (simulated)
document.addEventListener("DOMContentLoaded", () => {
  const childData = {
    name: "Aarav Sharma",
    rollNo: "23",
    gender: "Male",
    dob: "15 March 2012",
    class: "7",
    section: "A",
    subjects: ["English", "Mathematics", "Science", "Social Studies", "Computer Science", "Hindi"]
  };

  document.getElementById("childName").textContent = childData.name;
  document.getElementById("rollNo").textContent = childData.rollNo;
  document.getElementById("gender").textContent = childData.gender;
  document.getElementById("dob").textContent = childData.dob;
  document.getElementById("class").textContent = childData.class;
  document.getElementById("section").textContent = childData.section;

  const subjectList = document.getElementById("subjectList");
  subjectList.innerHTML = "";
  childData.subjects.forEach(sub => {
    const li = document.createElement("li");
    li.textContent = sub;
    subjectList.appendChild(li);
  });
});
