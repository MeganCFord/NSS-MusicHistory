"use strict";


var musicHistory = (function(loader) {
  
  $(document).ready(function(){
    $.ajax({url: "../songs.json", success: function(result){
      $.each(result.stockSongs, function(index, song){
        musicHistory.pushSong(song);
      });
    }});
  });

  $("#moreButton").on("click", function() {
    $.ajax({url: "../songs2.json", success: function(result) {
      $.each(result.stockSongs, function(index, song){
        musicHistory.pushSong(song);
      });
    }});
  });

  return loader;
}(musicHistory || {}));

