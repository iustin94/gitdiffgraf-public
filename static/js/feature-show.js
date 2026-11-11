const show = document.getElementById("featureShow");
const track = show.querySelector(".feature-show-track");
const cards = [...track.querySelectorAll("figure")];
const dots = show.querySelector(".feature-show-dots");

function shownIndex() {
  return Math.round(track.scrollLeft / track.clientWidth);
}

function showTheCard(index) {
  const lastIndex = cards.length - 1;
  const wrapped = index < 0 ? lastIndex : index > lastIndex ? 0 : index;
  track.scrollTo({ left: wrapped * track.clientWidth, behavior: "smooth" });
}

function markTheShownDot() {
  const shown = shownIndex();
  [...dots.children].forEach((dot, index) => dot.classList.toggle("shown", index === shown));
}

cards.forEach((card, index) => {
  const dot = document.createElement("button");
  dot.type = "button";
  dot.setAttribute("aria-label", `Feature ${index + 1}: ${card.querySelector("h3").textContent}`);
  dot.addEventListener("click", () => showTheCard(index));
  dots.append(dot);
});

show.querySelector(".feature-show-previous").addEventListener("click", () => showTheCard(shownIndex() - 1));
show.querySelector(".feature-show-next").addEventListener("click", () => showTheCard(shownIndex() + 1));
track.addEventListener("scroll", markTheShownDot);
markTheShownDot();
