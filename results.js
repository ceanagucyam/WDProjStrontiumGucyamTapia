  const data = JSON.parse(localStorage.getItem("tokkinetQuiz")); // Retrieve quiz data from localStorage

  // set greeting with user's entered nickname
  document.getElementById("greeting").textContent =
    `Hello, ${data.nickname}!`;

  //define content information for each recommendation type and mood
  const contentInfo = {
    song: {
      Nostalgic: {
        title: "Ditto",
        img: "public/assets/ditto.jpg",
        link: "https://open.spotify.com/track/3r8RuvgbX9s7ammBn07D3W?si=f06cb5cb02a14db6"
      },
      Energetic: {
        title: "Hype Boy",
        img: "public/assets/hypeboy.jpg",
        link: "https://open.spotify.com/track/0a4MMyCrzT0En247IhqZbD?si=6834205492f740c6"
      },
      Chill: {
        title: "Cool With You",
        img: "public/assets/coolwithyou.jpg",
        link: "https://open.spotify.com/track/02wk5BttM0QL38ERjLPQJB?si=b756899bc7a848fd"
      }
    },
    performance: {
      Nostalgic: {
        title: "NewJeans (뉴진스) 'Attention' Official MV (Performance ver.)",
        img: "public/assets/attention-mv.jpg",
        link: "https://youtu.be/x8RIixqumUc?si=ORFfBrwA79FnMya1"
      },
      Energetic: {
        title: "NewJeans (뉴진스) 'ETA' Official MV (Performance ver.)",
        img: "public/assets/eta-mv.jpg",
        link: "https://youtu.be/s4Ow55AbdCg?si=mzp5DIXr214zUdwI"
      },
      Chill: {
        title: "[뮤뱅 원테이크 4k] 뉴진스(NewJeans) 'Bubble Gum' Bonus Ver. @뮤직뱅크(Music Bank) 240614",
        img: "public/assets/bubblegum-mv.jpg",
        link: "https://youtu.be/90Jqld7le-k?si=Sw_6BKoIWqzNUfkr"
      }
    },
    youtube: {
      Nostalgic: {
        title: "[Jeans’ ZINE] NewJeans Cafe ☕️",
        img: "public/assets/njz-cafe.jpg",
        link: "https://youtu.be/HzTEsxk3PG4?si=Et1kzqk7l7ZX7M32"
      },
      Energetic: {
        title: "[Making Jeans] NewJeans (뉴진스) 'Super Shy' MV Behind",
        img: "public/assets/njz-supershy.jpg",
        link: "https://youtu.be/OHA7clGQ69A?si=ddbE2fbI9TQLAAzH"
      },
      Chill: {
        title: "[NewZips] Pajama Party 🌃✨ EP.6ㅣNewJeans",
        img: "public/assets/njz-pjparty.jpg",
        link: "https://youtu.be/gxVxGSoj7Y0?si=buqa9wO8wtpGWjCo"
      }
    }
  };

  const container = document.getElementById("recommendations"); //get the container element to display recommendations

  // generate recommendations for each category based on the quiz data
  data.content.forEach(type => {
    const item = contentInfo[type][data.mood];
    container.innerHTML += `
      <div class="card">
        <img src="${item.img}" alt="${item.title}">
        <a href="${item.link}" target="_blank">${item.title}</a>
      </div>
    `;
  });