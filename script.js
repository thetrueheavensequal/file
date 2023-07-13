const musicPlayer = document.getElementById("musicPlayer");
const progressBar = document.querySelector(".progress-bar-inner");

function playMusic() {
  musicPlayer.play();
}

function pauseMusic() {
  musicPlayer.pause();
}

function stopMusic() {
  musicPlayer.pause();
  musicPlayer.currentTime = 0;
}

musicPlayer.addEventListener("timeupdate", updateProgressBar);

function updateProgressBar() {
  const progress = (musicPlayer.currentTime / musicPlayer.duration) * 100;
  progressBar.style.width = `${progress}%`;
}
