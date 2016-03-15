var info  = [];
var data = {};

$(document).ready(function(){
  $.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data) {
  console.log(data);
  dataToPage(data);
  });
});

function dataToPage(data){
  console.log(data._links);
  console.log(data._links.self);
  $('#test').append(data._links.self);
  console.log(data.stream.preview.medium);
  $('#preview').html('<img src="' + (data.stream.preview.medium) + '" />');
}
