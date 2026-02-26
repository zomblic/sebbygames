// ---------- Cosmic FX (sparkles + parallax) ----------
(function cosmicFX(){
  const starsLayer = document.getElementById("starsLayer");
  const twinkleLayer = document.getElementById("twinkleLayer");
  const sparklesLayer = document.getElementById("sparklesLayer");
  const nebulaLayer = document.querySelector(".nebula");
  if(!starsLayer || !twinkleLayer || !sparklesLayer || !nebulaLayer) return;

  // sparkles
  const SPARKLE_COUNT = 20;
  for(let i=0;i<SPARKLE_COUNT;i++){
    const s = document.createElement("div");
    s.className = "sparkle";
    const x = Math.floor(Math.random()*100);
    const scale = (Math.random()*0.7 + 0.4).toFixed(2);
    const opacity = (Math.random()*0.35 + 0.15).toFixed(2);
    const dur = Math.floor(Math.random()*10 + 10);
    const delay = Math.random()*-dur;

    s.style.setProperty("--x", `${x}vw`);
    s.style.setProperty("--s", scale);
    s.style.setProperty("--o", opacity);
    s.style.setProperty("--dur", `${dur}s`);
    s.style.animationDelay = `${delay}s`;

    const px = Math.floor(Math.random()*4 + 4);
    s.style.width = `${px}px`;
    s.style.height = `${px}px`;

    sparklesLayer.appendChild(s);
  }

  // parallax
  let targetX=0, targetY=0, currentX=0, currentY=0;
  window.addEventListener("mousemove",(e)=>{
    const w=window.innerWidth, h=window.innerHeight;
    targetX = (e.clientX/w - 0.5);
    targetY = (e.clientY/h - 0.5);
  }, {passive:true});

  function tick(){
    currentX += (targetX-currentX)*0.06;
    currentY += (targetY-currentY)*0.06;
    starsLayer.style.transform = `translate3d(${currentX*10}px, ${currentY*10}px, 0)`;
    twinkleLayer.style.transform = `translate3d(${currentX*16}px, ${currentY*16}px, 0)`;
    nebulaLayer.style.transform = `translate3d(${currentX*22}px, ${currentY*18}px, 0) scale(1.03)`;
    requestAnimationFrame(tick);
  }
  tick();
})();

// ---------- Hangman Game ----------

// iSEE-Primary-ish vocab style (not an official list; easy to swap)
const VOCAB = [
  { word: "abundant", hint: "Plentiful; more than enough." },
  { word: "accurate", hint: "Correct; free from mistakes." },
  { word: "analyze", hint: "To study something carefully by breaking it into parts." },
  { word: "assemble", hint: "To put together." },
  { word: "attentive", hint: "Paying close attention." },
  { word: "beneath", hint: "Under; below." },
  { word: "cautious", hint: "Careful to avoid danger or mistakes." },
  { word: "conclude", hint: "To decide after thinking; to finish." },
  { word: "contrast", hint: "To compare to show differences." },
  { word: "constant", hint: "Not changing; steady." },
  { word: "consume", hint: "To use up; to eat or drink." },
  { word: "declare", hint: "To announce clearly." },
  { word: "determine", hint: "To find out; to decide." },
  { word: "diligent", hint: "Hardworking; careful and persistent." },
  { word: "evidence", hint: "Facts or information that support an idea." },
  { word: "examine", hint: "To look at closely." },
  { word: "frequent", hint: "Happening often." },
  { word: "generate", hint: "To produce; to create." },
  { word: "identify", hint: "To recognize and name." },
  { word: "inquire", hint: "To ask for information." },
  { word: "interpret", hint: "To explain the meaning of." },
  { word: "predict", hint: "To guess what will happen based on clues." },
  { word: "reluctant", hint: "Not willing; hesitant." },
  { word: "resource", hint: "A supply that can be used to help." },
  { word: "significant", hint: "Important; meaningful." },
];

const lettersEl = document.getElementById("letters");
const wordEl = document.getElementById("word");
const hintEl = document.getElementById("hint");
const msgEl = document.getElementById("msg");
const livesEl = document.getElementById("lives");
const winsEl = document.getElementById("wins");
const newWordBtn = document.getElementById("newWord");
const revealHintBtn = document.getElementById("revealHint");
const resetRoundBtn = document.getElementById("resetRound");
const nebulaLayer = document.querySelector(".nebula");

