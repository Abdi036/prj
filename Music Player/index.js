"use strict";
const music = document.querySelector("audio");
const previousBtn = document.querySelector(".fa-backward");
const playBtn = document.querySelector(".fa-play");
const nextBtn = document.querySelector(".fa-forward");

// function to handle music play

let isPlaying = false;
function playMusic() {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  music.play();
}

function pauseMusic() {
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");

  music.pause();
}

playBtn.addEventListener("click", () =>
  isPlaying ? pauseMusic() : playMusic()
);
