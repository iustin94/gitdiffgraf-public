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
