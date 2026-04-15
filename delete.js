// Function to Render the List (READ)
function displayRecommendations() {
  const listContainer = document.getElementById("resultsList");
  const entries = JSON.parse(localStorage.getItem("tokkinetList")) || [];

  if (entries.length === 0) {
    listContainer.innerHTML = "<p style='text-align:center;'>No recommendations saved yet!</p>";
    return;
  }

  listContainer.innerHTML = entries.map(entry => `
    <div class="recommendation-item">
      <div>
        <strong>${entry.nickname}'s Pick:</strong> ${entry.bias} style<br>
        <small>Mood: ${entry.mood} | Type: ${entry.content.join(", ")}</small>
      </div>
      <button class="delete-btn" onclick="deleteEntry(${entry.id})">DELETE</button>
    </div>
  `).join('');
}

// Function to Remove Data (DELETE)
function deleteEntry(id) {
  let entries = JSON.parse(localStorage.getItem("tokkinetList")) || [];
  
  // Filter out the item with the matching ID
  entries = entries.filter(entry => entry.id !== id);
  
  // Save back to localStorage
  localStorage.setItem("tokkinetList", JSON.stringify(entries));
  
  // Refresh the display
  displayRecommendations();
}

// Initialize display on page load
displayRecommendations();