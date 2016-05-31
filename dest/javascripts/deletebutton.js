var musicHistory = (function(deleter) {
  

  deleter.wasDeleteButtonClicked = function(e) {
    if ($(e.target).hasClass("delete")) {
      const rowToRemove = e.target.closest(".song");
      const idToRemove = rowToRemove.id;
      $(rowToRemove).remove();
      musicHistory.removeSong(idToRemove);
    }
  };

  $("#songListDiv").on("click", (event) => {deleter.wasDeleteButtonClicked(event);});


  return deleter;
}(musicHistory || {}));
