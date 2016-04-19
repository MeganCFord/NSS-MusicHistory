var songs = [];
songs.push( "what -by nope on the album ok" ); //add one song to the beginning and the end of the array.
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
songs.unshift("hey I go in the front -by nope on the album definitely not");
console.log(songs);

//note! the [songs.length] adds to the end in order. push adds to the end no matter what order, and unshift adds to the front no matter what order.
/*


Must add each string to the DOM in index.html in the main content area.

*/
//Loop over the array and remove any words or characters that obviously don't belong.
for (var i = 0; i < songs.length; i++) {
  songs[i] = songs[i]
  .replace(/>/g, "-")  //find and replace the > character in each item with a - character.

  .replace(/\*/g, "")
  .replace(/\@/g, "")
  .replace(/\!/g, "")
  .replace(/\(/g, "");
}
  console.log("songs with some fixed stuff", songs );


/*
Must add each string to the DOM in index.html in the main content area.
Megan note: I don't want to do this so I don't think I'm going to. I would rather take the time later to have the different parts be concatonated similarly to the group project. here's the array of objects for later reference. 
  songs.push({title: "overture", artist: "Tzchaikovsky", album: "Swan Lake", genre: "Ballet"}, {title: "Allegro", artist: "Beethoven", album: "Op No. 6", genre: "Classical"}, {title: "Fugue no.42 in C# Major", artist: "Bach", album: "Fugues and Preludes", genre: "Baroque"}, {title: "Popagena", artist: "Mozart", album: "The Magic Flute", genre: "Opera"})
*/