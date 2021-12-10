class Audio {
    constructor() {
        const audio = document.getElementById("bg-audio");

        audio.volume = 0.2;
        document.getElementById("play-btn").style.display = "none";
        this.audio = audio;

        this.toggleAudio();
    }

    toggleAudio() {
        const play = document.getElementById("play-btn");
        const pause = document.getElementById("pause-btn");

        // console.log(this.audio.paused) 

        // if (this.audio.paused) {
        //     play.style.display = "inline-block";
        //     pause.style.display = "none";
        // } else {
        //     pause.style.display = "inline-block";
        //     play.style.display = "none";
        // }
        
        play.addEventListener("click", () => {
            this.audio.play();
            play.style.display = (play.style.display == "none") ? "inline-block" : "none";
            if (play.style.display == "none") {
                pause.style.display = "inline-block";
            }
            // if (this.audio.paused) {
            //     play.style.display = "inline-block";
            //     pause.style.display = "none";
            // } else {
            //     pause.style.display = "inline-block";
            //     play.style.display = "none";
            // }
        })

        pause.addEventListener("click", () => {
            this.audio.pause();
            
            pause.style.display = (pause.style.display == "none") ? "inline-block" : "none";
            if (pause.style.display == "none") {
                play.style.display = "inline-block";
            }
            // if (this.audio.paused) {
            //     play.style.display = "inline-block";
            //     pause.style.display = "none";
            // } else {
            //     pause.style.display = "inline-block";
            //     play.style.display = "none";
            // } 
        })
    }
}

export default Audio;