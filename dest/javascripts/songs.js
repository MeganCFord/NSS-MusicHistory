/*eslint-disable no-console */

const songs = [];



const addSongsButton = document.getElementById("addSongButton");

const addSong = function () {
  const songName = document.getElementById("addSongName").value;
  const artistName = document.getElementById("addArtistName").value;
  const albumName = document.getElementById("addAlbumName").value;
  
  //find out which checkbox is selected. note this will also select the ones in the listSongs which could bite me later.
  const listofGenrecheckBoxes = Array.from(document.getElementsByClassName("aGenre"));
  let genreName = "null";
  for (let i = 0; i < listofGenrecheckBoxes.length; i++) {
    if (listofGenrecheckBoxes[i].checked) {
      genreName = listofGenrecheckBoxes[i].value;
      console.log("genre match!", genreName );
    } else {
      console.log("nope");
    }
  }


  songs.push({
    id: songs.length+1, 
    artist: artistName, 
    song: songName, 
    album: albumName, 
    genre: genreName
  });
  //from songInjector.js
  populateTheDom();
};

addSongsButton.addEventListener("click", addSong);

console.log("songs after pushing", songs );
