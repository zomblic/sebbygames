// ---------- QUESTION BANKS ----------

const NORMAL_VOCAB_TRIVIA = [
  { q: "What does the prefix 're-' mean?", options: ["again", "under", "before", "against"], answer: "again" },
  { q: "What does the prefix 'pre-' mean?", options: ["after", "before", "wrongly", "without"], answer: "before" },
  { q: "What does the prefix 'un-' usually mean?", options: ["not", "again", "between", "full of"], answer: "not" },
  { q: "What does the prefix 'inter-' mean?", options: ["between", "before", "not", "after"], answer: "between" },
  { q: "What does the prefix 'mis-' mean?", options: ["wrongly", "very", "under", "together"], answer: "wrongly" },
  { q: "What does the prefix 'sub-' mean?", options: ["under", "again", "across", "without"], answer: "under" },
  { q: "What does the prefix 'anti-' mean?", options: ["against", "before", "small", "full of"], answer: "against" },
  { q: "What does the prefix 'non-' mean?", options: ["not", "many", "too much", "before"], answer: "not" },
  { q: "What does the suffix '-less' mean?", options: ["without", "many", "before", "together"], answer: "without" },
  { q: "What does the suffix '-ful' mean?", options: ["full of", "not", "under", "again"], answer: "full of" },
  { q: "What does the suffix '-ness' mean?", options: ["state or condition", "before", "small", "person who"], answer: "state or condition" },
  { q: "What does the suffix '-ly' usually do?", options: ["shows how something is done", "means not", "means before", "means under"], answer: "shows how something is done" },
  { q: "What does the suffix '-able' mean?", options: ["able to be", "without", "before", "small"], answer: "able to be" },
  { q: "Which suffix means 'a person who'?", options: ["-er", "-ness", "-less", "-ly"], answer: "-er" },
  { q: "Which word means nonsense language?", options: ["gobbledygook", "architecture", "biology", "transportation"], answer: "gobbledygook" },
  { q: "Which word means a noisy fuss?", options: ["kerfuffle", "microscope", "habitat", "fraction"], answer: "kerfuffle" },
  { q: "Which word means to confuse someone?", options: ["flummox", "organize", "decorate", "balance"], answer: "flummox" },
  { q: "Which word means to trick someone?", options: ["bamboozle", "calculate", "preserve", "predict"], answer: "bamboozle" },
  { q: "What does 'abundant' mean?", options: ["more than enough", "very small", "extremely noisy", "hard to move"], answer: "more than enough" },
  { q: "What does 'cautious' mean?", options: ["careful", "careless", "angry", "speedy"], answer: "careful" },
  { q: "What does 'reluctant' mean?", options: ["unwilling", "excited", "loud", "helpful"], answer: "unwilling" },
  { q: "What does 'predict' mean?", options: ["guess what will happen", "explain the past", "measure carefully", "mix together"], answer: "guess what will happen" },
  { q: "What does 'identify' mean?", options: ["recognize and name", "run away", "grow quickly", "argue loudly"], answer: "recognize and name" },
  { q: "What does 'resource' mean?", options: ["something useful you can use", "a loud argument", "a kind of planet", "a tiny mistake"], answer: "something useful you can use" },
  { q: "What does 'frequent' mean?", options: ["happening often", "very rare", "very bright", "carefully hidden"], answer: "happening often" },
  { q: "What does 'generate' mean?", options: ["to create or produce", "to erase", "to whisper", "to stack"], answer: "to create or produce" },
  { q: "What does 'inquire' mean?", options: ["to ask", "to answer", "to repeat", "to hide"], answer: "to ask" },
  { q: "What does 'interpret' mean?", options: ["to explain meaning", "to jump over", "to sort by size", "to break apart"], answer: "to explain meaning" },
  { q: "What does 'contrast' mean?", options: ["to show differences", "to make equal", "to move quickly", "to tell a joke"], answer: "to show differences" },
  { q: "What does 'determine' mean?", options: ["to decide or find out", "to decorate", "to imagine", "to sharpen"], answer: "to decide or find out" }
];

