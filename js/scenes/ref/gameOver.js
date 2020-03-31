
function updateScene_gameOver(){
	ctx.font = "42px  Egelston";
	ctx.fillStyle = "black";
	ctx.fillText("Game Over",200,100);
}


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
