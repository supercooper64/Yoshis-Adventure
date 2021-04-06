
function updateScene_startMenu(){


	ctx.beginPath();
	ctx.rect(0, 0, 9999, 9999);
	ctx.fillStyle = "rgb(207, 192, 107)";
	ctx.fill();
	ctx.font = "32px Egelston";
	ctx.fillStyle = "black";
	ctx.fillText("YOSHI'S ADVENTURE",149,40);
	ctx.font = "18px Egelston";
	ctx.fillText("Press Space to Play ",227,120);
	ctx.font = "13px Egelston";
	ctx.fillStyle = "black";
	ctx.fillText("(C) 2019 by DJ STUDIO.",242,186);
	ctx.font = "13px Egelston";
	ctx.fillStyle = "black";

}

//Formerly startGame1
function newGame(){




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
	var audio = document.getElementById("menu");
	audio.volume = 0.0; audio.currentTime = 0;

	var audio = document.getElementById("yoshi start");
					audio.volume = 1.0; audio.currentTime = 0;
					var audio = document.getElementById("start");
					audio.volume = 1.0; audio.currentTime = 0;
						document.getElementById('yoshi start').play();
						document.getElementById('start').play();
	player.currHP = 999;
	//For this game
	$("#mainCanvas").fadeOut(fadeTime, function(){
		state = stateTown;
	
		buildScenes(true)
		$("#mainCanvas").fadeIn(fadeTime);
	});
	
}