const ELA_TRIVIA = [
  { q: "A noun is a...", options: ["person, place, thing, or idea", "word that shows action", "describing word only", "connecting word"], answer: "person, place, thing, or idea" },
  { q: "A verb is a...", options: ["word that shows action or state of being", "person place or thing", "punctuation mark", "comparison"], answer: "word that shows action or state of being" },
  { q: "An adjective describes a...", options: ["noun", "verb only", "sentence ending", "question mark"], answer: "noun" },
  { q: "An adverb often describes a...", options: ["verb", "punctuation mark", "title", "paragraph break"], answer: "verb" },
  { q: "What punctuation ends a question?", options: ["question mark", "period", "comma", "apostrophe"], answer: "question mark" },
  { q: "A synonym is a word that...", options: ["has a similar meaning", "means the opposite", "is misspelled", "is always longer"], answer: "has a similar meaning" },
  { q: "An antonym is a word that...", options: ["means the opposite", "sounds the same", "rhymes", "is plural"], answer: "means the opposite" },
  { q: "What is the main idea?", options: ["the most important point", "a tiny detail", "the first word", "the title only"], answer: "the most important point" },
  { q: "What is a context clue?", options: ["a hint from surrounding words", "a punctuation mark", "a title page", "a spelling test"], answer: "a hint from surrounding words" },
  { q: "A metaphor is...", options: ["a comparison saying one thing is another", "a word that rhymes", "a question", "a heading"], answer: "a comparison saying one thing is another" },
  { q: "A simile often uses...", options: ["like or as", "but or and", "because", "quotation marks"], answer: "like or as" },
  { q: "A summary should include...", options: ["important points only", "every tiny detail", "random opinions only", "dialogue only"], answer: "important points only" },
  { q: "The setting of a story tells...", options: ["when and where it happens", "only who is in it", "just the ending", "the theme only"], answer: "when and where it happens" },
  { q: "The theme of a story is...", options: ["the big message or lesson", "the title font", "the first sentence", "the funniest part"], answer: "the big message or lesson" },
  { q: "Dialogue is...", options: ["spoken words by characters", "the setting", "the ending only", "a chapter title"], answer: "spoken words by characters" },
  { q: "A paragraph should usually focus on...", options: ["one main idea", "five unrelated ideas", "only punctuation", "a single letter"], answer: "one main idea" },
  { q: "What is an inference?", options: ["a smart guess based on evidence", "a random guess", "a synonym", "a paragraph title"], answer: "a smart guess based on evidence" },
  { q: "The point of view tells...", options: ["who is telling the story", "where the story happens", "the theme only", "how long the book is"], answer: "who is telling the story" },
  { q: "First-person point of view uses...", options: ["I and me", "he and she only", "they only", "no pronouns"], answer: "I and me" },
  { q: "What does chronological order mean?", options: ["events in time order", "events by size", "events by color", "events by difficulty"], answer: "events in time order" }
];

const SPACE_TRIVIA = [
  { q: "Which planet is known for its rings?", options: ["Saturn", "Mars", "Mercury", "Venus"], answer: "Saturn" },
  { q: "Which planet is closest to the Sun?", options: ["Mercury", "Earth", "Mars", "Jupiter"], answer: "Mercury" },
  { q: "Which planet do we live on?", options: ["Earth", "Neptune", "Uranus", "Venus"], answer: "Earth" },
  { q: "What is the Sun?", options: ["a star", "a planet", "a moon", "an asteroid"], answer: "a star" },
  { q: "What is the Moon?", options: ["Earth's natural satellite", "a star", "a galaxy", "a comet"], answer: "Earth's natural satellite" },
  { q: "Which planet is called the Red Planet?", options: ["Mars", "Saturn", "Jupiter", "Mercury"], answer: "Mars" },
  { q: "What galaxy contains our solar system?", options: ["the Milky Way", "Andromeda", "the Whirlpool", "the Sombrero"], answer: "the Milky Way" },
  { q: "A planet moves around a star in a path called...", options: ["an orbit", "a sentence", "a crater", "a pulse"], answer: "an orbit" },
  { q: "What causes day and night on Earth?", options: ["Earth's rotation", "Earth's color", "the Moon spinning", "cloud movement"], answer: "Earth's rotation" },
  { q: "What causes seasons on Earth?", options: ["Earth's tilt as it orbits the Sun", "the Moon changing shape", "stars blinking", "wind"], answer: "Earth's tilt as it orbits the Sun" },
  { q: "Which planet is the largest in our solar system?", options: ["Jupiter", "Mars", "Earth", "Venus"], answer: "Jupiter" },
  { q: "Which planet is famous for strong winds and deep blue color?", options: ["Neptune", "Mercury", "Earth", "Mars"], answer: "Neptune" },
  { q: "What is an asteroid?", options: ["a rocky object in space", "a giant star", "a moon made of gas", "a type of cloud"], answer: "a rocky object in space" },
  { q: "What is a comet known for?", options: ["a glowing tail", "being a planet", "making daylight", "having oceans"], answer: "a glowing tail" },
  { q: "A constellation is...", options: ["a group of stars forming a pattern", "a type of planet", "a rocket part", "a solar eclipse"], answer: "a group of stars forming a pattern" },
  { q: "Which tool helps scientists look at stars and planets far away?", options: ["telescope", "microscope", "thermometer", "calculator"], answer: "telescope" },
  { q: "What is a black hole?", options: ["a place with gravity so strong light cannot escape", "a hole in the ground", "a dark moon", "a comet tail"], answer: "a place with gravity so strong light cannot escape" },
  { q: "How many planets are in our solar system?", options: ["8", "7", "9", "10"], answer: "8" },
  { q: "What do astronauts travel in to reach space?", options: ["rockets", "submarines", "bicycles", "balloons"], answer: "rockets" },
  { q: "What is a meteor?", options: ["a space rock burning in Earth's atmosphere", "a planet with rings", "a moon crater", "a giant telescope"], answer: "a space rock burning in Earth's atmosphere" }
];

