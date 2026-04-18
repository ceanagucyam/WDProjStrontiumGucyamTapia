console.log("delete.js loaded");

function displayRecommendations() {
  const listContainer = document.getElementById("resultsList");

  if (!listContainer) {
    console.error("resultsList NOT FOUND");
    return;
  }

  const entries = JSON.parse(localStorage.getItem("tokkinetList")) || [];

  console.log("Loaded entries:", entries);

  if (entries.length === 0) {
    listContainer.innerHTML = "<p style='text-align:center;'>No recommendations saved yet!</p>";
    return;
  }

  const contentInfo = {
    song: {
      Nostalgic: { title: "Ditto", link: "https://open.spotify.com/track/3r8RuvgbX9s7ammBn07D3W" },
      Energetic: { title: "Hype Boy", link: "https://open.spotify.com/track/0a4MMyCrzT0En247IhqZbD" },
      Chill: { title: "Cool With You", link: "https://open.spotify.com/track/02wk5BttM0QL38ERjLPQJB" }
    },
    performance: {
      Nostalgic: { title: "Attention Performance", link: "https://youtu.be/x8RIixqumUc" },
      Energetic: { title: "ETA Performance", link: "https://youtu.be/s4Ow55AbdCg" },
      Chill: { title: "Bubble Gum Performance", link: "https://youtu.be/90Jqld7le-k" }
    },
    youtube: {
      Nostalgic: { title: "NewJeans Cafe", link: "https://youtu.be/HzTEsxk3PG4" },
      Energetic: { title: "Super Shy Behind", link: "https://youtu.be/OHA7clGQ69A" },
      Chill: { title: "Pajama Party", link: "https://youtu.be/gxVxGSoj7Y0" }
    }
  };

  listContainer.innerHTML = entries.map(entry => {

    const typesHTML = entry.content.map(type => {
      const item = contentInfo[type]?.[entry.mood];

      if (!item) return type;
      
      const labelMap = {
        song: "Song",
        performance: "Performance",
        youtube: "YouTube"
      };
      
      const label = labelMap[type] || type;
      
      return `<a href="${item.link}" target="_blank">${label}</a>`;
    }).join(", ");


    return `
      <div class="recommendation-item">
        <div>
          <strong>${entry.nickname}'s Pick:</strong> ${entry.bias}<br>
          <small>Mood: ${entry.mood}</small><br>
          <small>Type: ${typesHTML}</small>
        </div>
        <button class="delete-btn" onclick="deleteEntry(${entry.id})">DELETE</button>
      </div>
    `;
  }).join('');
}

function deleteEntry(id) {
  let entries = JSON.parse(localStorage.getItem("tokkinetList")) || [];
  entries = entries.filter(entry => entry.id !== id);
  localStorage.setItem("tokkinetList", JSON.stringify(entries));
  displayRecommendations();
}

window.onload = displayRecommendations;