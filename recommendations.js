// Handles quiz data and redirects to results page

document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nickname = document.getElementById("nickname").value;
  const bias = document.getElementById("bias").value;

  const content = [];
  document.querySelectorAll('input[type="checkbox"]:checked')
    .forEach(c => content.push(c.value));

  const mood = document.querySelector('input[name="mood"]:checked').value;

  const quizData = { nickname, bias, content, mood };
  localStorage.setItem("tokkinetQuiz", JSON.stringify(quizData));

  window.location.href = "results.html";
});