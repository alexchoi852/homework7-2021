var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play();
	var vol = document.getElementById("volume");
	document.querySelector("#volume").innerHTML=video.volume*100+"%"
});

document.querySelector("#pause").addEventListener("click", function()) {
	console.log("Pause Video")
	video.pause()
	document.querySelector("#volume").innerHTML=video.volume*100+"%"
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Vintage")
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Back to normal");
	video.classList.remove("oldSchool");
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down")
	video.playbackRate *=.95;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up")
	video.playbackRate /=.95;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead")
	if(video.currentTime < video.duration - 15) {
		video.currentTime +=15;
		console.log(video.playbackRate)
	}
	else {
		video.currentTime = 0;
	}
	console.log(video.currentTime)
	video.loop = true;
});

document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted) {
		console.log("Unmute");
		document.getElementById("mute").innerHTML = "Mute";
		video.muted = false;
	} 
	else {
		console.log("Mute");
		document.getElementById("mute").innerHTML = "Unmute";
		video.muted = true;
	}
});




