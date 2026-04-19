document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting normally

  // gather quiz data
  const nickname = document.getElementById("nickname").value;
  const bias = document.getElementById("bias").value;
  const content = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(c => c.value);
  const mood = document.querySelector('input[name="mood"]:checked')?.value || "Neutral";

  const quizData = { nickname, bias, content, mood };
  localStorage.setItem("tokkinetQuiz", JSON.stringify(quizData));

  const newEntry = {
    id: Date.now(),
    nickname,
    bias,
    content,
    mood,
    date: new Date().toLocaleDateString()
  };

// save the new entry to localStorage
  let existingEntries = JSON.parse(localStorage.getItem("tokkinetList")) || [];

  existingEntries.push(newEntry);

  localStorage.setItem("tokkinetList", JSON.stringify(existingEntries));

  console.log("Saved List:", existingEntries); // debugging log to verify data is saved correctly

  // redirect to results page
  window.location.href = "results.html";
});