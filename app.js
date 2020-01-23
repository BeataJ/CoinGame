function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const player = document.querySelector("#player");

window.addEventListener("keyup", function(e) {
  if (e.key === "ArrowDown" || e.key === "Down") {
    const currentTop = extractPos(player.style.top);
    player.style.top = `${currentTop + 50}px`;
  } else if (e.key === "ArrowUp" || e.key === "Up") {
    const currentTop = extractPos(player.style.top);
    player.style.top = `${currentTop - 50}px`;
  } else if (e.key === "RightArrow" || e.key === "Right") {
    const currentLeft = extractPos(player.style.left);
    player.style.left = `${currentLeft + 50}px`;
  } else if (e.key === "LeftArrow" || e.key === "Left") {
    const currentLeft = extractPos(player.style.left);
    player.style.left = `${currentLeft - 50}px`;
  }
});

const extractPos = pos => {
  if (!pos) return 100;
  return parseInt(pos.slice(0, -2));
};
