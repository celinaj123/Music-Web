let playlist = document.querySelector(".playlist");
let option = document.querySelector(".option");
let previous = document.querySelector("#previous");
let play = document.querySelector("#play_btn");
let next = document.querySelector("#next");
let title = document.querySelector("#title");
let volume_show = document.querySelector(".mute_sound");
let artist = document.querySelector("#artist");
let track_image = document.querySelector("#track_image");
let slider = document.querySelector("#slider");
let show_duration = document.querySelector("#show_duration");
let present = document.querySelector("#present");

let timer;
let index_no = 0;
let playing_song = false;
let track = document.createElement("audio");

function open_p() {
  playlist.classList.toggle("active");
}

function sidebar() {
  option.classList.toggle("active2");
}

let All_song = [
  {
    name: "Seven",
    path: "Music/Seven.mp3",
    img: "Image/sevenmusic.jpg",
    singer: "Jungkook & Latto",
  },
  {
    name: "2U",
    path: "Music/2U.mp3",
    img: "Image/2Umusic.jpg",
    singer: "Jungkook [Cover]",
  },
  {
    name: "Karna Ada Ko",
    path: "Music/KarnaAdaKO.mp3",
    img: "Image/karnaadakomusic.jpg",
    singer: "New Gvme",
  },
  {
    name: "剩下的盛夏",
    path: "Music/TFBOYS.mp3",
    img: "Image/TFBoysmusic.jpg",
    singer: "TF BOYS",
  },
  {
    name: "Attention",
    path: "Music/Attention.mp3",
    img: "Image/attentionmusic.jpg",
    singer: "New Jeans",
  },
];

function load_track(index_no) {
  track.src = All_song[index_no].path;
  title.innerHTML = All_song[index_no].name;
  artist.innerHTML = All_song[index_no].singer;
  track_image.src = All_song[index_no].img;
  track.load();

  timer = setInterval(rangeslider, 1000);
}
load_track(index_no);

function mute_sound() {
  track.volume = 0;
  volume.value = 0;
}

function sound_on() {
  track.volume += 0.1;
  volume.value += 0.1;
}

function sound_less() {
  track.volume -= 0.1;
  volume.value -= 0.1;
}

function justplay() {
  if (playing_song == false) {
    playsong();
  } else {
    pausesong();
  }
}

function justplay1() {
    if (playing_song == false) {
      load_track(0);
      playsong(0);
    } else {
      pausesong();
    }
  }
 
function justplay2() {
    if (playing_song == false) {
      load_track(1);
      playsong(1);
    } else {
      pausesong();
    }
  }

  function justplay3() {
    if (playing_song == false) {
      load_track(2);
      playsong(2);
    } else {
      pausesong();
    }
  }

  function justplay4() {
    if (playing_song == false) {
      load_track(3);
      playsong(3);
    } else {
      pausesong();
    }
  }

  function justplay5() {
    if (playing_song == false) {
      load_track(4);
      playsong(4);
    } else {
      pausesong();
    }
  }

function playsong() {
  track.play();
  playing_song = true;
  play.innerHTML = '<i class="bx bx-play"></i>';
}

function pausesong() {
  track.pause();
  playing_song = false;
  play.innerHTML = '<i class="bx bx-play"></i>';
}

function next_song() {
  if (index_no < All_song.length - 1) {
    index_no += 1;
    load_track(index_no);
    playsong();
  } else {
    index_no = 0;
    load_track(index_no);
    playsong();
  }
}

function volume_change() {
  volume_show.innerHTML = recent_volume.value;
  track.volume = recent_volume.value / 100;
}

function previous_song() {
  if (index_no > 0) {
    index_no -= 1;
    load_track(index_no);
    playsong();
  } else {
    index_no = All_song.length;
    load_track(index_no);
    playsong();
  }
}

function change_duration() {
  sliderposition = track.duration * (slider.value / 100);
  track.currentTime = sliderposition;
}

function rangeslider() {
  let position = 0;

  if (!isNaN(track.duration)) {
    position = track.currentTime * (100 / track.duration);
    slider.value = position;
  }

  if (track.ended) {
    play.innerHTML = '<i class="bx bx-play"></i>';
    index_no += 1;
    load_track(index_no);
    playsong();
  }
}
