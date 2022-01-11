console.group("Music Audio");

// Function CreateTrackItem
function CreateTrackItem(index, name, duration) {
  let trackItem = document.createElement(`div`);
  trackItem.setAttribute("class", "playlist-track-ctn");
  trackItem.setAttribute("id", "ptc-" + index);
  trackItem.setAttribute("data-index", index);
  document.querySelector(".playlist-ctn").appendChild(trackItem);

  let playBtnItem = document.createElement(`div`);
  playBtnItem.setAttribute("class", "playlist-btn-play");
  playBtnItem.setAttribute("id", "pbp-" + index);
  document.querySelector("#ptc-" + index).appendChild(playBtnItem);

  let btnImg = document.createElement(`i`);
  btnImg.setAttribute("class", "fas fa-play");
  btnImg.setAttribute("height", "40");
  btnImg.setAttribute("width", "40");
  btnImg.setAttribute("id", "p-img" + index);
  document.querySelector("#pbp-" + index).appendChild(btnImg);

  let trackInfoItem = document.createElement(`div`);
  trackInfoItem.setAttribute("class", "playlist-info-track");
  trackInfoItem.innerHTML = name;
  document.querySelector("#ptc-" + index).appendChild(trackInfoItem);

  let trackDurationItem = document.createElement(`div`);
  trackDurationItem.setAttribute("class", "playlist-duration");
  trackDurationItem.innerHTML = duration;
  document.querySelector("#ptc-" + index).appendChild(trackDurationItem);
}

// Audio List
const listAudio = [
  {
    name: "Artist 1 - Audio 1",
    File: "../src/assets/music/audio1.mp3",
    duration: "0:36",
  },
  {
    name: "Artist 2 - Audio 2",
    file: "../src/assets/music/audio2.mp3",
    duration: "1:36",
  },
  {
    name: "Artist 3 - Audio 3",
    file: "../src/assets/music/audio3.mp3",
    duration: "0:30",
  },
];

//ciclo for
for (let i = 0; i < listAudio.length; i++) {
  CreateTrackItem(i, listAudio[i].name, listAudio[i].duration);
}
// Index Audio
let indexAudio = 0;
// LoadNewTracks
function loadNewTrack(index) {
  let player = document.querySelector(`#source-audio`);
  player.src = listAudio[index].file;
  document.querySelector(`title`).innerHTML = listAudio[index].name;
  this.currentAudio = document.getElementById("myAudio");
  this.currentAudio.load();
  this.toggleAudio();
  this.updateStyleList(this.indexAudio, index);
  this.indexAudio = index;
}
// PlayList
let playListItem = document.querySelectorAll(`.playlist-track-ctn`);

// Ciclo playListItem
for (let i = 0; i < playListItem.length; i++) {
  playListItem[i].addEventListener("click", getClickedElement.bind(this));
}

// Clicked
function getClickedElement(event) {
  for (let i = 0; i < playListItem.length; i++) {
    if (playListItem[i] == event.target) {
      let clickedIndex = event.target.getAttribute("data-index");
      if (clickedIndex == this.indexAudio) {
        this.toggleAudio();
      } else {
        loadNewTrack(clickedIndex);
      }
    }
  }
}
document.querySelector(`#source-audio`).src = listAudio[indexAudio].file;
document.querySelector(`.title`).innerHTML = listAudio[indexAudio].nam;

// CurrentAudio
let currentAudio = document.getElementById(`myAudio`);
currentAudio.load();

currentAudio.onloadedmetadata = function () {
  document.getElementsByClassName(`duration`)[0].innerHTML = this.getMinutes(
    this.currentAudio.duration
  );
}.bind(this);

let intervall;

// toggleAudio
function toggleAudio() {
  if (this.currentAudio.paused) {
    document.querySelector(`#icon-play`).style.display = `none`;
    document.querySelector(`#icon-pause`).style.display = `block`;
    document
      .querySelector(`#ptc-` + this.indexAudio)
      .classList.add("active-track");
    this.pauseToPlay(this.indexAudio);
    this.currentAudio.play();
  } else {
    document.querySelector(`#icon-play`).style.display = `block`;
    document.querySelector(`#icon-pause`).style.display = `none`;
    this.pauseToPlay(this.indexAudio);
    this.currentAudio.pause();
  }
}

// Pause Audio
function pauseAudio() {
  this.currentAudio.pause();
  clearInterval(intervall);
}

// Timer
const timer = document.getElementsByClassName(`timer`)[0];
// Bar Progress
const barProgress = document.getElementById(`myBar`);
// OnTimeUpdate
let width = 0;

function onTimeUpdate() {
  let t = this.currentAudio.currentTime;
  timer.innerHTML = this.getMinutes(t);
  this.setBarProgress();

  if (this.currentAudio.ended) {
    document.querySelector(`#icon-play`).style.display = `block`;
    document.querySelector(`#icon-pause`).style.display = `none`;
    this.pauseToPlay(this.indexAudio);
    if (this.indexAudio < listAudio.length - 1) {
      let index = parseInt(this.indexAudio) + 1;
      this.loadNewTrack(index);
    }
  }
}

// Bar Progress >
function setBarProgress() {
  let progress =
    (this.currentAudio.currentTime / this.currentAudio.duration) * 100;
  document.getElementById("myBar").style.width = progress + "%";
}

// Get Minutes >

console.groupEnd();
