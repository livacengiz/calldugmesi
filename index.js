const audio = new Audio("button.mp3");
audio.muted = true;
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