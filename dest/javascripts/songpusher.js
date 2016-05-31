/*eslint-disable no-console */

const songs = [];

var musicHistory = (function(pusher) {

  // const addSongButton = document.getElementById("addSongButton");

  

  pusher.setSong = function (genreName) {
    console.log("set song working", genreName );
    const currentSong = {
      id: (Math.random() * 4).toString(), 
      song: $("#addSongName").val(),
      artist: $("#addArtistName").val(),
      album: $("#addAlbumName").val(),
      genre: genreName
    };
    console.log("current song", currentSong);
    pusher.pushSong(currentSong);
  };


  pusher.getGenre = function() {

    let genreName = "null";

    $(".aGenre").each(function(){
      if (this.checked) {
        genreName = $(this).val();
      } 
    });
    console.log("checked genre", genreName);
    pusher.setSong(genreName);
  
  };


  pusher.pushSong = function(song) {
    songs.push(song);
    console.log("songs from pusher", songs );
    musicHistory.populateTheDom(songs);
  };

  //removes a song from the songs array. 
  pusher.removeSong = function(id) {
    console.log("id",  id);
    console.log("songs", songs );
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
  $("#addSongButton").on("click", pusher.getGenre);

  return pusher;
}(musicHistory || {}));
