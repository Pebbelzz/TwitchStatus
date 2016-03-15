var info  = [];
var data = {};
var feeds = ["freecodecamp", "storbeck", "habathcx","RobotCaleb","noobs2ninjas","beohoff","esl_sc2"]
var link = '';
var mainApiUrl = 'https://api.twitch.tv/kraken/';
var logo = '';
/*
  function createURL(type, feed){
    return mainApiUrl + type + '/' + feed + '?callback=?'
  };


feeds.forEach(function(stream){
  $.getJSON.(createURL('streams', feed), function(data){
    console.log(data);
  });
});
*/

feeds.forEach(function(stream){
  $.getJSON(mainApiUrl + 'streams/'  + stream + '?callback=?', function(data){
    console.log(stream);
    console.log(data);
    console.log(data._links);
    if(data.stream == null){
      $('#name').append('<div id="offline"><p>' + stream + '<br> ' + data._links.channel + '<br> Offline</div>');
    }
    else{
      $('#name').append('<div id="online"><p>' + stream + '<br> ' + data.stream._links.self + '<br> Online</div>');
    }
  });

  //only setting logo variable within the function
  $.getJSON(mainApiUrl + 'channels/' + stream + '?callback?', function(channel){
    console.log(channel);
    logo = channel.logo;
  })
  console.log(logo);
});

/*
$(document).ready(function(){
  for(i=0; i<feeds.length; i++){

    $.getJSON('https://api.twitch.tv/kraken/streams/'+ feeds[i] +'?callback=?', function(data) {
    link = data._links.self;
    console.log(data);
    $('#test').append('<div id="link">' + data._links.self + '</div><br>');
    console.log(data._links.self);
    console.log(link);

    //dataToPage(data, feeds[i]);
    });
    console.log(i);
    console.log(link);
    currentFeed = feeds[i];
    console.log(currentFeed);
    $('#name').append(currentFeed + '<br>');
  }
});

function dataToPage(data, currentFeed){
  console.log(data._links);
  console.log(data._links.self);
  $('#test').append('<div id="userName">' + currentFeed + '</div><div id="link">' + data._links.self + '</div><br>');
  console.log(data.stream);
  if(data.stream != null){
    $('#preview').append('<img src="' + (data.stream.preview.small) + '" /><br>');
  };
  if(data.stream == null){
    $('#preview').append('Offline <br>');
  };
};
*/
