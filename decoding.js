// ---------- Optional: Cosmic FX (sparkles + parallax) ----------
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

// ---------- Decoding Game ----------
const WORDS = [
  { word: "unhappy", syllables: ["un", "hap", "py"], clue: "Not happy" },
  { word: "misunderstand", syllables: ["mis", "un", "der", "stand"], clue: "To understand wrongly" },
  { word: "reusable", syllables: ["re", "us", "a", "ble"], clue: "Able to be used again" },
  { word: "preview", syllables: ["pre", "view"], clue: "A look before something happens" },
  { word: "disagree", syllables: ["dis", "a", "gree"], clue: "To not agree" },
  { word: "careless", syllables: ["care", "less"], clue: "Without care" },
  { word: "hopeful", syllables: ["hope", "ful"], clue: "Full of hope" },
  { word: "movement", syllables: ["move", "ment"], clue: "The act of moving" },
  { word: "national", syllables: ["na", "tion", "al"], clue: "Related to a nation" },
  { word: "impossible", syllables: ["im", "pos", "si", "ble"], clue: "Not possible" },
  { word: "unbelievable", syllables: ["un", "be", "liev", "a", "ble"], clue: "Not able to be believed" },
  { word: "misinterpretation", syllables: ["mis", "in", "ter", "pre", "ta", "tion"], clue: "A wrong understanding of something" },
  { word: "disorganization", syllables: ["dis", "or", "gan", "i", "za", "tion"], clue: "A lack of order or planning" },
  { word: "reconsideration", syllables: ["re", "con", "sid", "er", "a", "tion"], clue: "Thinking about something again" },
  { word: "inconvenient", syllables: ["in", "con", "ven", "ient"], clue: "Not easy or suitable" },
  { word: "responsibility", syllables: ["re", "spon", "si", "bil", "i", "ty"], clue: "A duty or something you are accountable for" },
  { word: "communication", syllables: ["com", "mu", "ni", "ca", "tion"], clue: "Sharing information" },
  { word: "investigation", syllables: ["in", "ves", "ti", "ga", "tion"], clue: "A careful search to find facts" },
  { word: "environmental", syllables: ["en", "vi", "ron", "men", "tal"], clue: "Relating to nature or surroundings" },
  { word: "extraordinary", syllables: ["ex", "tra", "or", "di", "nar", "y"], clue: "Very unusual or remarkable" },
  { word: "intercontinental", syllables: ["in", "ter", "con", "ti", "nen", "tal"], clue: "Between continents" },
  { word: "unpredictable", syllables: ["un", "pre", "dict", "a", "ble"], clue: "Not able to be predicted" },
  { word: "miscommunication", syllables: ["mis", "com", "mu", "ni", "ca", "tion"], clue: "A misunderstanding from poor communication" },
  { word: "disrespectful", syllables: ["dis", "re", "spect", "ful"], clue: "Not showing respect" },
  { word: "prearrangement", syllables: ["pre", "ar", "range", "ment"], clue: "Something planned ahead of time" },
  { word: "international", syllables: ["in", "ter", "na", "tion", "al"], clue: "Between nations" },
  { word: "unfortunate", syllables: ["un", "for", "tu", "nate"], clue: "Unlucky; not good" },
  { word: "unnecessary", syllables: ["un", "nec", "es", "sar", "y"], clue: "Not needed" },
  { word: "transportation", syllables: ["trans", "por", "ta", "tion"], clue: "Ways of moving people or things" },
  { word: "miscalculation", syllables: ["mis", "cal", "cu", "la", "tion"], clue: "A wrong calculation" },
  { word: "disagreement", syllables: ["dis", "a", "gree", "ment"], clue: "A difference of opinion" },
  { word: "reconstruction", syllables: ["re", "con", "struc", "tion"], clue: "Building again" },
  { word: "uncomfortable", syllables: ["un", "com", "for", "ta", "ble"], clue: "Not comfortable" },
  { word: "independent", syllables: ["in", "de", "pen", "dent"], clue: "Not controlled by others" },
  { word: "unimaginable", syllables: ["un", "im", "ag", "in", "a", "ble"], clue: "Hard to imagine; unbelievable" },
  { word: "preposition", syllables: ["pre", "po", "si", "tion"], clue: "A word showing relationship (in, on, under, between)" },
  { word: "multiplication", syllables: ["mul", "ti", "pli", "ca", "tion"], clue: "The math operation of times" },
  { word: "classification", syllables: ["clas", "si", "fi", "ca", "tion"], clue: "Sorting into groups" },
  { word: "misbehavior", syllables: ["mis", "be", "hav", "ior"], clue: "Bad behavior" },
  { word: "reappearance", syllables: ["re", "ap", "pear", "ance"], clue: "Showing up again" },
  
];

