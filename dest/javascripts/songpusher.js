/*eslint-disable no-console */

const songs = [];

var musicHistory = (function(pusher) {

  //DOM grabbers.
  const addSongButton = document.getElementById("addSongButton");
  const listofGenreCheckBoxes = Array.from(document.getElementsByClassName("aGenre"));

  

  pusher.setSong = function (genreName) {

    const currentSong = {
      song: document.getElementById("addSongName").value,
      artist: document.getElementById("addArtistName").value,
      album: document.getElementById("addAlbumName").value,
      genre: genreName
    };
    console.log("current song", currentSong);
    pusher.pushSong(currentSong);
  };


  pusher.getGenre = function() {

    let genreName = "null";

    listofGenreCheckBoxes.forEach(function(genre){
      if (genre.checked) {
        genreName = genre.value;
      }
      console.log("checked genre", genreName);
      pusher.setSong(genreName);
    });
  
  };

  pusher.pushSong = function(song) {
    songs.push(song);
    musicHistory.populateTheDom(songs);
  };

  //event listener
  addSongButton.addEventListener("click", pusher.getGenre);

  return pusher;
}(musicHistory || {}));
