

const addMusicNavButton = document.getElementById("addMusicNavButton");
const viewMusicNavButton = document.getElementById("viewMusicNavButton");
const addSongsDiv = document.getElementById("addSongsDiv");
const showSongsDiv = document.getElementById("showSongsDiv");


const switchtoAddView = function() {
  addMusicNavButton.setAttribute("disabled", "disabled");
  viewMusicNavButton.removeAttribute("disabled");
  addSongsDiv.classList.remove("hidden");
  showSongsDiv.classList.add("hidden");

};

const switchtoViewView = function() {
  addMusicNavButton.removeAttribute("disabled");
  viewMusicNavButton.setAttribute("disabled", "disabled");
  addSongsDiv.classList.add("hidden");
  showSongsDiv.classList.remove("hidden");
};

addMusicNavButton.addEventListener("click", switchtoAddView);
viewMusicNavButton.addEventListener("click", switchtoViewView);
