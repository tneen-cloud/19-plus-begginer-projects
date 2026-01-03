const songs = [
    { title: "Song 1", artist: "Artist 1", duration: 180 },
    { title: "Song 2", artist: "Artist 2", duration: 210 },
    { title: "Song 3", artist: "Artist 3", duration: 195 }
];

let currentSong = 0;
let isPlaying = false;
let currentTime = 0;
let progressInterval = null;

const songTitle = document.getElementById('songTitle');
const artist = document.getElementById('artist');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progress = document.getElementById('progress');
const currentTimeElement = document.getElementById('currentTime');
const durationElement = document.getElementById('duration');
const playlist = document.getElementById('playlist');

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${String(secs).padStart(2, '0')}`;
}

function loadSong(index) {
    const song = songs[index];
    songTitle.textContent = song.title;
    artist.textContent = song.artist;
    durationElement.textContent = formatTime(song.duration);
    currentTime = 0;
    updateProgress();
    updatePlaylist();
}

function updateProgress() {
    const song = songs[currentSong];
    const percentage = (currentTime / song.duration) * 100;
    progress.style.width = percentage + '%';
    currentTimeElement.textContent = formatTime(currentTime);
}

function playPause() {
    if (isPlaying) {
        clearInterval(progressInterval);
        playBtn.textContent = '▶';
    } else {
        progressInterval = setInterval(() => {
            currentTime++;
            if (currentTime >= songs[currentSong].duration) {
                nextSong();
            } else {
                updateProgress();
            }
        }, 1000);
        playBtn.textContent = '⏸';
    }
    isPlaying = !isPlaying;
}

function nextSong() {
    currentSong = (currentSong + 1) % songs.length;
    loadSong(currentSong);
    if (isPlaying) {
        playPause();
        playPause();
    }
}

function prevSong() {
    currentSong = (currentSong - 1 + songs.length) % songs.length;
    loadSong(currentSong);
    if (isPlaying) {
        playPause();
        playPause();
    }
}

function updatePlaylist() {
    playlist.innerHTML = '';
    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = `${song.title} - ${song.artist}`;
        if (index === currentSong) {
            li.classList.add('active');
        }
        li.addEventListener('click', () => {
            currentSong = index;
            loadSong(currentSong);
            if (isPlaying) {
                playPause();
                playPause();
            }
        });
        playlist.appendChild(li);
    });
}

playBtn.addEventListener('click', playPause);
nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);

loadSong(0);

