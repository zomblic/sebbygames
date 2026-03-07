function shuffle(arr){
  for(let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function pad2(n){ return String(n).padStart(2, "0"); }
function formatTime(seconds){
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${pad2(s)}`;
}

const PAIRS = [
  // Prefixes
  { term: "re-", def: "again; back" },
  { term: "dis-", def: "not; opposite of" },
  { term: "mis-", def: "wrongly; badly" },
  { term: "un-", def: "not; opposite of" },
  { term: "pre-", def: "before" },
  { term: "sub-", def: "under; below" },
  { term: "inter-", def: "between; among" },
  { term: "non-", def: "not" },
  { term: "over-", def: "too much; above" },
{ term: "under-", def: "too little; below" },
{ term: "trans-", def: "across; through" },
{ term: "super-", def: "above; beyond" },
{ term: "anti-", def: "against; opposed to" },
{ term: "auto-", def: "self" },
{ term: "bi-", def: "two" },
{ term: "tri-", def: "three" },
{ term: "semi-", def: "half; partly" },
{ term: "mid-", def: "middle" },
{ term: "ex-", def: "former; out of" },
{ term: "im-", def: "not" },
{ term: "in-", def: "not; into" },
{ term: "ir-", def: "not" },
{ term: "il-", def: "not" },
{ term: "co-", def: "together; jointly" },
{ term: "de-", def: "down; remove; reverse" },
{ term: "en-", def: "to cause to; put into" },
{ term: "fore-", def: "before; in front of" },
{ term: "post-", def: "after" },
{ term: "micro-", def: "small" },
{ term: "macro-", def: "large" },
{ term: "tele-", def: "far; distance" },
{ term: "sub-", def: "under; below" },
{ term: "pro-", def: "forward; in favor of" },

  // Suffixes
  { term: "-able", def: "capable of; able to be" },
  { term: "-ible", def: "capable of; able to be" },
  { term: "-ness", def: "state or condition of" },
  { term: "-ish", def: "having the quality of; somewhat" },
  { term: "-ous", def: "full of; having" },
  { term: "-ly", def: "in a certain way" },
  { term: "-er", def: "a person who does something" },
  { term: "-ful", def: "full of" },
  // More Suffixes
{ term: "-ment", def: "the act or result of" },
{ term: "-tion", def: "the act or process of" },
{ term: "-sion", def: "state or action" },
{ term: "-less", def: "without" },
{ term: "-est", def: "most" },
{ term: "-ed", def: "past tense" },
{ term: "-ing", def: "action happening now" },
{ term: "-ist", def: "a person who practices or believes" },
{ term: "-ship", def: "state, office, or condition" },
{ term: "-y", def: "characterized by; full of" },
{ term: "-ward", def: "in the direction of" },
{ term: "-hood", def: "state or condition of being" },
{ term: "-er", def: "a person who does something" },
{ term: "-or", def: "a person who does something" },
{ term: "-ive", def: "having the nature of" },
{ term: "-al", def: "relating to" },
{ term: "-ary", def: "relating to; connected with" },
{ term: "-ence", def: "state or quality of" },
{ term: "-ance", def: "state or quality of" },
{ term: "-ic", def: "having the nature of" },
{ term: "-ify", def: "to make; to cause to be" },
{ term: "-ize", def: "to make; to become" },
];

const boardEl = document.getElementById("board");
const movesEl = document.getElementById("moves");
const matchesEl = document.getElementById("matches");
const totalPairsEl = document.getElementById("totalPairs");
const timeEl = document.getElementById("time");
const msgEl = document.getElementById("msg");
const difficultyEl = document.getElementById("difficulty");
const newGameBtn = document.getElementById("newGame");
const peekBtn = document.getElementById("peek");

let deck = [];
let firstPick = null;
let secondPick = null;
let lock = false;

let moves = 0;
let matches = 0;
let totalPairs = 0;

let started = false;
let elapsed = 0;
let timerHandle = null;

let mismatchCount = 0;
let currentLevel = "normal";

function setMessage(text){ msgEl.textContent = text; }
function resetTimer(){
  started = false;
  elapsed = 0;
  timeEl.textContent = formatTime(0);
  if(timerHandle) clearInterval(timerHandle);
  timerHandle = null;
}
function startTimerOnce(){
  if(started) return;
  started = true;
  timerHandle = setInterval(() => {
    elapsed += 1;
    timeEl.textContent = formatTime(elapsed);
  }, 1000);
}
function stopTimer(){
  if(timerHandle) clearInterval(timerHandle);
  timerHandle = null;
}

function parseDifficulty(value){
  const [c,r] = value.split("x").map(Number);
  return { cols: c, rows: r };
}

function buildDeck(cols, rows){
  const totalCards = cols * rows;
  if(totalCards % 2 !== 0) throw new Error("Card count must be even.");
  totalPairs = totalCards / 2;

  // Pick enough pairs for this board size
  const chosen = shuffle([...PAIRS]).slice(0, totalPairs);

  // Turn each pair into TWO cards: one term and one definition
  const cards = [];
  chosen.forEach((p, idx) => {
    cards.push({ id: -1, pairId: idx, type: "term", text: p.term, matched: false });
    cards.push({ id: -1, pairId: idx, type: "def",  text: p.def,  matched: false });
  });

  // Shuffle and assign stable ids
  shuffle(cards).forEach((c, i) => c.id = i);

  deck = cards;
}

function renderBoard(cols){
  boardEl.innerHTML = "";
  boardEl.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

  deck.forEach(card => {
    const cardEl = document.createElement("button");
    cardEl.className = "card";
    cardEl.type = "button";
    cardEl.dataset.id = card.id;

    const inner = document.createElement("div");
    inner.className = "cardInner";

    const back = document.createElement("div");
    back.className = "face back";
    back.textContent = "";

cardEl.classList.add(card.type); // "term" or "def"

const front = document.createElement("div");
front.className = "face front";
front.classList.add("cardText");
front.textContent = card.text;

    inner.appendChild(back);
    inner.appendChild(front);
    cardEl.appendChild(inner);

    cardEl.addEventListener("click", () => onFlip(card.id));
    boardEl.appendChild(cardEl);
  });
}

function updateHUD(){
  movesEl.textContent = moves;
  matchesEl.textContent = matches;
  totalPairsEl.textContent = totalPairs;
}
function getCardById(id){ return deck.find(c => c.id === id); }
function getCardElement(id){ return boardEl.querySelector(`.card[data-id="${id}"]`); }
function flipUI(id, on){
  const el = getCardElement(id);
  if(!el) return;
  el.classList.toggle("flipped", on);
}
function markMatchedUI(id){
  const el = getCardElement(id);
  if(!el) return;
  el.classList.add("matched");
  el.disabled = true;
}
function resetPicks(){
  firstPick = null;
  secondPick = null;
  lock = false;
}

function winCheck(){
  if(matches !== totalPairs) return;

  stopTimer();
  setMessage(`Victory! 🏁 Moves: ${moves} • Time: ${formatTime(elapsed)} • New Game to replay.`);

  unlockBadge("memoryspark");

  const memoryWins = incrementStat("memoryWins");
  if(memoryWins >= 5){
    unlockBadge("patternseeker");
  }

  if(mismatchCount === 0){
    unlockBadge("perfectrecall");
  }

  if(elapsed < 60){
    unlockBadge("lightningmind");
  }

  if(currentLevel === "sebby"){
    unlockBadge("sebbyapproved");

    const sebbyWins = incrementStat("sebbyMemoryWins");
    if(sebbyWins >= 1){
      unlockBadge("ridiculousreader");
    }
    if(sebbyWins >= 10){
      unlockBadge("absurdityapprentice");
    }
    if(sebbyWins >= 25){
      unlockBadge("gobbledygookguru");
    }
    if(sebbyWins >= 50){
      unlockBadge("keeperofnonsense");
    }
  }
}

function onFlip(id){
  if(lock) return;

  const card = getCardById(id);
  if(!card || card.matched) return;
  if(firstPick?.id === id) return;

  startTimerOnce();
  flipUI(id, true);

  if(!firstPick){
    firstPick = card;
    setMessage("Pick a second card.");
    return;
  }

  secondPick = card;
  lock = true;
  moves += 1;
  updateHUD();

  const isMatch =
  firstPick.pairId === secondPick.pairId &&
  firstPick.type !== secondPick.type;

  if(isMatch){
    card.matched = true;
    firstPick.matched = true;
    matches += 1;
    updateHUD();

    setTimeout(() => {
      markMatchedUI(firstPick.id);
      markMatchedUI(secondPick.id);
      setMessage("Match! ✅");
      resetPicks();
      winCheck();
    }, 280);
 } else {
  mismatchCount += 1;
  setMessage("Nope. Flipping back...");
  setTimeout(() => {
      flipUI(firstPick.id, false);
      flipUI(secondPick.id, false);
      setMessage("Try again.");
      resetPicks();
    }, 650);
  }
}

function newGame(){
  const { cols, rows } = parseDifficulty(difficultyEl.value);

 moves = 0;
matches = 0;
mismatchCount = 0;
firstPick = null;
secondPick = null;
lock = false;

  resetTimer();
  buildDeck(cols, rows);
  renderBoard(cols);
  updateHUD();
  setMessage("Tip: your timer starts on your first flip.");
}

async function peek(){
  if(lock) return;
  lock = true;

  deck.forEach(c => { if(!c.matched) flipUI(c.id, true); });
  setMessage("Peek! 👁️");

  await new Promise(r => setTimeout(r, 900));

  deck.forEach(c => {
    if(!c.matched && c.id !== firstPick?.id && c.id !== secondPick?.id){
      flipUI(c.id, false);
    }
  });

  setMessage("Back to it.");
  lock = false;
}

newGameBtn.addEventListener("click", newGame);
difficultyEl.addEventListener("change", newGame);
peekBtn.addEventListener("click", peek);

newGame();

// ---------- Cosmic FX: sparkles + parallax ----------
(function cosmicFX(){
  const starsLayer = document.getElementById("starsLayer");
  const twinkleLayer = document.getElementById("twinkleLayer");
  const sparklesLayer = document.getElementById("sparklesLayer");
  const nebulaLayer = document.querySelector(".nebula");

  // Safety: if user removed the cosmic HTML, do nothing
  if(!starsLayer || !twinkleLayer || !sparklesLayer || !nebulaLayer) return;

  // Create floating sparkles
  const SPARKLE_COUNT = 26; // tweak: 18 subtle, 30 more magical
  for(let i = 0; i < SPARKLE_COUNT; i++){
    const s = document.createElement("div");
    s.className = "sparkle";

    // Use CSS vars to randomize behavior
    const x = Math.floor(Math.random() * 100);            // vw
    const scale = (Math.random() * 0.7 + 0.4).toFixed(2); // 0.4–1.1
    const opacity = (Math.random() * 0.35 + 0.15).toFixed(2); // 0.15–0.50
    const dur = Math.floor(Math.random() * 10 + 10);      // 10–20s
    const delay = Math.random() * -dur;                   // start mid-animation

    s.style.setProperty("--x", `${x}vw`);
    s.style.setProperty("--s", scale);
    s.style.setProperty("--o", opacity);
    s.style.setProperty("--dur", `${dur}s`);
    s.style.animationDelay = `${delay}s`;

    // Randomize size slightly
    const px = Math.floor(Math.random() * 4 + 4); // 4–7px
    s.style.width = `${px}px`;
    s.style.height = `${px}px`;

    sparklesLayer.appendChild(s);
  }

  // Parallax on mouse move (gentle)
  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;

  function onMove(e){
    const w = window.innerWidth;
    const h = window.innerHeight;
    const x = (e.clientX / w - 0.5);
    const y = (e.clientY / h - 0.5);
    targetX = x;
    targetY = y;
  }

  // For mobile tilt-like parallax, we can add deviceorientation later if you want.
  window.addEventListener("mousemove", onMove, { passive: true });

  function tick(){
    // Smooth follow
    currentX += (targetX - currentX) * 0.06;
    currentY += (targetY - currentY) * 0.06;

    // Different depths for layers
    starsLayer.style.transform   = `translate3d(${currentX * 10}px, ${currentY * 10}px, 0)`;
    twinkleLayer.style.transform = `translate3d(${currentX * 16}px, ${currentY * 16}px, 0)`;
    nebulaLayer.style.transform  = `translate3d(${currentX * 22}px, ${currentY * 18}px, 0) scale(1.03)`;

    requestAnimationFrame(tick);
  }
  tick();
  // --- Shooting star spawner (more + randomized) ---
const shootingLayer = document.querySelector(".shooting-stars");

function spawnShootingStar(){
  if(!shootingLayer) return;

  const star = document.createElement("div");
  star.className = "shooting-star";

  // random position (start near top)
  const x = Math.random() * 100;              // vw
  const y = -10 - Math.random() * 20;         // slightly above view
  const len = 80 + Math.random() * 90;        // 80–170px
  const dur = 0.9 + Math.random() * 0.9;      // 0.9–1.8s

  // travel distance (diagonal)
  const dx = -(380 + Math.random() * 520);    // -380 to -900 px
  const dy =  (380 + Math.random() * 520);    //  380 to  900 px

  star.style.setProperty("--x", `${x}vw`);
  star.style.setProperty("--y", `${y}vh`);
  star.style.setProperty("--len", `${len}px`);
  star.style.setProperty("--dur", `${dur}s`);
  star.style.setProperty("--dx", `${dx}px`);
  star.style.setProperty("--dy", `${dy}px`);

  shootingLayer.appendChild(star);

  // remove when animation ends
  star.addEventListener("animationend", () => star.remove());
}

// control how many you get:
const STAR_DENSITY_MS = 500; // lower = more shooting stars (try 700 or 500)
setInterval(() => {
  // sometimes spawn 1, sometimes 2 (for “burst” moments)
  spawnShootingStar();
  if(Math.random() < 0.5) spawnShootingStar();
}, STAR_DENSITY_MS);
})();