var streamers = ["freecodecamp","RobotCaleb","noobs2ninjas", "elvinemod", "veasna94","beohoff", "cretetion","TR7K","OgamingSC2","ESL_SC2"];



function getChannelInfo() {
  streamers.forEach(function(channel) {
    function createURL(type, name) {
      return 'https://api.twitch.tv/kraken/' + type + '/' + name + '?callback=?';
    };

    $.getJSON(createURL("streams", channel), function(data) {
      var streaming,
          status;
      if (data.stream) {
        streaming = data.stream.game;
        status = "online";
      }
      else {
        streaming = "Offline";
        status = "online";
      };

      $.getJSON(createURL("channels", channel), function(data) {
        var logo = data.logo != null ? data.logo : "http://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F",
          name = data.display_name != null ? data.display_name : channel,
          description = status === "online" ? ': ' + data.status : "";
          html = '<div class="row channel ' + status + ' ' + streaming + ' ">' +
          '<div id="icon"><a href="' + data.url + '" target="_blank"><img src="' + logo + '" id="pic" /></a></div>' +
          '<div id="infoWrapper">' +
          '<div id="name"><a href="' + data.url + '" target="_blank">'  + name + '</a></div>' +
          '<div id="streaming"><span id="' + streaming + 'text">'+ streaming + '</span><span>' + description + '</span></div>' +
          '</div>' +
          '</div>';
        status === "online" ? $("#display").prepend(html) : $("#display").append(html);
      });
    });
  });
};


$(document).ready(function() {
  getChannelInfo();
});