const NIGHTMARE_WORDS = [
  { word: "intergovernmentalization", syllables: ["in", "ter", "gov", "ern", "men", "tal", "i", "za", "tion"], clue: "Making something operate between governments" },
  { word: "incomprehensibility", syllables: ["in", "com", "pre", "hen", "si", "bil", "i", "ty"], clue: "The state of being hard to understand" },
  { word: "mischaracterization", syllables: ["mis", "char", "ac", "ter", "i", "za", "tion"], clue: "Describing something incorrectly" },
  { word: "interconnectedness", syllables: ["in", "ter", "con", "nect", "ed", "ness"], clue: "The state of being linked together" },
  { word: "unconstitutional", syllables: ["un", "con", "sti", "tu", "tion", "al"], clue: "Not allowed by the constitution" },
  { word: "indistinguishability", syllables: ["in", "dis", "tin", "guish", "a", "bil", "i", "ty"], clue: "Hard to tell apart" },
  { word: "electroencephalogram", syllables: ["e", "lec", "tro", "en", "ceph", "a", "lo", "gram"], clue: "A test that records brain activity (EEG)" },
  { word: "photosynthesis", syllables: ["pho", "to", "syn", "the", "sis"], clue: "How plants make food using sunlight" },
  { word: "metamorphosis", syllables: ["met", "a", "mor", "pho", "sis"], clue: "A complete change in form" },
  { word: "counterrevolutionary", syllables: ["coun", "ter", "re", "vo", "lu", "tion", "ar", "y"], clue: "Opposing a revolution" },
  { word: "internationalization", syllables: ["in", "ter", "na", "tion", "al", "i", "za", "tion"], clue: "Making something work in many countries" },
  { word: "misinterpretation", syllables: ["mis", "in", "ter", "pre", "ta", "tion"], clue: "Understanding something the wrong way" },
  { word: "interdisciplinary", syllables: ["in", "ter", "dis", "ci", "pli", "nar", "y"], clue: "Involving multiple subjects" },
  { word: "uncharacteristically", syllables: ["un", "char", "ac", "ter", "is", "ti", "cal", "ly"], clue: "Not typical of a person or thing" },
  { word: "compartmentalization", syllables: ["com", "part", "ment", "al", "i", "za", "tion"], clue: "Separating into sections or categories" },
  { word: "disproportionately", syllables: ["dis", "pro", "por", "tion", "ate", "ly"], clue: "In an uneven or unfair amount" },
  { word: "antidisestablishmentarianism", syllables: ["an", "ti", "dis", "es", "tab", "lish", "ment", "ar", "i", "an", "ism"], clue: "A famous very long political word (for fun!)" },
  { word: "pneumonoultramicroscopicsilicovolcanoconiosis", syllables: ["pneu", "mo", "no", "ul", "tra", "mi", "cro", "scop", "ic", "sil", "i", "co", "vol", "ca", "no", "co", "ni", "o", "sis"], clue: "An extremely long word about a lung disease (for fun!)" },
];

const DECOYS = [
  "pre","re","un","dis","mis","in","im","ir","il","non",
  "tion","sion","ment","ness","ful","less","ly","al","er","or",
  "able","ible","ive","ous","ish","ize","ify",
  "anti","inter","trans","sub","super","over","under",
  "ous","tion","ment","ness","ship","hood"
];