const SEBBY_TRIVIA = [
  { q: "Which word means confusion or fuss?", options: ["kerfuffle", "planetarium", "umbrella", "philosophy"], answer: "kerfuffle" },
  { q: "Which word means to trick someone?", options: ["bamboozle", "magnify", "rotate", "simplify"], answer: "bamboozle" },
  { q: "Which word means confuse someone completely?", options: ["flummox", "decorate", "organize", "assemble"], answer: "flummox" },
  { q: "Which word means complete nonsense?", options: ["poppycock", "telescope", "fraction", "triangle"], answer: "poppycock" },
  { q: "Which word means a silly, talkative person?", options: ["flibbertigibbet", "astronaut", "principal", "composer"], answer: "flibbertigibbet" },
  { q: "Which word means to run away quickly?", options: ["skedaddle", "calculate", "assemble", "hover"], answer: "skedaddle" },
  { q: "Which word means crooked or askew?", options: ["cattywampus", "enormous", "reliable", "vertical"], answer: "cattywampus" },
  { q: "Which word means a messy mixture?", options: ["mishmash", "velocity", "harmony", "ecosystem"], answer: "mishmash" },
  { q: "Which word means a loud burst of laughter?", options: ["guffaw", "lecture", "murmur", "whisper"], answer: "guffaw" },
  { q: "Which word means a loud fuss or uproar?", options: ["brouhaha", "geometry", "vocabulary", "habitat"], answer: "brouhaha" },
  { q: "Which word means trivial nonsense?", options: ["fiddle-faddle", "scientific", "terrarium", "invisible"], answer: "fiddle-faddle" },
  { q: "Which word is used for an object whose name you forgot?", options: ["thingamajig", "rectangle", "volcano", "definition"], answer: "thingamajig" },
  { q: "Which word means to waste time?", options: ["lollygag", "observe", "predict", "measure"], answer: "lollygag" },
  { q: "Which word means old-fashioned surprise?", options: ["gadzooks", "planet", "happiness", "careful"], answer: "gadzooks" },
  { q: "Which word means nonsense words or fantastical language?", options: ["jabberwocky", "fraction", "paragraph", "electricity"], answer: "jabberwocky" },
  { q: "Which word means a wasteful or useless project?", options: ["boondoggle", "microscope", "worksheet", "thermometer"], answer: "boondoggle" },
  { q: "Which word means a very silly or foolish person?", options: ["nincompoop", "scientist", "astronomer", "builder"], answer: "nincompoop" },
  { q: "Which word means to leave suddenly?", options: ["absquatulate", "examine", "underline", "classify"], answer: "absquatulate" },
  { q: "Which word means talking nonsense?", options: ["blatherskite", "calculator", "adventure", "schedule"], answer: "blatherskite" },
  { q: "Which word means wild or crazily silly?", options: ["zany", "stable", "serious", "ordinary"], answer: "zany" },
  { q: "Which word means a nervous tummy feeling?", options: ["collywobbles", "megaphone", "raindrop", "telescope"], answer: "collywobbles" },
  { q: "Which word means a scruffy, messy child?", options: ["ragamuffin", "geologist", "saxophone", "librarian"], answer: "ragamuffin" },
  { q: "Which word means to move back and forth quickly?", options: ["wigwag", "hibernate", "calculate", "drizzle"], answer: "wigwag" },
  { q: "Which word means a small lie?", options: ["taradiddle", "subtraction", "microscope", "sandstorm"], answer: "taradiddle" },
  { q: "Which word means very quickly?", options: ["lickety-split", "underwater", "misbehave", "interact"], answer: "lickety-split" },
  { q: "Which word means dishonest trickery?", options: ["skullduggery", "astronomy", "addition", "paragraph"], answer: "skullduggery" },
  { q: "Which word means falling with a heavy sound?", options: ["kerplunk", "whisper", "float", "sparkle"], answer: "kerplunk" },
  { q: "Which word is a cinnamon sugar cookie?", options: ["snickerdoodle", "asteroid", "constellation", "pumpernickel"], answer: "snickerdoodle" },
  { q: "Which word means an energetic burst of running around?", options: ["zoomies", "gravity", "orbit", "carefulness"], answer: "zoomies" },
  { q: "Which word means language that sounds important but means very little?", options: ["mumbo jumbo", "observation", "reflection", "translation"], answer: "mumbo jumbo" }
];

