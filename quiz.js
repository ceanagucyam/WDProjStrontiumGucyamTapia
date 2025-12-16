// This is the user's initial score
let scores = {
    minji: 0,
    hanni: 0,
    danielle: 0,
    haerin: 0,
    hyein: 0
};

//This is what will be shown on the result page, which includes texts and images for each member
const resultText = {
    minji: "You are Minji! Calm, elegant, organized, and reliable 💙",
    hanni: "You are Hanni! Bright, funny, energetic, and creative 💗",
    danielle: "You are Danielle! Cheerful, warm, and full of sunshine 💛",
    haerin: "You are Haerin! Soft, quiet, mysterious, and cute 💚",
    hyein: "You are Hyein! Thoughtful, curious, artistic, and stylish 💜"
};

const resultImages = {
    minji: "public/assets/minji-result.png",
    hanni: "public/assets/hanni-result.png",
    danielle: "public/assets/danielle-result.png",
    haerin: "public/assets/haerin-result.png",
    hyein: "public/assets/hyein-result.png"
};

// This function shows the specified page while hiding the others
function goToPage(num) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("visible"));

    if (num === "result") {
        showResult();
        document.getElementById("page-result").classList.add("visible");
    } else {
        document.getElementById("page-" + num).classList.add("visible");
    }
}

// When the user selects an answer, this function updates the score and goes to the next page
function selectAnswer(member, nextPage) {
    scores[member]++;
    goToPage(nextPage);
}

// This function calculates and displays the final result
function showResult() {
    let winner = Object.keys(scores).reduce((a, b) =>
        scores[a] > scores[b] ? a : b
    );

    document.getElementById("result-text").textContent = resultText[winner];
    document.getElementById("result-image").src = resultImages[winner];
}

// This function restarts the quiz by resetting the scores and going back to the start pages
function restartQuiz() {
    scores = { minji: 0, hanni: 0, danielle: 0, haerin: 0, hyein: 0 };
    goToPage("start");
}