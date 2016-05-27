/*global songs */

//DOM grabbers.
const songListDiv = document.getElementById("songListDiv");
const albumDiv = document.getElementById("albumList");
const artistDiv = document.getElementById("artistList");

const genreDivs = Array.from(document.getElementsByClassName("genreList"));
const arrayOfGenres = ["Ballet", "Classical", "Baroque", "Opera"];

//looper to inject initial song info into DOM. 
const populateTheDom = function() {
  songListDiv.innerHTML = "";
  genreDivs.forEach(function(div) {
    div.innerHTML= "";
  });
  albumDiv.innerHTML= "";
  artistDiv.innerHTML= "";

  songs.forEach(function(songObject) {
  //main list div
    songListDiv.innerHTML += `
    <section id = "song${songObject.id}" class= "song">
      <h1>${songObject.song}</h1>
        <ul>
          <li>${songObject.artist}</li>
          <li>${songObject.album}</li>
          <li>${songObject.genre}</li>
       </ul>
    </section>`;

   

  //album dropdown div 
    albumDiv.innerHTML += `<option value="${songObject.album}">${songObject.album}</option>`;

  //artist dropdown div 
    artistDiv.innerHTML += `<option value="${songObject.artist}">${songObject.artist}</option>`;
  
  });
  
  //genre checkbox div
  genreDivs.forEach(function(div) {
    for (let i = 0; i < arrayOfGenres.length; i++) {

      div.innerHTML += `<li><input class="aGenre" type="checkbox" name="${arrayOfGenres[i]}" value="${arrayOfGenres[i]}"> ${arrayOfGenres[i]}</li>`;
    }
  });
};

populateTheDom();
