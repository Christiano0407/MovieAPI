// Audio Javascript
const audio = document.querySelector(`audio`);
console.log(audio);
const songLength = document.getElementById(`SongLength`);
const currentTime = document.getElementById(`CurrentSongTime`);

// Calculate Time
const calculateTime = (secs) => {
  const minutes = Math.floor(secs / 60),
    seconds = Math.floor(secs % 60),
    returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${minutes}: ${returnedSeconds}`;
};

const displayDuration = () => {
  songLength.innerHTML = calculateTime(audio.duration);
};

if (audio.readyState > 0) {
  displayDuration();
  currentTime.innerHTML = calculateTime(audio.currentTime);
} else {
  audio.addEventListener(`loadedmetadata`, () => {
    displayDuration();
  });
}

audio.ontimeupdate = function () {
  currentTime.innerHTML = calculateTime(audio.currentTime);
  setProgress();
};

// Progress Audio
function setProgress() {
  let percentage = (audio.currentTime / audio.duration) * 100;
  document.querySelector(`.progress`).style.width = percentage + `% `;
}

// Controls Audio
const playPause = document.getElementById(`playPause`),
  plus10 = document.getElementById(`plus10`),
  back10 = document.getElementById(`back10`);

playPause.addEventListener(`click`, () => {
  if (audio.paused) {
    playPause.src = `/src/img/pause.svg`;
    audio.play();
  } else {
    playPause.src = `/src/img/play.svg`;
    audio.pause();
  }
});
// Adelantar e Regresar 10 sec =>
plus10.addEventListener(`click`, () => {
  audio.currentTime += 10;
});
back10.addEventListener(`click`, () => {
  audio.currentTime -= 10;
});
