const data = JSON.parse(localStorage.getItem("tokkinetQuiz")); // Retrieve quiz data from localStorage
const container = document.getElementById("explanations"); //get the container element to display explanations

// explanations info
const explanationInfo = {
  song: {
    Nostalgic: (bias) => `Ditto has a soft, dreamy, and retro sound that allows listeners to revisit warm memories from the past.`,
    Energetic: (bias) => `Hype Boy is an upbeat, exciting, and danceable song that is perfect for a high-energy playlist which is sure to get listeners moving.`,
    Chill: (bias) => `Cool With You has a relaxed tempo and mellow vocals which is ideal for background music, studying, or just unwinding.`
  },
  performance: {
    Nostalgic: (bias) => `This performance video captures Attention’s retro energy with calm pacing and warm tones. The choreography feels slightly reflective and has a thoughtful performance style.`,
    Energetic: (bias) => `The performance version of ETA is dynamic, fast-moving, and exciting. The choreography is lively, giving the viewer a high-energy experience.`,
    Chill: (bias) => `This performance is soft, smooth, and playful in a light, relaxed way. It’s  mellow, soothing, and perfect for relaxed viewing.`
  },
  youtube: {
    Nostalgic: (bias) => `This video shows the members in a café interacting casually. It gives off warm, personal vibes, like catching up with friends or reminiscing over simple moments.`,
    Energetic: (bias) => `Behind-the-scenes content for “Super Shy” is lively and full of energy. The members are actively dancing, laughing, and filming with vibrant movement.`,
    Chill: (bias) => `This episode captures the members in a pajama party. The interactions are soft and friendly with gentle conversation and a cozy vibe.`
  }
};

// generate explanations for each category based on the quiz data
data.content.forEach(type => {
  const explanation = explanationInfo[type][data.mood](data.bias);
  container.innerHTML += `<div class="explanation-container"><p>${explanation}</p></div>`;
});