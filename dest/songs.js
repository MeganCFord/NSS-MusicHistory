/*eslint-disable no-console */

const songs = [];

songs.push({
  id: songs.length+1,
  artist: "Tzchaikovsky", 
  song: "Overture",
  album: "Swan Lake", 
  genre: "Ballet"
});

songs.push({
  id: songs.length+1,
  artist: "Beethoven", 
  song: "Allegro", 
  album: "Op. No. 6", 
  genre: "Classical"
});

songs.push({
  id: songs.length+1,
  artist: "Bach", 
  song: "Fugue no.42 in C# Major", 
  album: "Fugues and Preludes", 
  genre: "Baroque"
});

songs.push({
  id: songs.length+1,
  artist: "Mozart", 
  song: "Popagena", 
  album: "The Magic Flute", 
  genre: "Opera"
});


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
