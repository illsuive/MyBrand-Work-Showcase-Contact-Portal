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


//  --background-color: #fefefe;
//     --text-color: #4E56C0;