const NIGHTMARE_TRIVIA = [
  { q: "What does 'antidisestablishmentarianism' relate to?", options: ["a political movement", "a disease", "a musical instrument", "a cooking method"], answer: "a political movement" },
  { q: "What does the prefix 'counter-' mean?", options: ["against", "before", "under", "again"], answer: "against" },
  { q: "What does the suffix '-tion' usually signal?", options: ["the act or process of", "without", "small", "a person who"], answer: "the act or process of" },
  { q: "What does 'incomprehensible' mean?", options: ["impossible to understand", "easy to carry", "very tiny", "full of energy"], answer: "impossible to understand" },
  { q: "What does 'disproportionate' mean?", options: ["not balanced in size or amount", "perfectly even", "very musical", "easy to explain"], answer: "not balanced in size or amount" },
  { q: "What does 'interdisciplinary' mean?", options: ["involving multiple subjects", "only about science", "too difficult", "written in code"], answer: "involving multiple subjects" },
  { q: "What does 'uncharacteristically' mean?", options: ["not typical in behavior", "very brave", "full of light", "quietly"], answer: "not typical in behavior" },
  { q: "What does 'counterrevolutionary' mean?", options: ["opposed to a revolution", "part of a machine", "a type of poem", "moving in circles"], answer: "opposed to a revolution" },
  { q: "What does 'indistinguishable' mean?", options: ["unable to be told apart", "loud and dramatic", "made of glass", "easy to classify"], answer: "unable to be told apart" },
  { q: "What does 'misinterpretation' mean?", options: ["a wrong understanding", "a perfect summary", "an official law", "a short measurement"], answer: "a wrong understanding" },
  { q: "What does 'compartmentalization' mean?", options: ["separating into sections", "moving very fast", "becoming transparent", "speaking carelessly"], answer: "separating into sections" },
  { q: "What does 'electroencephalogram' measure?", options: ["brain activity", "ocean depth", "temperature", "wind speed"], answer: "brain activity" },
  { q: "What does 'internationalization' mean?", options: ["making something work across countries", "shrinking something", "writing by hand", "measuring stars"], answer: "making something work across countries" },
  { q: "What does 'pneumonoultramicroscopicsilicovolcanoconiosis' refer to?", options: ["a lung disease", "a constellation", "an ancient weapon", "a giant storm"], answer: "a lung disease" },
  { q: "What does 'photosynthesis' describe?", options: ["how plants make food", "how mountains form", "how metal rusts", "how birds migrate"], answer: "how plants make food" },
  { q: "What does 'metamorphosis' mean?", options: ["a complete change in form", "a tiny measurement", "a loud protest", "a hidden pattern"], answer: "a complete change in form" },
  { q: "What does 'incomprehensibility' mean?", options: ["the state of being hard to understand", "being very cheerful", "the act of rewriting", "the quality of speed"], answer: "the state of being hard to understand" },
  { q: "What does 'unconstitutional' mean?", options: ["not allowed by a constitution", "made of stone", "impossible to predict", "very old-fashioned"], answer: "not allowed by a constitution" },
  { q: "What does 'disorganization' mean?", options: ["lack of order", "careful planning", "a hidden meaning", "loud celebration"], answer: "lack of order" },
  { q: "What does 'reconsideration' mean?", options: ["thinking again", "moving backward", "measuring twice", "cutting apart"], answer: "thinking again" },
  { q: "What does 'intergovernmentalization' suggest?", options: ["making something operate between governments", "breaking something into pieces", "turning a noun into a verb", "making something invisible"], answer: "making something operate between governments" },
  { q: "What does 'indistinguishability' mean?", options: ["the state of being hard to tell apart", "the quality of moving fast", "the ability to sing", "the act of shrinking"], answer: "the state of being hard to tell apart" },
  { q: "What does 'compartmentalize' most nearly mean?", options: ["to divide into sections", "to whisper softly", "to study stars", "to expand rapidly"], answer: "to divide into sections" },
  { q: "What does the prefix 'electro-' refer to?", options: ["electricity", "ancient history", "small size", "water"], answer: "electricity" },
  { q: "What does the suffix '-ology' often mean?", options: ["the study of", "without", "person who", "tiny version of"], answer: "the study of" },
  { q: "What does 'counterproductive' mean?", options: ["having the opposite of the desired effect", "working perfectly", "very efficient", "easy to predict"], answer: "having the opposite of the desired effect" },
  { q: "What does 'miscommunication' mean?", options: ["communication gone wrong", "careful note-taking", "a written law", "speech that is too loud"], answer: "communication gone wrong" },
  { q: "What does 'intercontinental' mean?", options: ["between continents", "inside a country", "under the sea", "within one house"], answer: "between continents" },
  { q: "What does 'counterargument' mean?", options: ["an argument against another argument", "the first argument", "a silent agreement", "a summary"], answer: "an argument against another argument" },
  { q: "What does 'infallible' mean?", options: ["unable to make mistakes", "extremely noisy", "made of glass", "full of fear"], answer: "unable to make mistakes" }
];

