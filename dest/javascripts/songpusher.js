/*eslint-disable no-console */

const songs = [];

var musicHistory = (function(pusher) {

  //DOM grabbers.
  const addSongButton = document.getElementById("addSongButton");

  

  pusher.setSong = function (genreName) {
    console.log("set song working", genreName );
    const currentSong = {
      id: songs.length+1,
      song: document.getElementById("addSongName").value,
      artist: document.getElementById("addArtistName").value,
      album: document.getElementById("addAlbumName").value,
      genre: genreName
    };
    console.log("current song", currentSong);
    pusher.pushSong(currentSong);
  };


  pusher.getGenre = function() {
    console.log("get genre function running");
    const listofGenreCheckBoxes = Array.from(document.getElementsByClassName("aGenre"));

    console.log("list of genre checkboxes", listofGenreCheckBoxes );

    let genreName = "null";

    listofGenreCheckBoxes.forEach(function(genre){
      if (genre.checked) {
        genreName = genre.value;
      } 
    });
    console.log("checked genre", genreName);
    pusher.setSong(genreName);
  
  };

  pusher.pushSong = function(song) {
    songs.push(song);
    musicHistory.populateTheDom(songs);
  };

  //removes a song from the songs array. 
  pusher.removeSong = function(id) {
    let index = null;
    songs.forEach(function(song){
      if (song.id === id) {
        index = songs.indexOf(song);
        return index;
      }
    });
    if (index > -1) {
      songs.splice(index, 1);
    }
    musicHistory.populateTheDom(songs);
  };


  //event listener
  addSongButton.addEventListener("click", pusher.getGenre);

  return pusher;
}(musicHistory || {}));