const tilesEl = document.getElementById("tiles");
const answerEl = document.getElementById("answer");
const clueEl = document.getElementById("clue");
const msgEl = document.getElementById("msg");
const scoreEl = document.getElementById("score");
const modeEl = document.getElementById("mode");

const newBtn = document.getElementById("newPuzzle");
const undoBtn = document.getElementById("undo");
const clearBtn = document.getElementById("clear");
const checkBtn = document.getElementById("check");

// If we’re on the menu page, decoding UI won’t exist. Safely exit.
if(tilesEl && answerEl && clueEl && msgEl && scoreEl && newBtn && undoBtn && clearBtn && checkBtn){
  let current = null;
  let picked = [];          // syllables chosen
  let pickedBtns = [];      // button refs
  let score = 0;

  function shuffle(arr){
    for(let i=arr.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      [arr[i],arr[j]]=[arr[j],arr[i]];
    }
    return arr;
  }

  function setMsg(t){ msgEl.textContent = t; }
  function renderAnswer(){
    answerEl.innerHTML = "";
    picked.forEach(syl=>{
      const chip = document.createElement("span");
      chip.className = "syllChip";
      chip.style.cursor = "default";
      chip.textContent = syl;
      answerEl.appendChild(chip);
    });
  }

  function newPuzzle(){
  const mode = modeEl ? modeEl.value : "normal";

  // Pick word list based on mode
  const list = (mode === "nightmare") ? NIGHTMARE_WORDS : WORDS;
  current = list[Math.floor(Math.random() * list.length)];

  picked = [];
  pickedBtns = [];

  clueEl.textContent = `Clue: ${current.clue}`;
  setMsg(mode === "nightmare"
    ? "Nightmare mode: decoys included. Choose wisely. 👁️"
    : "Click syllables in order. Undo or clear if needed."
  );
  renderAnswer();

  tilesEl.innerHTML = "";

  // Build tile pool
const pool = [...current.syllables];

// Only add decoys if toggle is ON
if(decoysToggle && decoysToggle.checked){

  const mode = modeEl ? modeEl.value : "normal";

  const decoyCount =
    (mode === "nightmare")
      ? Math.min(10, Math.max(5, Math.floor(current.syllables.length * 0.7)))
      : (current.syllables.length >= 5 ? 3 : 2);

  while(pool.length < current.syllables.length + decoyCount){
    const d = DECOYS[Math.floor(Math.random() * DECOYS.length)];
    if(!pool.includes(d)) pool.push(d);
  }
}

  const shuffled = shuffle(pool);

  shuffled.forEach((syl)=>{
    const b = document.createElement("button");
    b.type = "button";
    b.className = "syllChip";
    b.textContent = syl;

    b.addEventListener("click", ()=>{
      if(b.classList.contains("used")) return;
      b.classList.add("used");
      picked.push(syl);
      pickedBtns.push(b);
      renderAnswer();
    });

    tilesEl.appendChild(b);
  });
  if(modeEl){
  modeEl.addEventListener("change", newPuzzle);
}
}

  function undo(){
    const lastBtn = pickedBtns.pop();
    const lastSyl = picked.pop();
    if(lastBtn){
      lastBtn.classList.remove("used");
      renderAnswer();
      setMsg("Undid last syllable.");
    } else {
      setMsg("Nothing to undo.");
    }
  }

  function clearAll(){
    picked = [];
    pickedBtns.forEach(b=>b.classList.remove("used"));
    pickedBtns = [];
    renderAnswer();
    setMsg("Cleared.");
  }

  function check(){
    const attempt = picked.join("").toLowerCase();
    const target = current.word.toLowerCase();

    if(attempt === target){
      score += 1;
      scoreEl.textContent = String(score);
      setMsg(`Correct! ✅ Word: ${current.word}`);
      // Auto new after a moment
      setTimeout(newPuzzle, 900);
    } else {
      setMsg(`Not quite. Try again (hint: ${current.word.length} letters).`);
    }
  }

  newBtn.addEventListener("click", newPuzzle);
  undoBtn.addEventListener("click", undo);
  clearBtn.addEventListener("click", clearAll);
  checkBtn.addEventListener("click", check);

  newPuzzle();
}