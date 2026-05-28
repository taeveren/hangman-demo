const PART_ORDER = [
  "head",
  "body",
  "leftArm",
  "rightArm",
  "leftLeg",
  "rightLeg",
];
const MAX_LIVES = 6;
const MAX_HINTS = 2;

const WORD_HINTS = {
  cursor: "AI-powered code editor many devs use daily",
  hackathon: "Intense coding sprint event, often 24–48 hours",
  frontend: "The part of the app users see in the browser",
  javascript: "Language of the web (and this game)",
  debugging: "Finding and fixing bugs in your code",
  feature: "A new capability shipped in a product",
  deploy: "Push your app live for users",
  prototype: "Early rough version to test an idea",
  pumpkin: "Orange gourd carved on October 31",
  ghost: "Sheet-white spirit that says boo",
  witch: "Pointy hat, broomstick, spells at midnight",
  candy: "Sweet treats handed out on Halloween night",
  spider: "Eight-legged web spinner",
  haunted: "A house where ghosts are said to live",
  costume: "What you wear when trick-or-treating",
  midnight: "When the witching hour strikes",
  skeleton: "Bones on display — very spooky",
  cobweb: "Sticky silk left in dusty corners",
  demon: "Evil creature from the underworld",
  inferno: "Another word for raging hellfire",
  brimstone: "Sulfur smell of the burning pit",
  lucifer: "Fallen angel, prince of darkness",
  torment: "Endless suffering in the depths",
  sulfur: "Yellow element that smells like rotten eggs",
  abyss: "Bottomless chasm with no escape",
  damned: "Souls condemned forever",
  flames: "Fire licking up from below",
  devil: "Lord of hell with horns and a pitchfork",
  liberty: "Freedom — symbolized by a tall green statue",
  colony: "Early American settlement under British rule",
  patriot: "Colonist who fought for independence",
  boston: "Harbor city famous for a tea party",
  freedom: "What the revolutionaries fought for",
  revolt: "Uprising against the crown",
  harbor: "Where ships dock — tea was dumped in one",
  musket: "Colonial soldier's long firearm",
  founder: "Washington, Jefferson, or Franklin",
  charter: "Royal document granting rights to settle",
  bunny: "Fluffy hopper who delivers eggs",
  basket: "Woven holder for Easter treats",
  chocolate: "Sweet brown candy in foil eggs",
  eggs: "Hidden colorful treasures to find",
  spring: "Season of flowers and renewal",
  tulip: "Bright spring bulb flower",
  carrot: "Orange snack for a certain bunny",
  pastel: "Soft light colors of the season",
  chick: "Fluffy yellow baby bird",
  bonnet: "Fancy hat worn on Easter Sunday",
};