// ---------- COSMIC FX ----------
(function cosmicFX(){
  const starsLayer = document.getElementById("starsLayer");
  const twinkleLayer = document.getElementById("twinkleLayer");
  const sparklesLayer = document.getElementById("sparklesLayer");
  const nebulaLayer = document.querySelector(".nebula");
  if(!starsLayer || !twinkleLayer || !sparklesLayer || !nebulaLayer) return;

  const SPARKLE_COUNT = 18;
  for(let i = 0; i < SPARKLE_COUNT; i++){
    const s = document.createElement("div");
    s.className = "sparkle";
    const x = Math.floor(Math.random() * 100);
    const scale = (Math.random() * 0.7 + 0.4).toFixed(2);
    const opacity = (Math.random() * 0.35 + 0.15).toFixed(2);
    const dur = Math.floor(Math.random() * 10 + 10);
    const delay = Math.random() * -dur;

    s.style.setProperty("--x", `${x}vw`);
    s.style.setProperty("--s", scale);
    s.style.setProperty("--o", opacity);
    s.style.setProperty("--dur", `${dur}s`);
    s.style.animationDelay = `${delay}s`;

    const px = Math.floor(Math.random() * 4 + 4);
    s.style.width = `${px}px`;
    s.style.height = `${px}px`;

    sparklesLayer.appendChild(s);
  }

  let targetX = 0, targetY = 0, currentX = 0, currentY = 0;
  window.addEventListener("mousemove", (e) => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    targetX = (e.clientX / w - 0.5);
    targetY = (e.clientY / h - 0.5);
  }, { passive: true });

  function tick(){
    currentX += (targetX - currentX) * 0.06;
    currentY += (targetY - currentY) * 0.06;
    starsLayer.style.transform = `translate3d(${currentX * 10}px, ${currentY * 10}px, 0)`;
    twinkleLayer.style.transform = `translate3d(${currentX * 16}px, ${currentY * 16}px, 0)`;
    nebulaLayer.style.transform = `translate3d(${currentX * 22}px, ${currentY * 18}px, 0) scale(1.03)`;
    requestAnimationFrame(tick);
  }
  tick();
})();

// ---------- TRIVIA ENGINE ----------
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const scoreEl = document.getElementById("score");
const streakEl = document.getElementById("streak");
const chartedEl = document.getElementById("charted");
const msgEl = document.getElementById("msg");
const modeEl = document.getElementById("mode");
const starEl = document.getElementById("quizStar");
const mapEl = document.getElementById("constellationMap");
const resetBtn = document.getElementById("resetConstellation");
const planetBtns = document.querySelectorAll(".planetBtn");

let score = 0;
let streak = 0;
let current = null;
let currentIndex = -1;
let constellation = [];
let answered = new Set();
let activeCategory = "mixed";

