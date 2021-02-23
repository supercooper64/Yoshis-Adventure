//Check if two objects are touching. Pretty straight forward.
var offset = 3;
function collision(r1, r2){
	//Me
	var myleft = r1.x + r1.dirX*r1.speed + offset;
	var myright = r1.x + r1.dirX*r1.speed + (r1.w) - offset;
	var mytop = r1.y + r1.dirY*r1.speed + offset;
	var mybottom = r1.y + r1.dirY*r1.speed + (r1.h) - offset;
	//Other Guy
	var otherleft = r2.x;
	var otherright = r2.x + (r2.w);
	var othertop = r2.y;
	var otherbottom = r2.y + (r2.h);
	
	if (!(myleft > otherright 
	|| myright < otherleft 
	|| mytop > otherbottom 
	|| mybottom < othertop)){
		r1.canMove = false;
		
		//If the player 
		if(r2.type == "warp" && r1.type == "hero"){
		
			r2.warpActivate();
		
		}
		
		//If the player 
		if(r2.type == "drop" && r1.type == "hero"){
	
			r2.claimDrop();
		
		}
		
		//If the player 
		if((r2.type == "monster" && r1.type == "hero")
			|| (r2.type == "hero" && r1.type == "monster")){
			if(!player.hit){
				player.hit = true;
				var hitValue = 0;
				if(r1.type == "monster"){
					hitValue = r1.value;
				}else{
					hitValue = r2.value;
				}
				var audio = document.getElementById("ow");
				audio.volume = 0.0; audio.currentTime = 0;
					document.getElementById('ow').play();
					var audio = document.getElementById("scream");
					audio.volume = 0.0; audio.currentTime = 0;
					var audio = document.getElementById("throw");
					audio.volume = 0.0; audio.currentTime = 0;
						document.getElementById('throw').play();
						document.getElementById('scream').play();
				sfx.src = "vc_yoshi_missfoot02.wav";
				sfx.play();
				if(player.equippedArmor.value >= hitValue){
					hitValue = 0;
				}else{
					hitValue = hitValue - player.equippedArmor.value
				}
				textParts.push(new textParticle(player.x,player.y,hitValue,"black",hitValue,player.w));
				player.currHP -= (hitValue);
				if(player.currHP < 0){
					
				}
				//Show animation
				setInterval(function(){
					player.hit = false;
				}, 3000);
				//Check if player hp is 0 game over
				if(player.currHP <= 0){
					ctx.beginPath();
					ctx.rect(0, 0, 9999, 9999);
					ctx.fillStyle = "rgb(207, 192, 107)";
					ctx.fill();
					player.canMove = false;
					var audio = document.getElementById("myaudio");
					audio.volume = 0.0; audio.currentTime = 0;
					sfx.src = "Baby Einstein Butterfly Gone SFX.mp3";
					sfx.play();
	player.currHP=0;
					document.getElementById('yoshi death').play();
					var audio = document.getElementById("yoshi death");
					audio.volume = 1.0; audio.currentTime=0;
					var audio = document.getElementById("Thomas");
					audio.volume = 0.0; audio.currentTime = 0;
					//GO Sequence
					ctx.beginPath();
					ctx.rect(0, 0, 9999, 9999);
					ctx.fillStyle = "rgb(207, 192, 107)";
					ctx.fill();
					var audio = document.getElementById("myaudio");
					audio.volume = 0.0; audio.currentTime = 0;
			
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
				var audio = document.getElementById("ow");
				audio.volume = 0.0; audio.currentTime = 0;
					document.getElementById('ow').play();
					var audio = document.getElementById("scream");
					audio.volume = 0.0; audio.currentTime = 0;
					var audio = document.getElementById("throw");
					audio.volume = 0.0; audio.currentTime = 0;
						document.getElementById('throw').play();
						document.getElementById('scream').play();
					gameOver();
					setTimeout(function(){ window.location.replace("Game Over.html");}, 5000);
				}
			}
		}
	}
	
	if (mytop < 0
	|| myleft < 0
	|| myright > gameArea.canvas.width
	|| mybottom > gameArea.canvas.height){
		r1.canMove = false;
	}
}