const THEMES = {
  default: {
    label: "Colonial America",
    title: "Colonial Hangman",
    tagline: "Liberty, letters, and the noose",
    words: [
      "liberty",
      "colony",
      "patriot",
      "boston",
      "freedom",
      "revolt",
      "harbor",
      "musket",
      "founder",
      "charter",
    ],
    svg: `
      <svg viewBox="0 0 220 220" role="img" aria-label="Colonial hangman">
        <rect class="scene-bg" width="220" height="220" fill="transparent"/>
        <line class="gallow" x1="20" y1="200" x2="130" y2="200" stroke="#451a03" stroke-width="6"/>
        <line class="gallow" x1="50" y1="200" x2="50" y2="20" stroke="#451a03" stroke-width="6"/>
        <line class="gallow" x1="50" y1="20" x2="140" y2="20" stroke="#451a03" stroke-width="6"/>
        <line class="gallow" x1="140" y1="20" x2="140" y2="45" stroke="#78350f" stroke-width="4"/>
        <circle class="part" data-part="head" cx="140" cy="65" r="18" stroke="#44403c" stroke-width="5" fill="none"/>
        <line class="part" data-part="body" x1="140" y1="83" x2="140" y2="130" stroke="#1e3a5f" stroke-width="6"/>
        <line class="part" data-part="leftArm" x1="140" y1="95" x2="115" y2="115" stroke="#44403c" stroke-width="5"/>
        <line class="part" data-part="rightArm" x1="140" y1="95" x2="165" y2="115" stroke="#44403c" stroke-width="5"/>
        <line class="part" data-part="leftLeg" x1="140" y1="130" x2="120" y2="160" stroke="#292524" stroke-width="5"/>
        <line class="part" data-part="rightLeg" x1="140" y1="130" x2="160" y2="160" stroke="#292524" stroke-width="5"/>
      </svg>
    `,
  },
  halloween: {
    label: "Halloween",
    title: "Spooky Hangman",
    tagline: "Trick or treat — guess the word",
    words: [
      "pumpkin",
      "ghost",
      "witch",
      "candy",
      "spider",
      "haunted",
      "costume",
      "midnight",
      "skeleton",
      "cobweb",
    ],
    svg: `
      <svg viewBox="0 0 220 220" role="img" aria-label="Halloween hangman">
        <rect class="scene-bg" width="220" height="220" fill="transparent"/>
        <line class="gallow" x1="20" y1="200" x2="130" y2="200" stroke="#a78bfa" stroke-width="6"/>
        <line class="gallow" x1="50" y1="200" x2="50" y2="20" stroke="#a78bfa" stroke-width="6"/>
        <line class="gallow" x1="50" y1="20" x2="140" y2="20" stroke="#a78bfa" stroke-width="6"/>
        <line class="gallow" x1="140" y1="20" x2="140" y2="45" stroke="#c4b5fd" stroke-width="4"/>
        <circle class="part" data-part="head" cx="140" cy="65" r="18" stroke="#e2e8f0" stroke-width="5" fill="none"/>
        <line class="part" data-part="body" x1="140" y1="83" x2="140" y2="130" stroke="#e2e8f0" stroke-width="5"/>
        <line class="part" data-part="leftArm" x1="140" y1="95" x2="115" y2="115" stroke="#e2e8f0" stroke-width="5"/>
        <line class="part" data-part="rightArm" x1="140" y1="95" x2="165" y2="115" stroke="#e2e8f0" stroke-width="5"/>
        <line class="part" data-part="leftLeg" x1="140" y1="130" x2="120" y2="160" stroke="#e2e8f0" stroke-width="5"/>
        <line class="part" data-part="rightLeg" x1="140" y1="130" x2="160" y2="160" stroke="#e2e8f0" stroke-width="5"/>
      </svg>
    `,
  },
  hell: {
    label: "Hell",
    title: "Infernal Hangman",
    tagline: "One wrong guess closer to the pit",
    words: [
      "demon",
      "inferno",
      "brimstone",
      "lucifer",
      "torment",
      "sulfur",
      "abyss",
      "damned",
      "flames",
      "devil",
    ],
    svg: `
      <svg viewBox="0 0 220 220" role="img" aria-label="Hell hangman">
        <rect class="scene-bg" width="220" height="220" fill="transparent"/>
        <line class="gallow" x1="20" y1="200" x2="130" y2="200" stroke="#44403c" stroke-width="6"/>
        <line class="gallow" x1="50" y1="200" x2="50" y2="20" stroke="#44403c" stroke-width="6"/>
        <line class="gallow" x1="50" y1="20" x2="140" y2="20" stroke="#44403c" stroke-width="6"/>
        <line class="gallow" x1="140" y1="20" x2="140" y2="45" stroke="#ef4444" stroke-width="4"/>
        <circle class="part" data-part="head" cx="140" cy="65" r="18" stroke="#ef4444" stroke-width="5" fill="none"/>
        <line class="part" data-part="body" x1="140" y1="83" x2="140" y2="130" stroke="#ef4444" stroke-width="5"/>
        <line class="part" data-part="leftArm" x1="140" y1="95" x2="115" y2="115" stroke="#ef4444" stroke-width="5"/>
        <line class="part" data-part="rightArm" x1="140" y1="95" x2="165" y2="115" stroke="#ef4444" stroke-width="5"/>
        <line class="part" data-part="leftLeg" x1="140" y1="130" x2="120" y2="160" stroke="#ef4444" stroke-width="5"/>
        <line class="part" data-part="rightLeg" x1="140" y1="130" x2="160" y2="160" stroke="#ef4444" stroke-width="5"/>
      </svg>
    `,
  },
  easter: {
    label: "Easter",
    title: "Easter Hangman",
    tagline: "Hop to victory — guess the spring word",
    words: [
      "bunny",
      "basket",
      "chocolate",
      "eggs",
      "spring",
      "tulip",
      "carrot",
      "pastel",
      "chick",
      "bonnet",
    ],
    svg: `
      <svg viewBox="0 0 220 220" role="img" aria-label="Easter hangman">
        <rect class="scene-bg" width="220" height="220" fill="transparent"/>
        <line class="gallow" x1="20" y1="200" x2="130" y2="200" stroke="#86efac" stroke-width="6"/>
        <line class="gallow" x1="50" y1="200" x2="50" y2="20" stroke="#86efac" stroke-width="6"/>
        <line class="gallow" x1="50" y1="20" x2="140" y2="20" stroke="#86efac" stroke-width="6"/>
        <line class="gallow" x1="140" y1="20" x2="140" y2="45" stroke="#f472b6" stroke-width="4"/>
        <circle class="part" data-part="head" cx="140" cy="65" r="18" stroke="#f472b6" stroke-width="5" fill="none"/>
        <line class="part" data-part="body" x1="140" y1="83" x2="140" y2="130" stroke="#a855f7" stroke-width="5"/>
        <line class="part" data-part="leftArm" x1="140" y1="95" x2="115" y2="115" stroke="#a855f7" stroke-width="5"/>
        <line class="part" data-part="rightArm" x1="140" y1="95" x2="165" y2="115" stroke="#a855f7" stroke-width="5"/>
        <line class="part" data-part="leftLeg" x1="140" y1="130" x2="120" y2="160" stroke="#a855f7" stroke-width="5"/>
        <line class="part" data-part="rightLeg" x1="140" y1="130" x2="160" y2="160" stroke="#a855f7" stroke-width="5"/>
      </svg>
    `,
  },
};

