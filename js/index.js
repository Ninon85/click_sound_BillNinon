const buttons = document.querySelectorAll("#btn-container>button");
const stop = document.getElementById("stop");
let tag;

class Sound {
	constructor(tag, src, currentTime) {
		this.audio = new Audio();
		this.tag = tag;
		this.audio.src = src;
		this.currentTime = currentTime;
	}
	player() {
		this.audio.play();
	}
	stopMusic(currentTime) {
		this.currentTime = currentTime;
		this.audio.pause();
	}
}
let music;
buttons.forEach((button) => {
	button.addEventListener("click", (e) => {
		// console.log(e.target.id);
		tag = e.target.id;
		music = new Sound(tag, `./sound/${tag}.mp3`, 0);
		music.player();
	});
});

stop.addEventListener("click", () => {
	// console.log(tag);
	music.stopMusic(0);
});
