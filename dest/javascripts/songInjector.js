"use strict";

var musicHistory = (function(injector) {

  //DOM grabbers.
  const songListDiv = document.getElementById("songListDiv");
  injector.getSongListDiv = function() {
    return songListDiv;
  };
  const albumDiv = document.getElementById("albumList");
  const artistDiv = document.getElementById("artistList");

  const genreDivs = Array.from(document.getElementsByClassName("genreList"));
  const arrayOfGenres = ["Ballet", "Classical", "Baroque", "Opera"];

  injector.populateTheDom = function(songs) {
    //first clear the DOM.
    injector.clearTheDOM(); 

    songs.forEach(function(songObject) {

  //main list div
      songListDiv.innerHTML += `
      <section id = "${songObject.id}" class= "song">
        <h1>${songObject.song}</h1>
          <ul>
            <li>${songObject.artist}</li>
            <li>${songObject.album}</li>
            <li>${songObject.genre}</li>
            <li><button class="delete">Delete Song</button></li>
         </ul>
      </section>`;

    //album dropdown div 
      albumDiv.innerHTML += `<option value="${songObject.album}">${songObject.album}</option>`;

    //artist dropdown div 
      artistDiv.innerHTML += `<option value="${songObject.artist}">${songObject.artist}</option>`;
  
    });
  
    //genre checkbox div. runs off standard array.
    genreDivs.forEach(function(div) {
      for (let i = 0; i < arrayOfGenres.length; i++) {
        div.innerHTML += `<li><input class="aGenre" type="checkbox" name="${arrayOfGenres[i]}" value="${arrayOfGenres[i]}"> ${arrayOfGenres[i]}</li>`;
      }
    });

  };

  injector.clearTheDOM = function() {
    songListDiv.innerHTML = "";

    genreDivs.forEach(function(div) {
      div.innerHTML= "";
    });
    albumDiv.innerHTML= "";
    artistDiv.innerHTML= "";
  };


  return injector;
}(musicHistory || {}))
