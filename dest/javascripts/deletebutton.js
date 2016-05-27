var musicHistory = (function(deleter) {
  

  const songListDiv = musicHistory.getSongListDiv();


  deleter.wasDeleteButtonClicked = function(e) {
    if (e.target.classList.contains("delete")) {
      const rowToRemove = e.target.parentNode.parentNode.parentNode;
      const idToRemove = rowToRemove.id;
      console.log("id to remove", idToRemove );
      const specificRow = document.getElementById(idToRemove);
      specificRow.parentNode.removeChild(specificRow);
      musicHistory.removeSong(idToRemove);
    }
  };

  songListDiv.addEventListener("click", deleter.wasDeleteButtonClicked);


  return deleter;
}(musicHistory || {}));