function setMsg(text){
  msgEl.textContent = text;
}

function shuffle(arr){
  for(let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getQuestionPool(){
  const mode = modeEl.value;

  if(mode === "sebby"){
    return SEBBY_TRIVIA;
  }

  if(mode === "nightmare"){
    return NIGHTMARE_TRIVIA;
  }

  if(activeCategory === "vocab"){
    return NORMAL_VOCAB_TRIVIA;
  }

  if(activeCategory === "ela"){
    return ELA_TRIVIA;
  }

  if(activeCategory === "space"){
    return SPACE_TRIVIA;
  }

  return [
    ...NORMAL_VOCAB_TRIVIA,
    ...ELA_TRIVIA,
    ...SPACE_TRIVIA
  ];
}

function buildConstellation(){
  const pool = shuffle([...getQuestionPool()]);
  constellation = pool.slice(0, Math.min(8, pool.length));
  answered = new Set();
  current = null;
  currentIndex = -1;

  questionEl.textContent = "Choose a star to begin.";
  answersEl.innerHTML = "";
  chartedEl.textContent = "0";
  setMsg("Each star contains one question. Chart them all.");

  renderConstellation();
}

function renderConstellation(){
  mapEl.innerHTML = "";

  constellation.forEach((item, index) => {
    const star = document.createElement("button");
    star.type = "button";
    star.className = "mapStar";

    if(answered.has(index)) star.classList.add("charted");
    if(index === currentIndex) star.classList.add("active");

    star.style.left = `${10 + (index % 4) * 22}%`;
    star.style.top = `${15 + Math.floor(index / 4) * 36}%`;

    star.addEventListener("click", () => {
      loadQuestion(index);
    });

    mapEl.appendChild(star);

    if(index < constellation.length - 1){
      const line = document.createElement("div");
      line.className = "starLink";

      const x1 = 10 + (index % 4) * 22;
      const y1 = 15 + Math.floor(index / 4) * 36;
      const x2 = 10 + ((index + 1) % 4) * 22;
      const y2 = 15 + Math.floor((index + 1) / 4) * 36;

      const dx = x2 - x1;
      const dy = y2 - y1;
      const length = Math.sqrt(dx * dx + dy * dy);

      line.style.left = `${x1 + 3}%`;
      line.style.top = `${y1 + 3}%`;
      line.style.width = `${length}%`;
      line.style.transform = `rotate(${Math.atan2(dy, dx)}rad)`;

      mapEl.appendChild(line);
    }
  });
}

function loadQuestion(index){
  currentIndex = index;
  current = constellation[index];

  questionEl.textContent = current.q;
  answersEl.innerHTML = "";

  const options = shuffle([...current.options]);

  options.forEach(option => {
    const btn = document.createElement("button");
    btn.className = "answerBtn";
    btn.textContent = option;
    btn.addEventListener("click", () => checkAnswer(option));
    answersEl.appendChild(btn);
  });

  renderConstellation();
}

function pulseStar(color){
  starEl.style.boxShadow = `0 0 40px ${color}, 0 0 80px ${color}`;
  starEl.style.transform = "scale(1.1)";

  setTimeout(() => {
    starEl.style.transform = "scale(1)";
  }, 250);
}

function checkAnswer(choice){
  if(currentIndex === -1 || !current) return;

  if(choice === current.answer){
    score += 1;
    streak += 1;
    answered.add(currentIndex);

    scoreEl.textContent = String(score);
    streakEl.textContent = String(streak);
    chartedEl.textContent = String(answered.size);

    setMsg("Correct! ⭐ Star charted.");
    pulseStar("#7df9ff");

    if(typeof unlockBadge === "function"){
      // Existing badge system
      if(modeEl.value === "sebby" && answered.size === constellation.length){
        unlockBadge("sebbysfavorite");
      }
    }

    renderConstellation();

    if(answered.size === constellation.length){
      questionEl.textContent = "Constellation complete!";
      answersEl.innerHTML = "";
      setMsg("You charted every star in this constellation. Create a new one!");
    }

  } else {
    streak = 0;
    streakEl.textContent = "0";
    setMsg("Not quite. The star flickers...");
    pulseStar("#ff6b6b");
  }
}

planetBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    planetBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeCategory = btn.dataset.category;
    buildConstellation();
  });
});

modeEl.addEventListener("change", () => {
  // Sebby and Nightmare ignore category filtering
  buildConstellation();
});

resetBtn.addEventListener("click", buildConstellation);

buildConstellation();