"use strict";


const songsRequest = new XMLHttpRequest();
songsRequest.open("GET", "../songs.json");
songsRequest.send();
songsRequest.addEventListener("load", parseSongs);
songsRequest.addEventListener("error", logHTTPError);

function logHTTPError () {
  console.log("http request resulted in an error" );

}

function parseSongs () {
   let songs = JSON.parse(songsRequest.responseText).songs;
   pushSongsIntoArray(songs);
}

function pushSongsIntoArray(songs) {
  songs.forEach();
}
