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
    id: "constellationmaker",
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
    id: "galacticchampion",
    name: "Galactic Champion",
    description: "Unlock 20 badges.",
    icon: "./assets/badges/galacticChampion.png",
    rarity: "legendary"
  },
  {
    id: "sebbysfavorite",
    name: "Sebby's Favorite",
    description: "Unlock a secret Sebby-related achievement.",
    icon: "./assets/badges/sebbysFavorite.png",
    rarity: "legendary"
  },
  {
    id: "luckycomet",
    name: "Lucky Comet",
    description: "Unlock a rare surprise badge.",
    icon: "./assets/badges/luckyComet.png",
    rarity: "epic"
  },
  {
    id: "cosmicpatience",
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
    id: "cosmicescape",
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
    id: "jabberwocktamer",
    name: "Jabberwock Tamer",
    description: "Solve one of the hardest weird words.",
    icon: "./assets/badges/jabberwockTamer.png",
    rarity: "legendary"
  },
  {
    id: "morphologymaster",
    name: "Morphology Master",
    description: "Solve 25 decoding puzzles.",
    icon: "./assets/badges/morphologyMaster.png",
    rarity: "epic"
  },
  {
    id: "syllablescout",
    name: "Syllable Scout",
    description: "Solve your first decoding puzzle.",
    icon: "./assets/badges/SyllableScout.png",
    rarity: "common"
  },
  {
    id: "patternseeker",
    name: "Pattern Seeker",
    description: "Win 5 memory rounds.",
    icon: "./assets/badges/patternSeeker.png",
    rarity: "rare"
  },
  {
    id: "lightningmind",
    name: "Lightning Mind",
    description: "Win memory in under 60 seconds.",
    icon: "./assets/badges/lightningMind.png",
    rarity: "epic"
  },
  {
    id: "perfectrecall",
    name: "Perfect Recall",
    description: "Win memory with 0 mismatches.",
    icon: "./assets/badges/perfectRecall.png",
    rarity: "epic"
  },
  {
    id: "sebbyapproved",
    name: "Sebby Approved!",
    description: "Beat Sebby's Level.",
    icon: "./assets/badges/sebbyApproved.png",
    rarity: "legendary"
  },
  {
    id: "memoryspark",
    name: "Memory Spark",
    description: "Win memory once.",
    icon: "./assets/badges/memorySpark.png",
    rarity: "common"
  }
];

function normalizeBadgeId(id) {
  return String(id).trim().toLowerCase();
}

function getUnlockedBadges() {
  return JSON.parse(localStorage.getItem("unlockedBadges") || "[]")
    .map(normalizeBadgeId);
}

function saveUnlockedBadges(badges) {
  const cleaned = [...new Set(badges.map(normalizeBadgeId))];
  localStorage.setItem("unlockedBadges", JSON.stringify(cleaned));
}

function hasBadge(id) {
  return getUnlockedBadges().includes(normalizeBadgeId(id));
}

function getStats() {
  return JSON.parse(localStorage.getItem("gameStats") || "{}");
}

function saveStats(stats) {
  localStorage.setItem("gameStats", JSON.stringify(stats));
}

function incrementStat(statName, amount = 1) {
  const stats = getStats();
  stats[statName] = (stats[statName] || 0) + amount;
  saveStats(stats);
  return stats[statName];
}

function setStatMax(statName, value) {
  const stats = getStats();
  stats[statName] = Math.max(stats[statName] || 0, value);
  saveStats(stats);
  return stats[statName];
}

function unlockBadge(id) {
  const normalizedId = normalizeBadgeId(id);
  const unlocked = getUnlockedBadges();

  if (unlocked.includes(normalizedId)) return;

  unlocked.push(normalizedId);
  saveUnlockedBadges(unlocked);
  showBadgePopup(normalizedId);
  checkMetaBadges();
}

function checkMetaBadges() {
  const unlocked = getUnlockedBadges();

  if (unlocked.length >= 10 && !unlocked.includes("constellationmaker")) {
    unlocked.push("constellationmaker");
  }

  if (unlocked.length >= 20 && !unlocked.includes("galacticchampion")) {
    unlocked.push("galacticchampion");
  }

  if (unlocked.length >= BADGES.length - 1 && !unlocked.includes("masterofwords")) {
    unlocked.push("masterofwords");
  }

  saveUnlockedBadges(unlocked);
}

function showBadgePopup(id) {
  const normalizedId = normalizeBadgeId(id);
  const badge = BADGES.find(b => normalizeBadgeId(b.id) === normalizedId);
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