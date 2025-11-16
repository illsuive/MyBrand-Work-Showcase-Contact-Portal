const darkModeBtn = document.querySelector(".NightControl");
let isDark = false;

darkModeBtn.addEventListener("click", function() {
  const root = document.documentElement;
  if (!isDark) {
    // Swap colors for dark mode
    let bgColor = getComputedStyle(root).getPropertyValue("--background-color");
    let textColor = getComputedStyle(root).getPropertyValue("--text-color");
    root.style.setProperty("--background-color", textColor);
    root.style.setProperty("--text-color", bgColor);
    darkModeBtn.textContent = "🌞";
  } else {
    // Swap them back for light mode
    let bgColor = getComputedStyle(root).getPropertyValue("--background-color");
    let textColor = getComputedStyle(root).getPropertyValue("--text-color");
    root.style.setProperty("--background-color", textColor);
    root.style.setProperty("--text-color", bgColor);
    darkModeBtn.textContent = "🌙";
  }
  isDark = !isDark;
});


const typedText = document.querySelector(".text-type");
const phrases = ["Web Developer", "Designer", "Freelancer"];
let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typingSpeed = 150;
let deletingSpeed = 100;
let pauseDuration = 2000;

function type() {
  const currentPhrase = phrases[currentPhraseIndex];
  if (isDeleting) {
    currentCharIndex--;
    typedText.textContent = currentPhrase.substring(0, currentCharIndex);
    if (currentCharIndex === 0) {
      isDeleting = false;
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, deletingSpeed);
    }
  } else {
    currentCharIndex++;
    typedText.textContent = currentPhrase.substring(0, currentCharIndex);
    if (currentCharIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(type, pauseDuration);
    } else {
      setTimeout(type, typingSpeed);
    }
  }
}

type();