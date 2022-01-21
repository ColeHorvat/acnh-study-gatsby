import React, { useState } from 'react';

async function getBGM(hour) {
    fetch("http://acnhapi.com/v1/hourly/" + (hour + 1) * 3, {
        "method": "GET",
        "headers": {}
    })
    .then(response => {
        let songUrl = response['url'];
        console.log(songUrl);
        return songUrl;
    })
    .catch(err => {
        console.error(err);
    });
}

function AudioManager() {

    const [play, setPlay] = useState(true);

    let url = getBGM(0);
    let audio = new Audio(url)
    console.log(audio);
    audio.play();
    audio.addEventListener('ended', function () {
        let currentTime = 0;
        audio.play();
    }, false);

    function tooglePlay() {
        setPlay(!play);
        play ? audio.play() : audio.pause();
    }

    return (
        <div>
            <button
            id="musicBtn"
            onClick={tooglePlay}>
            
            Click to play
                
            </button>
        </div>
    );
}

export default AudioManager;
