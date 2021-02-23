
function updateScene_startMenu(){
	
	ctx.beginPath();
	ctx.rect(0, 0, 9999, 9999);
	ctx.fillStyle = "rgb(207, 192, 107)";
	ctx.fill();
	ctx.font = "32px Egelston";
	ctx.fillStyle = "black";
	ctx.fillText("Yoshi's Adventure",199,40);
	ctx.font = "18px Egelston";
	ctx.fillText("Press Space to Play ",227,120);
	ctx.font = "13px Egelston";
	ctx.fillStyle = "black";
	ctx.fillText("(C) 2019 by DJ STUDIO.",242,186);


}

//Formerly startGame1
function newGame(){


	var audio = new Audio('music/yoshi1.wav');
	audio.play();
	var audio = new Audio('nsmbwiiStartLevel.wav');
	audio.play();
	player.currHP = player.maxHP;
	
	$("#mainCanvas").fadeOut(fadeTime, function(){
		state = stateTown;

		buildScenes(true)
		$("#mainCanvas").fadeIn(fadeTime);
	});
	
}