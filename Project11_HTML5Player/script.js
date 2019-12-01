(function getConsolePrint() {
    console.log("Hello from Console")
})();



const player = document.querySelector('.player');
const video = player.querySelector('.viwer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const skipButton = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// toggle play

function togglePlay() {
    const method = video.paused ? 'play' : ' pause '
    if (video.paused) {
        video.play();
    }
    else {
        video.paused();
    }
}