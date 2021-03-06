$(document).ready(function() {

  var audioTracks = [{
    song: "Epic Song",
    artist: "BoxCat Games",
    src: "audio/BoxCat_Games_-_10_-_Epic_Song.mp3"
  }, {
    song: "Night Owl",
    artist: "Broke For Free",
    src: "audio/Broke_For_Free_-_01_-_Night_Owl.mp3"
  }, {
    song: "Siesta",
    artist: "Jahzzar",
    src: "audio/Jahzzar_-_05_-_Siesta.mp3"
  }, {
    song: "It's Your Birthday",
    artist: "Monk Turner",
    src: "audio/Monk_Turner__Fascinoma_-_01_-_Its_Your_Birthday.mp3"
  } , {
    song: "Enthusiast",
    artist: "Tours",
    src: "audio/Tours_-_01_-_Enthusiast.mp3"
  }];

  //fill in first track in existing html
  $("#track-1 .song").text(audioTracks[0].song);
  $("#track-1 .artist").text(audioTracks[0].artist);
  $("#track-1 audio").attr('src', audioTracks[0].src);

  //create and fill each additional row based on audioTracks object
  for (var i = 1; i < audioTracks.length; i++) {
    var idName = 'track-' + (i + 1);
    var $newTrack = $("#track-1").clone()
      .attr('id', idName);
    var previousTrackID = '#track-' + i;
    $newTrack.insertAfter(previousTrackID);
    $("#" + idName + " .song").text(audioTracks[i].song);
    $("#" + idName + " .artist").text(audioTracks[i].artist);
    $("#" + idName + " audio").attr('src', audioTracks[i].src);
  }

  var currentlyPlayingID,
      clickedID,
      clickedSong,
      clickedArtist,
      $clickedAudio;

  //when clicking a play button
  $('.icon').on('click', '.fa-play', function() {

    clickedID = $(this).closest(".row").prop("id");
    clickedSong = $('#' + clickedID + ' .song').text();
    clickedArtist = $('#' + clickedID + ' .artist').text();
    $clickedAudio = $('#' + clickedID + " audio");

    //first pause all audio files playing, in case user clicks other track than currently playing
    $('audio').each(function() {
      var song = $(this);
      song[0].pause();
    });

    //then make all icons into play buttons
    $('.icon i').addClass('fa-play').removeClass('fa-pause');

    //play clicked audio and adjust icons/names as necessary
    $clickedAudio[0].play();
    $('#' + clickedID + ' i').removeClass('fa-play').addClass('fa-pause');
    $("#bottom-nav #nav-icon i").removeClass('fa-play').addClass('fa-pause');
    $("#bottom-nav .song").text(clickedSong);
    $("#bottom-nav .artist").text(clickedArtist);

  });

  //if the user clicks a pause button
  $('.icon').on('click', '.fa-pause', function() {

    $clickedAudio[0].pause();
    $('#' + clickedID + " i").addClass('fa-play').removeClass('fa-pause');
    $("#bottom-nav #nav-icon i").addClass('fa-play').removeClass('fa-pause');

  });

  //if the user clicks the back button
  $('.icon-control').on('click', '.fa-step-backward', function() {

    var trackToPlay;
    var currentTrackNum = parseInt(clickedID[clickedID.length - 1]);
    console.log(currentTrackNum);
    if (clickedID[clickedID.length - 1] > 1) {
      trackToPlay = clickedID.slice(0, -1) + (currentTrackNum - 1);
    } else if (clickedID[clickedID.length - 1] == 1){
      trackToPlay = clickedID.slice(0, -1) + (audioTracks.length);
    }
    //first pause all audio files playing
    $('audio').each(function() {
      var song = $(this);
      song[0].pause();
    });
    //then make all icons into play buttons
    $('.icon i').addClass('fa-play').removeClass('fa-pause');
    //play clicked audio and adjust icons/names as necessary
    clickedID = trackToPlay;
    console.log(trackToPlay);
    $clickedAudio = $('#' + clickedID + " audio");
    clickedSong = $('#' + clickedID + ' .song').text();
    clickedArtist = $('#' + clickedID + ' .artist').text();
    $clickedAudio[0].play();
    $('#' + clickedID + " i").addClass('fa-pause').removeClass('fa-play');
    $("#bottom-nav #nav-icon i").addClass('fa-pause').removeClass('fa-play');
    $("#bottom-nav .song").text(clickedSong);
    $("#bottom-nav .artist").text(clickedArtist);

  });

  //if user clicks button to move forward
  $('.icon-control').on('click', '.fa-step-forward', function() {

    var trackToPlay;
    var currentTrackNum = parseInt(clickedID[clickedID.length - 1]);
    if (clickedID[clickedID.length - 1] == audioTracks.length) {
      trackToPlay = clickedID.slice(0, -1) + ('1');
    } else if (clickedID[clickedID.length - 1] < audioTracks.length){
      trackToPlay = clickedID.slice(0, -1) + (currentTrackNum + 1);
    }
    //first pause all audio files playing
    $('audio').each(function() {
      var song = $(this);
      song[0].pause();
    });
    //then make all icons into play buttons
    $('.icon i').addClass('fa-play').removeClass('fa-pause');
    //play clicked audio and adjust icons/names as necessary
    clickedID = trackToPlay;
    console.log(trackToPlay);
    $clickedAudio = $('#' + clickedID + " audio");
    clickedSong = $('#' + clickedID + ' .song').text();
    clickedArtist = $('#' + clickedID + ' .artist').text();
    $clickedAudio[0].play();
    $('#' + clickedID + " i").addClass('fa-pause').removeClass('fa-play');
    $("#bottom-nav #nav-icon i").addClass('fa-pause').removeClass('fa-play');
    $("#bottom-nav .song").text(clickedSong);
    $("#bottom-nav .artist").text(clickedArtist);

  });

});
