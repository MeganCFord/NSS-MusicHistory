
//DOM grabbers.
var songListDiv = document.getElementById("songListDiv");
var genreDiv = document.getElementById("genreList");
var albumDiv = document.getElementById("albumList");
var artistDiv = document.getElementById("artistList");


//looper to inject initial song info into DOM. 
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
  </section>`

  //genre checkbox div
  genreDiv.innerHTML += `<li><input class="l"type="checkbox" name="${songObject.genre}" value="${songObject.genre}"> ${songObject.genre}</li>`

  //album dropdown div 
  albumDiv.innerHTML += `<option value="${songObject.album}">${songObject.album}</option>`

  //artist dropdown div 
  artistDiv.innerHTML += `<option value="${songObject.artist}">${songObject.artist}</option>`
  
})
