/*eslint-disable no-console */

const songs = [];



const addSongsButton = document.getElementById("addSongButton");

const setSong = function () {
  let genreName = "null";

  const currentSong = {
    song: document.getElementById("addSongName").value,
    artist: document.getElementById("addArtistName").value,
    album: document.getElementById("addAlbumName").value,
    genre: addGenre(genreName)
  };
  pushSongs(currentsong);
};


function addGenre () {
  //find out which checkbox is selected. note this will also select the ones in the listSongs which could bite me later.
  const listofGenrecheckBoxes = Array.from(document.getElementsByClassName("aGenre"));

  for (let i = 0; i < listofGenrecheckBoxes.length; i++) {
    if (listofGenrecheckBoxes[i].checked) {
      genreName = listofGenrecheckBoxes[i].value;
      return genreName;   
    } 
  }
}

function pushSongs (song) {
  songs.push(song);
}

addSongsButton.addEventListener("click", setSong);
