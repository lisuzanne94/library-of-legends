class Audio {
    constructor() {
        const audio = document.getElementById("bg-audio");
        this.audio = audio;
        this.configAudioVol();
        this.toggleAudio();
    }

    configAudioVol() {
        this.audio.volume = 0.2;
    }

    toggleAudio() {
        const playBtn = document.getElementById("play-btn");
        playBtn.addEventListener("click", () => {
        if (this.audio.paused) {
            this.audio.play();
        } else {
            this.audio.pause();
        }
        })
    }
}

export default Audio;