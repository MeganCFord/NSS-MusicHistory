"use strict";

var musicHistory = (function(loader) {
  

  //parse songs object, puts into array, and pushes each object from the array into the songs array in songpusher.js (which calls song injector).
  loader.parseSongs = function() {
    const stockSongs = JSON.parse(songsRequest.responseText).stockSongs;
    stockSongs.forEach(function(song) {
      musicHistory.pushSong(song);
    });
  };

  loader.logHTTPError = function() {
    console.err("http request resulted in an error" );
  };

  //XML HTTP request.
  const songsRequest = new XMLHttpRequest();
  songsRequest.open("GET", "../songs.json");
  songsRequest.send();
  songsRequest.addEventListener("load", loader.parseSongs);
  songsRequest.addEventListener("error", loader.logHTTPError);

  return loader;
}(musicHistory || {}));
