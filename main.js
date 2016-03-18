var streamers = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff", "cretetion","TR7K","OgamingSC2","ESL_SC2"];

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
          html = '<div class="row ' + status + '"><div id="icon"><img src="' +
          logo + '" id="pic"></div><div id="name"><a href="' + data.url + '" target="_blank">' +
          name + '</a></div><div id="streaming">'+ streaming + '<span>' +
          description + '</span></div></div>';
        status === "online" ? $("#display").prepend(html) : $("#display").append(html);
      });
    });
  });
};

$(document).ready(function() {
  getChannelInfo();
  $(".selector").click(function() {
    $(".selector").removeClass("active");
    $(this).addClass("active");
    var status = $(this).attr('id');
    if (status === "all") {
      $(".online, .offline").removeClass("hidden");
    } else if (status === "online") {
      $(".online").removeClass("hidden");
      $(".offline").addClass("hidden");
    } else {
      $(".offline").removeClass("hidden");
      $(".online").addClass("hidden");
    }
  })
});
