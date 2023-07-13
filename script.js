const musicPlayer = document.getElementById("musicPlayer");
const animation = document.querySelector(".music-player-animation");

function playMusic() {
  musicPlayer.play();
  animation.style.display = "block";
}

function pauseMusic() {
  musicPlayer.pause();
  animation.style.display = "none";
}

function stopMusic() {
  musicPlayer.pause();
  musicPlayer.currentTime = 0;
  animation.style.display = "none";
}
