let audiotracks = [
   "Buttabomma - SenSongsMp3.Co.mp3",
   "Dammunte Pattukora.mp3",
   "Lala Bheemla.mp3",
   "Nenu Train Lo Pothunna Pinni_128-(PagalWorld).mp3"   
];
let images = [
    "a1.jpg",
    "a2.jpg",
    "a3.jpg",
    "a4.jpeg"
];

let play = document.getElementById("play");
let audio = document.getElementById("plays");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let image = document.getElementById("image");
let volumeup = document.getElementById("volumeup");
let volumedown = document.getElementById("volumedown");
let trackname = document.getElementById("trackname"); 
let currentIndex = 0;

play.addEventListener("click", function (event) {
    if (audio.paused) {
        audio.play();
        play.textContent = "Pause";
    } else {
        audio.pause();
        play.textContent = "Play";
    }
});

next.addEventListener("click", function (event) {
    currentIndex++;
    if (currentIndex >= audiotracks.length) {
        currentIndex = 0;
    }
    image.src = images[currentIndex];
    audio.src = audiotracks[currentIndex];
    trackname.textContent = audiotracks[currentIndex];
    audio.play();
    play.textContent = "Pause";
});

prev.addEventListener("click", function (event) {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = audiotracks.length - 1;
    }
    image.src = images[currentIndex];
    audio.src = audiotracks[currentIndex];
    trackname.textContent = audiotracks[currentIndex];
    audio.play();
    play.textContent = "Pause";
});

volumedown.addEventListener("click", function () {
    if (audio.volume > 0) {
        audio.volume = Math.max(0, audio.volume - 0.1);
    }
    console.log("Volume: " + audio.volume.toFixed(0));
});


volumeup.addEventListener("click", function () {
    if (audio.volume < 1) {
        audio.volume = Math.min(1, audio.volume + 1);
    }
    console.log("Volume: " + audio.volume.toFixed(1));
});
audio.addEventListener("loadedmetadata", function () {
    duration.textContent = formatTime(audio.duration);
    progress.max = audio.duration;
});

audio.addEventListener("timeupdate", function () {
    currentTime.textContent = formatTime(audio.currentTime);
    progress.value = audio.currentTime;
});

progress.addEventListener("input", function () {
    audio.currentTime = progress.value;
});

audio.addEventListener("ended", function () {
    next.click(); 
});

function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    sec = (sec < 10 ? '0' + sec : sec);
    return `${min}:${sec}`; 
}
