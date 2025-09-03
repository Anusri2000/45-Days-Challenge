function getLetterGrade(score) {
  const gradeMap = [
    { min: 90, grade: "A" },
    { min: 80, grade: "B" },
    { min: 70, grade: "C" },
    { min: 60, grade: "D" },
    { min: 0, grade: "F" },
  ];
  for (let g of gradeMap) {
    if (score >= g.min) return g.grade;
  }
  return "Invalid";
}

function showGrade() {
  const score = Number(document.getElementById("score").value);
  const grade = getLetterGrade(score);
  document.getElementById("result").textContent =
    grade === "Invalid"
      ? "Please enter a valid score (0-100)."
      : `Your Grade: ${grade}`;

  // Log a few samples
  console.log("Sample Scores:");
  [95, 82, 74, 61, 45].forEach((s) => {
    console.log(`${s} → ${getLetterGrade(s)}`);
  });
}
