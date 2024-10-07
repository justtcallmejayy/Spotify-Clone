// Below is the initial setup for Spotify Clone 

let playButton = document.getElementById('playButton');
let pauseButton = document.getElementById('pauseButton');

let prevButton = document.getElementById('prevButton');
let nextButton = document.getElementById('nextButton');

// function togglePlay(){
//     // Get the current state of the audio element
//     let audio = document.getElementById('audio');
//     if(audio.paused){
//         audio.play();
//         playButton.innerHTML = 'Pause';
//     } else {
//         audio.pause();
//         playButton.innerHTML = 'Play';
//     }
// }

// Below is the code for Play and Pause


playButton.addEventListener('click', function(){
    if(playButton.style.display == 'block'){
        playButton.style.display = 'none';
    }
    else if(playButton.style.display == 'none)') {
        playButton.style.display = 'block';
    }
});