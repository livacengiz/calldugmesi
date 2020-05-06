const audio = new Audio("button.mp3");
audio.muted = true;
audio.addEventListener("timeupdate", fetchTime);

function call(param) {
	if (param === "dugmesi") {
		audio.muted = false;
		audio.play();
		const hint = document.getElementsByClassName("hint")[0];
		hint.style.display = "none";
	}
	if (param === "boregi") {
		audio.muted = true;
		audio.pause();
		console.log("https://i.ytimg.com/vi/veN08DdSyf0/maxresdefault.jpg");
	}
	if (!param) {
		// param yoksa
		console.log("param yok");
	}
}

function fetchTime(e) {
	var seconds = ((e.timeStamp % 60000) / 1000).toFixed(0);
	if (seconds === "55") {
		dugmes = document.getElementsByTagName("button"); // button. WTF 🐏💨
		for (let i = 0; i < dugmes.length; i++) {
			dugmes[i].style.position = "absolute";
			dugmes[i].style.left = "48.5%";
		}

	}
}

Audio.prototype.play = (function (play) {
	return function () {
		(args = arguments), (promise = play.apply(this, args));
		if (promise !== undefined) {
			promise.catch((_) => {
				const hint = document.getElementsByClassName("hint")[0];
				hint.style.display = "block";
			});
		}
	};
})(Audio.prototype.play);