let answer = "";
let guessed = new Set();
let lives = MAX_LIVES;
let hintsUsed = 0;
let isGameOver = false;
let currentTheme = "default";
let partEls = [];

const maskedWordEl = document.getElementById("maskedWord");
const messageEl = document.getElementById("message");
const livesEl = document.getElementById("lives");
const usedLettersEl = document.getElementById("usedLetters");
const keyboardEl = document.getElementById("keyboard");
const resetButtonEl = document.getElementById("resetButton");
const themeSelectEl = document.getElementById("themeSelect");
const hangmanStageEl = document.getElementById("hangmanStage");
const gameTitleEl = document.getElementById("gameTitle");
const themeTaglineEl = document.getElementById("themeTagline");
const hintButtonEl = document.getElementById("hintButton");
const hintsLeftEl = document.getElementById("hintsLeft");
const hintTextEl = document.getElementById("hintText");
const keyEls = new Map();

function populateThemeSelect() {
  themeSelectEl.innerHTML = Object.entries(THEMES)
    .map(
      ([id, theme]) =>
        `<option value="${id}">${theme.label}</option>`,
    )
    .join("");
}

function getActiveTheme() {
  return THEMES[currentTheme];
}

function chooseWord() {
  const words = getActiveTheme().words;
  return words[Math.floor(Math.random() * words.length)];
}

function buildKeyboard() {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  keyboardEl.innerHTML = "";

  letters.forEach((letter) => {
    const keyButton = document.createElement("button");
    keyButton.type = "button";
    keyButton.className = "key";
    keyButton.dataset.letter = letter;
    keyButton.textContent = letter.toUpperCase();
    keyButton.setAttribute("aria-label", `Guess ${letter}`);
    keyButton.addEventListener("click", () => handleGuess(letter));
    keyboardEl.appendChild(keyButton);
    keyEls.set(letter, keyButton);
  });
}

function renderKeyboard() {
  keyEls.forEach((keyEl, letter) => {
    keyEl.disabled = guessed.has(letter) || isGameOver;
  });
}

function renderDrawing() {
  const wrongGuesses = MAX_LIVES - lives;
  partEls.forEach((el) => {
    const partName = el.getAttribute("data-part");
    const index = PART_ORDER.indexOf(partName);
    const shouldShow = index !== -1 && index < wrongGuesses;
    el.classList.toggle("visible", shouldShow);
  });
}

function maskWord() {
  return answer
    .split("")
    .map((char) => (guessed.has(char) ? char : "_"))
    .join(" ");
}

function getHintForWord(word) {
  return (
    WORD_HINTS[word] ||
    `Theme: ${getActiveTheme().label}. The word has ${word.length} letters.`
  );
}

function renderHints() {
  const hintsRemaining = MAX_HINTS - hintsUsed;
  hintsLeftEl.textContent = String(hintsRemaining);
  hintButtonEl.disabled = isGameOver || hintsRemaining <= 0;
}

function revealRandomLetter() {
  const hidden = [...new Set(answer.split(""))].filter(
    (char) => !guessed.has(char),
  );
  if (hidden.length === 0) return null;

  const letter = hidden[Math.floor(Math.random() * hidden.length)];
  guessed.add(letter);
  return letter;
}

function checkWinOrLose() {
  const won = answer.split("").every((char) => guessed.has(char));
  if (won) {
    finishGame(true);
  } else if (lives <= 0) {
    finishGame(false);
  }
}

