const hero = document.getElementById("heroVideo");
const choices = [...hero.querySelectorAll(".hero-video-choice button")];
const videos = [...hero.querySelectorAll("video")];

function showTheVideo(name) {
  for (const choice of choices) choice.setAttribute("aria-selected", String(choice.dataset.video === name));

  for (const video of videos) {
    const isChosen = video.dataset.video === name;
    video.hidden = !isChosen;
    video.currentTime = 0;
    if (isChosen) video.play();
    else video.pause();
  }
}

for (const choice of choices) choice.addEventListener("click", () => showTheVideo(choice.dataset.video));

let loadedTheme = null;

function themeOfThePage() {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function loadTheThemeOfThePage() {
  const theme = themeOfThePage();
  if (theme === loadedTheme) return;
  loadedTheme = theme;

  for (const video of videos) {
    video.poster = video.dataset[`${theme}Poster`];
    video.src = video.dataset[`${theme}Src`];
    if (!video.hidden) video.play();
  }
}

const themeToggles = new MutationObserver(loadTheThemeOfThePage);
themeToggles.observe(document.documentElement, { attributeFilter: ["class"] });
loadTheThemeOfThePage();
