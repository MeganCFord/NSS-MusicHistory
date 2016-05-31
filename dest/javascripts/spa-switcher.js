
var musicHistory = (function(switcher){


  switcher.switchtoAddView = function() {
    $("#addMusicNavButton").attr("disabled", "disabled");
    $("#viewMusicNavButton").removeAttr("disabled");
    $("#addSongsDiv").removeClass("hidden");
    $("#showSongsDiv").addClass("hidden");

  };

  switcher.switchtoViewView = function() {
    $("#addMusicNavButton").removeAttr("disabled");
    $("#viewMusicNavButton").attr("disabled", "disabled");
    $("#addSongsDiv").addClass("hidden");
    $("#showSongsDiv").removeClass("hidden");
  };

  $("#addMusicNavButton").on("click", switcher.switchtoAddView);
  $("#viewMusicNavButton").on("click", switcher.switchtoViewView);

  return switcher; 
}(musicHistory || {}));
