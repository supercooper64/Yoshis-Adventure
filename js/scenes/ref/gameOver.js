
function updateScene_gameOver(){
	ctx.beginPath();
	ctx.rect(0, 0, 9999, 9999);
	ctx.fillStyle = "rgb(207, 192, 107)";
	ctx.fill();
	ctx.font = "42px  Egelston";
	ctx.fillStyle = "black";
	ctx.fillText("Game Over",200,100);
}

var audio = document.getElementById("myaudio");
audio.volume = 0.0; audio.currentTime = 0;
var audio = document.getElementById("tom and jerry");
audio.volume = 0.0; audio.currentTime = 0;
	document.getElementById('tom and jerry').play();
var audio = document.getElementById("menu");
audio.volume = 0.0; audio.currentTime = 0;
var audio = document.getElementById("Thomas");
audio.volume = 0.0; audio.currentTime = 0;
var audio = document.getElementById("Mountain");
audio.volume = 0.0; audio.currentTime = 0;
var audio = document.getElementById("Gasteyer");
audio.volume = 0.0; audio.currentTime = 0;
var audio = document.getElementById("Ruins");
audio.volume = 0.0; audio.currentTime = 0;
var audio = document.getElementById("Town");
audio.volume = 0.0; audio.currentTime = 0;
var audio = document.getElementById("Castle");
audio.volume = 0.0; audio.currentTime = 0;
function restart(){
	$("#mainCanvas").fadeOut(fadeTime, function(){
		state = stateStart;
		buildScenes(true)
	
		$("#mainCanvas").fadeIn(fadeTime);
	});
}

function gameOver(){
	
	$("#mainCanvas").fadeOut(fadeTime, function(){
		state = stateGameOver;
		buildScenes(true)
	
		$("#mainCanvas").fadeIn(fadeTime);
	});
}