let current = null;
let revealed = new Set();
let guessed = new Set();
let lives = 6;
let wins = 0;
let hintShown = false;

// Nebula dims with wrong guesses (optional flair)
const BASE_NEBULA = 0.75;
const MIN_NEBULA = 0.10;
function setNebula(){
  if(!nebulaLayer) return;
  const wrong = 6 - lives;
  const step = 0.10;
  nebulaLayer.style.opacity = String(Math.max(MIN_NEBULA, BASE_NEBULA - wrong*step));
}

function setMsg(t){ msgEl.textContent = t; }

function pickWord(){
  const item = VOCAB[Math.floor(Math.random()*VOCAB.length)];
  // normalize: letters only (your words are already simple)
  current = { ...item, word: item.word.toLowerCase() };
}

function renderWord(){
  wordEl.innerHTML = "";
  const w = current.word;

  for(const ch of w){
    const slot = document.createElement("div");
    slot.className = "letterSlot";

    if(ch === " "){
      slot.style.opacity = "0";
      slot.style.border = "none";
      slot.style.background = "transparent";
      slot.textContent = "";
    } else {
      slot.textContent = revealed.has(ch) ? ch.toUpperCase() : "";
    }

    wordEl.appendChild(slot);
  }
}

function renderLetters(){
  lettersEl.innerHTML = "";
  const A = "A".charCodeAt(0);

  for(let i=0;i<26;i++){
    const ch = String.fromCharCode(A+i).toLowerCase();
    const b = document.createElement("button");
    b.type = "button";
    b.className = "letterBtn";
    b.textContent = ch.toUpperCase();

    if(guessed.has(ch) || lives <= 0){
      b.classList.add("used");
      b.disabled = true;
    }

    b.addEventListener("click", ()=> guess(ch));
    lettersEl.appendChild(b);
  }
}

function updateHUD(){
  livesEl.textContent = String(lives);
  winsEl.textContent = String(wins);
}

function resetRound(keepWord=false){
  if(!keepWord) pickWord();
  revealed = new Set();
  guessed = new Set();
  lives = 6;
  hintShown = false;

  hintEl.textContent = "Hint is hidden. Click “Reveal Hint” if you need it.";
  setMsg("Click letters or use your keyboard.");
  updateHUD();
  renderWord();
  renderLetters();
  setNebula();
}

function isWin(){
  const uniqueLetters = new Set(current.word.replace(/[^a-z]/g, "").split(""));
  for(const ch of uniqueLetters){
    if(!revealed.has(ch)) return false;
  }
  return true;
}

function endLose(){
  setMsg(`Out of lives. The word was: ${current.word.toUpperCase()}`);
  // reveal all
  for(const ch of current.word){
    if(/[a-z]/.test(ch)) revealed.add(ch);
  }
  renderWord();
  renderLetters();
}

function endWin(){
  wins += 1;
  updateHUD();
  setMsg("Correct! ✅ New word coming up...");
  setTimeout(()=> resetRound(false), 900);
}

function guess(ch){
  if(lives <= 0) return;
  if(guessed.has(ch)) return;

  guessed.add(ch);

  if(current.word.includes(ch)){
    revealed.add(ch);
    setMsg("Nice! ✅");
  } else {
    lives -= 1;
    setMsg("Nope. ❌");
  }

  updateHUD();
  renderWord();
  renderLetters();
  setNebula();

  if(isWin()) endWin();
  else if(lives <= 0) endLose();
}

// Keyboard support
window.addEventListener("keydown", (e)=>{
  const k = e.key.toLowerCase();
  if(k.length === 1 && k >= "a" && k <= "z"){
    guess(k);
  }
});

newWordBtn?.addEventListener("click", ()=> resetRound(false));
resetRoundBtn?.addEventListener("click", ()=> resetRound(true));
revealHintBtn?.addEventListener("click", ()=>{
  hintShown = true;
  hintEl.textContent = `Hint: ${current.hint}`;
  setMsg("Hint revealed. Keep going!");
});

resetRound(false);