function useHint() {
  if (isGameOver || hintsUsed >= MAX_HINTS) return;

  hintsUsed += 1;

  if (hintsUsed === 1) {
    hintTextEl.hidden = false;
    hintTextEl.textContent = `Clue: ${getHintForWord(answer)}`;
    setMessage("Hint used — here's a clue.");
  } else {
    const letter = revealRandomLetter();
    if (letter) {
      hintTextEl.textContent = `Letter revealed: "${letter.toUpperCase()}"`;
      setMessage(`Hint used — "${letter}" is in the word!`);
    } else {
      setMessage("No hidden letters left to reveal.");
    }
    render();
    checkWinOrLose();
  }

  renderHints();
}

function render() {
  maskedWordEl.textContent = maskWord();
  livesEl.textContent = `Lives: ${lives}`;
  usedLettersEl.textContent =
    guessed.size > 0 ? [...guessed].sort().join(", ") : "none";
  renderDrawing();
  renderKeyboard();
  renderHints();
}

function setMessage(text) {
  messageEl.textContent = text;
}

let confettiFrameId = null;

function stopConfetti() {
  if (confettiFrameId !== null) {
    cancelAnimationFrame(confettiFrameId);
    confettiFrameId = null;
  }
  const canvas = document.getElementById("confettiCanvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

function fireConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  if (!canvas) return;

  stopConfetti();

  const ctx = canvas.getContext("2d");
  const colors = [
    "#f97316",
    "#22c55e",
    "#3b82f6",
    "#eab308",
    "#ec4899",
    "#a855f7",
    "#14b8a6",
  ];

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resize();

  const particles = Array.from({ length: 160 }, () => ({
    x: canvas.width * (0.3 + Math.random() * 0.4),
    y: canvas.height * 0.35,
    vx: (Math.random() - 0.5) * 14,
    vy: Math.random() * -14 - 4,
    w: Math.random() * 10 + 5,
    h: Math.random() * 6 + 3,
    color: colors[Math.floor(Math.random() * colors.length)],
    rotation: Math.random() * 360,
    spin: (Math.random() - 0.5) * 12,
    gravity: 0.18 + Math.random() * 0.12,
    drag: 0.99,
  }));

  let frame = 0;
  const maxFrames = 180;

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    frame += 1;

    particles.forEach((p) => {
      p.vx *= p.drag;
      p.vy += p.gravity;
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.spin;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });

    if (frame < maxFrames) {
      confettiFrameId = requestAnimationFrame(animate);
    } else {
      stopConfetti();
    }
  };

  confettiFrameId = requestAnimationFrame(animate);
}

function finishGame(win) {
  isGameOver = true;
  if (win) {
    setMessage(`You win! The word was "${answer}".`);
    fireConfetti();
  } else {
    maskedWordEl.textContent = answer.split("").join(" ");
    setMessage(`You lost! The word was "${answer}".`);
  }
  renderKeyboard();
  renderHints();
}

function handleGuess(rawInput) {
  if (isGameOver) return;

  const guess = String(rawInput).toLowerCase();
  if (!/^[a-z]$/.test(guess)) return;

  if (guessed.has(guess)) {
    setMessage(`You already guessed "${guess}".`);
    return;
  }

  guessed.add(guess);

  if (!answer.includes(guess)) {
    lives -= 1;
    setMessage(`Nope, "${guess}" is not in the word.`);
  } else {
    setMessage(`Nice! "${guess}" is in the word.`);
  }

  render();
  checkWinOrLose();
}

function loadThemeFigure() {
  const theme = getActiveTheme();
  hangmanStageEl.innerHTML = theme.svg.trim();
  partEls = [...hangmanStageEl.querySelectorAll("[data-part]")];
}

function applyTheme(themeId, startNewGame = false) {
  if (!THEMES[themeId]) return;

  currentTheme = themeId;
  document.body.setAttribute("data-theme", themeId);

  const theme = getActiveTheme();
  gameTitleEl.textContent = theme.title;
  themeTaglineEl.textContent = theme.tagline;
  themeSelectEl.value = themeId;

  loadThemeFigure();

  if (startNewGame) {
    newGame();
  } else {
    renderDrawing();
  }
}

function newGame() {
  stopConfetti();
  answer = chooseWord();
  guessed = new Set();
  lives = MAX_LIVES;
  hintsUsed = 0;
  isGameOver = false;
  hintTextEl.hidden = true;
  hintTextEl.textContent = "";
  setMessage("Guess a letter to start.");
  render();
}

hintButtonEl.addEventListener("click", useHint);

themeSelectEl.addEventListener("change", (event) => {
  applyTheme(event.target.value, true);
});

resetButtonEl.addEventListener("click", newGame);

populateThemeSelect();
buildKeyboard();
applyTheme("default", true);
