"use strict";

const previousBtn = document.querySelector(".fa-backward");
const playBtn = document.querySelector(".fa-play");
const nextBtn = document.querySelector(".fa-forward");

const progressContainer = document.querySelector(".progress");
const musicProgress = document.querySelector(".music_progress");
const currentTimeEl = document.querySelector(".start_min");
const durationElement = document.querySelector(".end_min");

const Rotate = document.querySelector(".image_container");

const music = document.querySelector("audio");
const title = document.querySelector("h2");
const artist = document.querySelector("p");

// Musics

const songs = [
  {
    musicName: "jacinto-1",
    musicTitle: "musicTitle--1",
    artistName: "artistname--1",
  },
  {
    musicName: "jacinto-2",
    musicTitle: "musicTitle--2",
    artistName: "artistname--2",
  },
  {
    musicName: "jacinto-3",
    musicTitle: "musicTitle--3",
    artistName: "artistname--3",
  },
  {
    musicName: "metric-1",
    musicTitle: "musicTitle--4",
    artistName: "artistname--4",
  },
];

// play music function
let isPlaying = false;

function playMusic() {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  Rotate.classList.add("spinner");
  music.play();
}

// pause music function
function pauseMusic() {
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  Rotate.classList.remove("spinner");
  music.pause();
}

// loading songs function
function loadSongs(song) {
  title.textContent = song.musicTitle;
  artist.textContent = song.artistName;
  music.src = `musics/${song.musicName}.mp3`;
}

// handling next Btn function
let indexOfSong = 0;
function nextMusic() {
  indexOfSong++;
  if (indexOfSong > songs.length - 1) {
    indexOfSong = 0;
  }
  loadSongs(songs[indexOfSong]);
  playMusic();
}

// handling previous Btn function
function prevMusic() {
  indexOfSong--;
  if (indexOfSong < 0) {
    indexOfSong = songs.length - 1;
  }
  loadSongs(songs[indexOfSong]);
  playMusic();
}

// update Progress function
function updateProgress(e) {
  if (isPlaying) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    musicProgress.style.width = `${progressPercent}%`;

    // display duration
    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) {
      durationSeconds = `0${durationSeconds}`;
    }
    // delay switching
    if (durationSeconds) {
      durationElement.textContent = `${durationMinutes}:${durationSeconds}`;
    }

    // display current-time
    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) {
      currentSeconds = `0${currentSeconds}`;
    }
    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
  }
}

// setProgress function

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const { duration } = music;
  music.currentTime = (clickX / width) * duration;
}

// Event Listners
playBtn.addEventListener("click", () =>
  isPlaying ? pauseMusic() : playMusic()
);
previousBtn.addEventListener("click", prevMusic);
nextBtn.addEventListener("click", nextMusic);
music.addEventListener("timeupdate", updateProgress);
progressContainer.addEventListener("click", setProgress);
