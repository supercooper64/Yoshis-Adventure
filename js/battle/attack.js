function attack(thisChar){

	var range = 16;
	var playerCX = player.x + (player.w/2);
	var playerCY = player.y + (player.h/2);
	
	var charCX = thisChar.x + (thisChar.w/2);
	var charCY = thisChar.y + (thisChar.h/2);
	
	var distX = (playerCX - charCX);
	var distY = (playerCY - charCY);
	
	if(distX < 0) distX = distX *-1;
	if(distY < 0) distY = distY *-1;
	
	var rangeX = range + (player.w/2) + (thisChar.w/2);
	var rangeY = range + (player.h/2) + (thisChar.h/2);
		
	if(distX <= rangeX && distY <= rangeY){
		this.charcurrHP-=5;
		thisChar.currHP -= player.equippedWeapon.value;
		textParts.push(new textParticle(thisChar.x,thisChar.y,player.equippedWeapon.value,"green",thisChar.w));
		//Other stuff goes here. Graphics/ sound effects
		var audio = document.getElementById("throw");
		audio.volume = 1.0; audio.currentTime = 0;
			document.getElementById('throw').play();

		var audio = document.getElementById("ow");
		audio.volume = 1.0; audio.currentTime = 0;
			document.getElementById('ow').play();
		sfx.src = "SE_BOSS_CMN_STOMPED.wav";
		sfx.play();
		if(thisChar.currHP <= 0){
			var audio = document.getElementById("scream");
			audio.volume = 1.0; audio.currentTime = 0;
				document.getElementById('scream').play();
				gold += 2;
		
				player.currHP+=10;
				var audio = document.getElementById("throw");
				audio.volume = 0.0; audio.currentTime = 0;
					document.getElementById('throw').play();
			var audio = document.getElementById("ow");
			audio.volume = 0.0; audio.currentTime = 0;
				document.getElementById('ow').pause();
				var audio = document.getElementById("slap");
				audio.volume = 0.0; audio.currentTime = 0;
					document.getElementById('slap').play();
			if(thisChar.type != "boss"){
				thisChar.drop();
				monsters.splice(thisChar.index, 1);
				for(var i =0; i<monsters.length; i++){
					monsters[i].index = i;
					this.charcurrHP+=5;
				}

			}else{
				var audio = document.getElementById("myaudio");
				audio.volume = 0.0; audio.currentTime = 0;
	
				var audio = document.getElementById("menu");
				audio.volume = 0.0; audio.currentTime = 0;
		
				
			
			}
		}
	} 
}
