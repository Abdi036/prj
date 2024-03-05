"use strict";

const previousBtn = document.querySelector(".fa-backward");
const playBtn = document.querySelector(".fa-play");
const nextBtn = document.querySelector(".fa-forward");

const Rotate = document.querySelector(".image_container");

const music = document.querySelector("audio");
const title = document.querySelector("h2");
const artist = document.querySelector("p");

// Musics

const songs = [
  {
    musicName: "jacinto-1",
    musicTitle: "musicTitle",
    artistName: "artistname",
  },
  {
    musicName: "jacinto-2",
    musicTitle: "musicTitle",
    artistName: "artistname",
  },
  {
    musicName: "jacinto-3",
    musicTitle: "musicTitle",
    artistName: "artistname",
  },
  {
    musicName: "metric-1",
    musicTitle: "musicTitle",
    artistName: "artistname",
  },
];

// function to handle music play

let isPlaying = false;

function playMusic() {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  Rotate.classList.add("spinner");
  music.play();
}

function pauseMusic() {
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  Rotate.classList.remove("spinner");
  music.pause();
}

playBtn.addEventListener("click", () =>
  isPlaying ? pauseMusic() : playMusic()
);

// loading songs
function loadSongs(song) {
  title.textContent = song.musicTitle;
  artist.textContent = song.artistName;
  music.src = `musics/${song.musicName}.mp3`;
}

// handling next Btn
let indexOfSong = 0;
function nextMusic() {
  indexOfSong++;
  if (indexOfSong > songs.length - 1) {
    indexOfSong = 0;
  }
  loadSongs(songs[indexOfSong]);
  playMusic();
  console.log(indexOfSong);
}
nextBtn.addEventListener("click", nextMusic);

// handling previous Btn
function prevMusic() {
  indexOfSong--;
  if (indexOfSong < 0) {
    indexOfSong = songs.length - 1;
  }
  loadSongs(songs[indexOfSong]);
  playMusic();
  console.log(indexOfSong);
}
previousBtn.addEventListener("click", prevMusic);
