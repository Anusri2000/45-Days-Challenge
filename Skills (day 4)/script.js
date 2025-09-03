const skills = [
  { name: "HTML", proficiency: "Advanced" },
  { name: "CSS", proficiency: "Intermediate" },
  { name: "JavaScript", proficiency: "Beginner" },
];

function displaySkills(skillsArray) {
  const container = document.getElementById("skills-list");
  container.innerHTML = skillsArray
    .map((skill) => {
      const level = skill.proficiency.toLowerCase();
      return `
          <div class="skill">
            <span>${skill.name}</span>
            <span class="badge ${level}">${skill.proficiency}</span>
          </div>
        `;
    })
    .join("");
}

// Handle form submit
document
  .getElementById("skill-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("skill-name").value.trim();
    const proficiency = document.getElementById("skill-level").value;

    if (name && proficiency) {
      skills.push({ name, proficiency });
      displaySkills(skills);
      this.reset(); // clear form
    }
  });

// Initial display
displaySkills(skills);
