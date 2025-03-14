//your JS code here. If required.
const video = document.getElementById('video');
const timeDisplay = document.getElementById('time-display');
const playPauseButton = document.getElementById('play-pause');
let currentTime = 600; // 10 minutes default in seconds
let timer;

document.getElementById('smaller-mins').addEventListener('click', () => setTime(120));
document.getElementById('medium-mins').addEventListener('click', () => setTime(300));
document.getElementById('long-mins').addEventListener('click', () => setTime(600));

document.getElementById('meditation-a').addEventListener('click', () => {
    video.src = 'Sounds/beach.mp4';
    video.play();
});
document.getElementById('meditation-b').addEventListener('click', () => {
    video.src = 'Sounds/rain.mp4';
    video.play();
});

playPauseButton.addEventListener('click', () => {
    if (timer) {
        clearInterval(timer);
        timer = null;
        playPauseButton.textContent = 'Play';
    } else {
        timer = setInterval(countDown, 1000);
        playPauseButton.textContent = 'Pause';
    }
});

function setTime(seconds) {
    currentTime = seconds;
    updateTimeDisplay();
}

function countDown() {
    if (currentTime > 0) {
        currentTime--;
        updateTimeDisplay();
    } else {
        clearInterval(timer);
        playPauseButton.textContent = 'Play';
    }
}

function updateTimeDisplay() {
    const minutes = Math.floor(currentTime / 60);
    const seconds = currentTime % 60;
    timeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}
