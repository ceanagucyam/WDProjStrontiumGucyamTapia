document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nickname = document.getElementById("nickname").value;
  const bias = document.getElementById("bias").value;
  const content = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(c => c.value);
  const mood = document.querySelector('input[name="mood"]:checked')?.value || "Neutral";

  // Create new entry object
  const newEntry = {
    id: Date.now(), // Unique ID for deleting
    nickname,
    bias,
    content,
    mood,
    date: new Date().toLocaleDateString()
  };

  // Get existing list or create empty array
  const existingEntries = JSON.parse(localStorage.getItem("tokkinetList")) || [];
  
  // Push new entry (CREATE)
  existingEntries.push(newEntry);
  localStorage.setItem("tokkinetList", JSON.stringify(existingEntries));

  // Redirect to list view
  window.location.href = "delete.html";
});