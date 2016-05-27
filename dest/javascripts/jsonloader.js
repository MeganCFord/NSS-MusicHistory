"use strict";

let musicHistory = (function(loader) {
  
  //XML HTTP request.
  const songsRequest = new XMLHttpRequest();
  songsRequest.open("GET", "../songs.json");
  songsRequest.send();
  songsRequest.addEventListener("load", parseSongs);
  songsRequest.addEventListener("error", loader.logHTTPError);

  loader.logHTTPError = function() {
    console.log("http request resulted in an error" );

  };

  //parse songs object, puts into array, and pushes each object from the array into the songs array in songpusher.js (which calls song injector).
  loader.parseSongs = function() {
    const stockSongs = JSON.parse(songsRequest.responseText).songs;
    const stockSongArray = Object.keys(stockSongs);
    console.log("stock song array", stockSongArray);
    stockSongArray.forEach(function(song) {
      musicHistory.pushSong(song);
    });
  };

  return loader;
}(musicHistory || {}));
