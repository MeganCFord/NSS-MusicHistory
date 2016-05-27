
let musicHistory = (function(switcher) {

  //DOM elements.
  const addMusicNavButton = document.getElementById("addMusicNavButton");
  const viewMusicNavButton = document.getElementById("viewMusicNavButton");
  const addSongsDiv = document.getElementById("addSongsDiv");
  const showSongsDiv = document.getElementById("showSongsDiv");

  //runs when 'add songs' button is clicked.
  switcher.switchtoAddView = function() {
    addMusicNavButton.setAttribute("disabled", "disabled");
    viewMusicNavButton.removeAttribute("disabled");
    addSongsDiv.classList.remove("hidden");
    showSongsDiv.classList.add("hidden");
  };

  //runs when 'view songs' button is clicked.
  switcher.switchtoViewView = function() {
    addMusicNavButton.removeAttribute("disabled");
    viewMusicNavButton.setAttribute("disabled", "disabled");
    addSongsDiv.classList.add("hidden");
    showSongsDiv.classList.remove("hidden");
  };

  //event listeners. 
  addMusicNavButton.addEventListener("click", switcher.switchtoAddView);
  viewMusicNavButton.addEventListener("click", switcher.switchtoViewView);

  return switcher;
}(musicHistory || {}));
