const BADGES = [
  {
    id: "nightmaresurvivor",
    name: "Nightmare Survivor",
    description: "Beat Nightmare mode.",
    icon: "./assets/badges/nightmaresurvivor.png",
    rarity: "epic"
  },
  {
    id: "wordwhisperer",
    name: "Word Whisperer",
    description: "Guess a hangman word in under 10 guesses.",
    icon: "./assets/badges/wordwhisperer.png",
    rarity: "rare"
  },
  {
    id: "wordbuilder",
    name: "Word Builder",
    description: "Solve 10 decoding puzzles.",
    icon: "./assets/badges/wordbuilder.png",
    rarity: "rare"
  },
  {
    id: "constellationMaker",
    name: "Constellation Maker",
    description: "Unlock 10 badges.",
    icon: "./assets/badges/constellationMaker.png",
    rarity: "epic"
  },
  {
    id: "masterofwords",
    name: "Master of Words",
    description: "Unlock every badge.",
    icon: "./assets/badges/masterofwords.png",
    rarity: "legendary"
  },
  {
    id: "galacticChampion",
    name: "Galactic Champion",
    description: "Unlock 20 badges.",
    icon: "./assets/badges/galacticChampion.png",
    rarity: "legendary"
  },
  {
    id: "sebbysFavorite",
    name: "Sebby's Favorite",
    description: "Unlock a secret Sebby-related achievement.",
    icon: "./assets/badges/sebbysFavorite.png",
    rarity: "legendary"
  },
  {
    id: "luckyComet",
    name: "Lucky Comet",
    description: "Unlock a rare surprise badge.",
    icon: "./assets/badges/luckyComet.png",
    rarity: "epic"
  },
  {
    id: "cosmicPatience",
    name: "Cosmic Patience",
    description: "Take a very long time to solve a puzzle.",
    icon: "./assets/badges/cosmicPatience.png",
    rarity: "rare"
  },
  {
    id: "thevoidstaresback",
    name: "The Void Stares Back",
    description: "Lose Nightmare mode multiple times.",
    icon: "./assets/badges/thevoidstaresback.png",
    rarity: "epic"
  },
  {
    id: "stargazer",
    name: "Stargazer",
    description: "Stay on the menu long enough to unlock this.",
    icon: "./assets/badges/stargazer.png",
    rarity: "rare"
  },
  {
    id: "keeperofnonsense",
    name: "Keeper of Nonsense",
    description: "Learn all Sebby words.",
    icon: "./assets/badges/keeperofnonsense.png",
    rarity: "legendary"
  },
  {
    id: "gobbledygookguru",
    name: "Gobbledygook Guru",
    description: "Master especially weird words.",
    icon: "./assets/badges/gobbledygookguru.png",
    rarity: "epic"
  },
  {
    id: "ridiculousreader",
    name: "Ridiculous Reader",
    description: "Learn 10 weird words.",
    icon: "./assets/badges/ridiculousreader.png",
    rarity: "rare"
  },
  {
    id: "absurdityapprentice",
    name: "Absurdity Apprentice",
    description: "Learn 25 weird words.",
    icon: "./assets/badges/absurdityapprentice.png",
    rarity: "epic"
  },
  {
    id: "cosmicEscape",
    name: "Cosmic Escape",
    description: "Win multiple hard Hangman rounds.",
    icon: "./assets/badges/cosmicEscape.png",
    rarity: "epic"
  },
  {
    id: "flawlessguessing",
    name: "Flawless Guessing",
    description: "Win Hangman with no wrong guesses.",
    icon: "./assets/badges/flawlessguessing.png",
    rarity: "epic"
  },
  {
    id: "lastchancehero",
    name: "Last Chance Hero",
    description: "Win Hangman with 1 life left.",
    icon: "./assets/badges/lastchancehero.png",
    rarity: "rare"
  },
  {
    id: "jabberwockTamer",
    name: "Jabberwock Tamer",
    description: "Solve one of the hardest weird words.",
    icon: "./assets/badges/jabberwockTamer.png",
    rarity: "legendary"
  },
  {
    id: "morphologyMaster",
    name: "Morphology Master",
    description: "Solve 25 decoding puzzles.",
    icon: "./assets/badges/morphologyMaster.png",
    rarity: "epic"
  },
  {
    id: "SyllableScout",
    name: "Syllable Scout",
    description: "Solve your first decoding puzzle.",
    icon: "./assets/badges/SyllableScout.png",
    rarity: "common"
  },
  {
    id: "patternSeeker",
    name: "Pattern Seeker",
    description: "Win 5 memory rounds.",
    icon: "./assets/badges/patternSeeker.png",
    rarity: "rare"
  },
  {
    id: "lightningMind",
    name: "Lightning Mind",
    description: "Win memory in under 60 seconds.",
    icon: "./assets/badges/lightningMind.png",
    rarity: "epic"
  },
  {
    id: "perfectRecall",
    name: "Perfect Recall",
    description: "Win memory with 0 mismatches.",
    icon: "./assets/badges/perfectRecall.png",
    rarity: "epic"
  },
  {
    id: "sebbyApproved",
    name: "Sebby Approved!",
    description: "Beat Sebby's Level.",
    icon: "./assets/badges/sebbyApproved.png",
    rarity: "legendary"
  },
  {
    id: "memorySpark",
    name: "Memory Spark",
    description: "Win memory once.",
    icon: "./assets/badges/memorySpark.png",
    rarity: "common"
  }
];


function getUnlockedBadges() {
  return JSON.parse(localStorage.getItem("unlockedBadges") || "[]");
}

function saveUnlockedBadges(badges) {
  localStorage.setItem("unlockedBadges", JSON.stringify(badges));
}

function hasBadge(id) {
  return getUnlockedBadges().includes(id);
}

function unlockBadge(id) {
  const unlocked = getUnlockedBadges();
  if (unlocked.includes(id)) return;

  unlocked.push(id);
  saveUnlockedBadges(unlocked);
  showBadgePopup(id);
  checkMetaBadges();
}

function checkMetaBadges() {
  const unlocked = getUnlockedBadges();

  if (unlocked.length >= 10 && !unlocked.includes("constellationMaker")) {
    unlocked.push("constellationMaker");
  }

  if (unlocked.length >= 20 && !unlocked.includes("galacticChampion")) {
    unlocked.push("galacticChampion");
  }

  if (unlocked.length === BADGES.length - 1 && !unlocked.includes("masterofwords")) {
    unlocked.push("masterofwords");
  }

  saveUnlockedBadges(unlocked);
}

function showBadgePopup(id) {
  const badge = BADGES.find(b => b.id === id);
  if (!badge) return;

  const popup = document.createElement("div");
  popup.className = "badge-popup";
  popup.innerHTML = `
    <img src="${badge.icon}" alt="${badge.name}">
    <div>
      <strong>Badge Unlocked!</strong>
      <div>${badge.name}</div>
    </div>
  `;

  document.body.appendChild(popup);

  setTimeout(() => {
    popup.classList.add("show");
  }, 20);

  setTimeout(() => {
    popup.classList.remove("show");
    setTimeout(() => popup.remove(), 300);
  }, 3000);
}