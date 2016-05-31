"use strict";

var musicHistory = (function(injector) {

  const arrayOfGenres = ["Ballet", "Classical", "Baroque", "Opera"];

  injector.populateTheDom = function(songs) {
    //first clear the DOM.
    injector.clearTheDOM(); 

    songs.forEach(function(songObject) {

  //main list div
      const songDiv = `
      <section id = "${songObject.id}" class= "song">
        <h1>${songObject.song}</h1>
          <ul>
            <li>${songObject.artist}</li>
            <li>${songObject.album}</li>
            <li>${songObject.genre}</li>
            <li><button class="delete">Delete Song</button></li>
         </ul>
      </section>`;

      $(songDiv).appendTo($("#songListDiv"));

    //album dropdown div 
      $("#albumList").append(`<option value="${songObject.album}">${songObject.album}</option>`);

    //artist dropdown div 
      $("#artistList").append(`<option value="${songObject.artist}">${songObject.artist}</option>`);
  
    });
  
    //genre checkbox div. runs off standard array.
    $(".genreList").each(function() {
      for (let i = 0; i < arrayOfGenres.length; i++) {
        const genreCheckbox = `<li><input class="aGenre" type="checkbox" name="${arrayOfGenres[i]}" value="${arrayOfGenres[i]}"> ${arrayOfGenres[i]}</li>`;
        $(genreCheckbox).appendTo(this);
      }
    });

  };

  injector.clearTheDOM = function() {
    $("#songListDiv").empty();

    $(".genreList").each(function() {
      $(this).empty();
    });
    $("#albumList").empty();
    $("#artistList").empty();
  };


  return injector;
}(musicHistory || {}));
