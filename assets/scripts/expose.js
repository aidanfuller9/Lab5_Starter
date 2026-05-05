// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const selector = document.getElementById("horn-select");
  const image = document.querySelector("img")
  const audio = document.querySelector("audio")

  selector.addEventListener("change", updateHorn);

  function updateHorn(e) {
    image.src = `assets/images/${event.target.value}.svg`
    audio.src = `assets/audio/${event.target.value}.mp3`
  }
}