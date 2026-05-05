// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const selector = document.getElementById("horn-select");
  const image = document.querySelector("img")
  const audio = document.querySelector("audio")
  const volumeSlider = document.getElementById("volume");
  const volumeIcon = document.querySelector("#volume-controls img");
  const button = document.querySelector("button");

  selector.addEventListener("change", updateHorn);
  function updateHorn(e) {
    image.src = `assets/images/${e.target.value}.svg`
    audio.src = `assets/audio/${e.target.value}.mp3`
  }
  
  volumeSlider.addEventListener("input", (e) => {
    if(volumeSlider.value >= 67){
      volumeIcon.src = 'assets/icons/volume-level-3.svg'
    } else if (volumeSlider.value >= 33){
      volumeIcon.src = 'assets/icons/volume-level-2.svg'
    } else if(volumeSlider.value >= 1){
      volumeIcon.src = 'assets/icons/volume-level-1.svg'
    } else {
      volumeIcon.src = 'assets/icons/volume-level-0.svg'
    }
    audio.volume = (volumeSlider.value)/100; 
  });
  

  button.addEventListener("click", (e) => {
    audio.play();
    if(selector.value == 'party-horn'){
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });

}