var testWarp = 17;



var npcs = [];
var chests = [];
var doors = [];
var drops = [];

var walls = [];
var shops = [];
var monsters = [];
var events = [];
var warps = [];
var textParts = [];
var cyclics = [];

var currShopIndex = 0;
var tempChar = 0;

var diaLine = "";
var diaLine2 = "";

var mapSelect;

function clearArrays(){
	//npcs = [];
	//chests = [];
	walls = [];
	shops = [];
	monsters = [];
	events = [];
	textParts = [];
	cyclics=[];
	drops=[];
}

function startScenes(){
	
	//TEST Scene items that are declared once and never deleted
	chests.push(new chest(42,152, 1, assignItem(invMaster["Potion"]), stateTown));
	chests.push(new chest(446,126, 0, 100, stateForest2));

	chests.push(new chest(446,126, 0, 123, stateForest1));
	chests.push(new chest(42,82, 1, assignItem(invMaster["SUPER SAIYAN YOSHI"]), stateForest2));
	chests.push(new chest(272,247, 0, 100, stateForestOut));
	chests.push(new chest(360, 85, 1, assignItem(invMaster["Key"]), stateForest3));
	chests.push(new chest(122,282, 123, assignItem(invMaster["FURIOUS FALCONER"]), stateWaste1));
	chests.push(new chest(42,122, 1, assignItem(invMaster["Key"]), stateWaste2));

	chests.push(new chest(442,92, 1, assignItem(invMaster["Key"]), stateNecro2));

	chests.push(new chest(52,72, 1, assignItem(invMaster["Key"]), stateCastle));


	//door(x, y, w, h, scene){
	//doors.push(new door(250, 200, 80, 10, stateTown));

	//note here, the items in the chest use assignItem. This creates a copy 
	//from inventory Master so it does not overwrite values in inventory Master.
	/*chests.push(new chest(200,200, 1, assignItem(invMaster["Potion"]), stateTown));
	chests.push(new chest(10,200, 1, assignItem(invMaster["Diamond Sword"]), stateTown));
	chests.push(new chest(20,220, 1, assignItem(invMaster["Awesome Potion"]), stateTown));
	chests.push(new chest(600,200, 0, 100, stateTown));

	chests.push(new chest(200,200, 1, assignItem(invMaster["McGuffin"]), stateForest));
	*/
	//npc(width, height, x, y, moveType, diaType, script, state, image)
	npcs.push(new npc(33, 31, 120, 120, 0, 0, "towna", stateTown, "img/NPC Red Yoshi.png", 2));
	npcs.push(new npc(33, 31, 202, 242, 0, 0, "townb", stateTown, "img/NPC Purple Yoshi.png", 2));
	npcs.push(new npc(33, 31, 371, 242, 0, 0, "townc", stateTown, "img/NPC Blue Yoshi.png", 4));

	npcs.push(new npc(33, 31, 42, 47, 0, 0, "HelpWaste2", stateNecro3, "img/NPC Red Yoshi.png", 0));
	npcs.push(new npc(31, 31, 482, 286, 0, 0, "HelpWaste", stateWaste1, "img/NPC Red Yoshi.png", 4));
	npcs.push(new npc(31, 31, 210, 85, 0, 0, "Help3", stateForest3, "img/NPC Red Yoshi.png", 4));
	npcs.push(new npc(33, 31, 157, 156, 0, 0, "Help2", stateForest2, "img/NPC Red Yoshi.png", 2));
	npcs.push(new npc(33, 31, 200, 91, 0, 0, "Help1", stateForest1, "img/NPC Red Yoshi.png", 2));
	npcs.push(new npc(33, 31, 80, 78, 0, 0, "HelpNecro", stateNecro1, "img/NPC Red Yoshi.png", 0));
	/*monsters.push(assignMon(bestMaster["Forest"]));
	monsters[0].x = 250;
	monsters[0].y = 150;	*/
	
	npcs.push(new npc(33, 31, 84, 204, 0, 0, "foresta", stateForestOut, "img/NPC Red Yoshi.png",1));
	npcs.push(new npc(33, 31, 164, 124, 0, 0, "forestb", stateForestOut, "img/NPC Purple Yoshi.png"));
	npcs.push(new npc(33, 31, 398, 284, 0, 0, "forestc", stateForestOut, "img/NPC Blue Yoshi.png",1));

	npcs.push(new npc(33, 31, 324, 204, 0, 0, "wastea", stateWasteOut, "img/NPC Red Yoshi.png",2));
	npcs.push(new npc(33, 31, 42, 290, 0, 0, "wasteb", stateWasteOut, "img/NPC Purple Yoshi.png",1));
	npcs.push(new npc(33, 31, 205, 170, 0, 0, "wastec", stateWasteOut, "img/NPC Blue Yoshi.png", 4));
	npcs.push(new npc(32, 32, 42, 82, 0, 0, "Alex's BFF", stateFinish, "img/hero.png"));
	//npcs.push(new npc(32, 32, 324, 202, 0, 0, "butcher", stateNcero3, "img/butcher.png"));
	//npcs.push(new npc(32, 32, 282, 150, 0, 0, "queen", stateCastle, "img/Queen.png"));
	
	for(var i = 0; i < npcs.length; i++){
		npcs[i].index = i;
	}
	
	//warp(isTall, isLow, val, scScene, tarScene, changeMusic){
	warps.push(new warp(false, false, 6, stateTown,  stateForest1));
	warps.push(new warp(false, true, 6, stateForest1, stateTown));
	warps.push(new warp(false, false, 4, stateForest1, stateForest2));
	warps.push(new warp(false, true, 4, stateForest2, stateForest1));
	warps.push(new warp(true, true, 7, stateForest2, stateForest3));
	warps.push(new warp(true, false, 3, stateForest2, stateForestOut));
	warps.push(new warp(true, false, 7, stateForest3, stateForest2));
	warps.push(new warp(false, false, 5, stateForest3, stateWaste1,false,true));
	warps.push(new warp(true, true, 3, stateForestOut, stateForest2));
	warps.push(new warp(false, true, 5, stateWaste1, stateForest3));
	warps.push(new warp(true, true, 7, stateWaste1, stateWasteOut));
	warps.push(new warp(true, false, 7, stateWasteOut, stateWaste1));
	warps.push(new warp(true, true, 0, stateWasteOut, stateWaste2));
	warps.push(new warp(false, false, 2, stateWasteOut, stateWaste3));
	warps.push(new warp(true, false, 0, stateWaste2, stateWasteOut));
	warps.push(new warp(false, true, 2, stateWaste3, stateWasteOut));
	warps.push(new warp(false, false, 6, stateWaste3, stateNecro1,false,true));
	warps.push(new warp(false, true, 6, stateNecro1, stateWaste3));
	warps.push(new warp(true, false, 4, stateNecro1, stateNecro2));
	warps.push(new warp(true, true, 4, stateNecro2, stateNecro1));
	warps.push(new warp(true, false, 4, stateNecro2, stateNecro3));
	warps.push(new warp(true, true, 4, stateNecro3, stateNecro2));
	warps.push(new warp(false, false, 6, stateNecro3, stateCastle,false, true));
	warps.push(new warp(false, false, 6, stateCastle, stateFinish, true,true));
	warps.push(new warp(false, true, 6, stateCastle, stateNecro3));
	console.log("Scenes built");
}

function buildScenes(change) {
	
	if(state == stateFinish){
		document.getElementById('Gasteyer').play();
		var audio = document.getElementById("Gasteyer");
	audio.volume = 0.0; audio.currentTime=0;
	var audio = document.getElementById("Thomas");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('myaudio').play();
var audio = document.getElementById("myaudio");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('Mountain').play();
var audio = document.getElementById("Mountain");
audio.volume = 1.0; audio.currentTime=0;
document.getElementById('Castle').play();
var audio = document.getElementById("Castle");
audio.volume = 0.0; audio.currentTime=0;
player.currTown="Princess Zora";
	}

	if(state == stateForest2){
		document.getElementById('Gasteyer').play();
		var audio = document.getElementById("Gasteyer");
	audio.volume = 0.0; audio.currentTime=0;
	var audio = document.getElementById("Thomas");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('myaudio').play();
var audio = document.getElementById("myaudio");
audio.volume = 1.0; 
document.getElementById('Mountain').play();
var audio = document.getElementById("Mountain");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('Town').play();
var audio = document.getElementById("Town");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('Castle').play();
var audio = document.getElementById("Castle");
audio.volume = 0.0; audio.currentTime=0;
player.currTown ="Fey Forest";
	}
	if(state == stateWaste1){
		player.currTown ="Spivey Sewers";
		document.getElementById('Gasteyer').play();
		var audio = document.getElementById("Gasteyer");
	audio.volume = 0.0; audio.currentTime=0;
	var audio = document.getElementById("Thomas");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('myaudio').play();
var audio = document.getElementById("myaudio");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('Mountain').play();
var audio = document.getElementById("Mountain");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('Town').play();
var audio = document.getElementById("Town");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('Ruins').play();
var audio = document.getElementById("Ruins");
audio.volume = 1.0; audio.currentTime=0;
document.getElementById('Castle').play();
var audio = document.getElementById("Castle");
audio.volume = 0.0; audio.currentTime=0;

	}
	if(state == stateWaste3){
		player.currTown ="Spivey Sewers";
		document.getElementById('Gasteyer').play();
		var audio = document.getElementById("Gasteyer");
	audio.volume = 0.0; audio.currentTime=0;
	var audio = document.getElementById("Thomas");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('myaudio').play();
var audio = document.getElementById("myaudio");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('Mountain').play();
var audio = document.getElementById("Mountain");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('Town').play();
var audio = document.getElementById("Town");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('Ruins').play();
var audio = document.getElementById("Ruins");
audio.volume = 1.0; audio.currentTime=0;
document.getElementById('Castle').play();
var audio = document.getElementById("Castle");
audio.volume = 0.0; audio.currentTime=0;

	}
	if(state == stateForest1){
		document.getElementById('Gasteyer').play();
		var audio = document.getElementById("Gasteyer");
	audio.volume = 0.0; audio.currentTime=0;
	var audio = document.getElementById("Thomas");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('myaudio').play();
var audio = document.getElementById("myaudio");
audio.volume = 1.0; audio.currentTime=0;
document.getElementById('Mountain').play();
var audio = document.getElementById("Mountain");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('Town').play();
var audio = document.getElementById("Town");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('Ruins').play();
var audio = document.getElementById("Ruins");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('Castle').play();
var audio = document.getElementById("Castle");
audio.volume = 0.0; audio.currentTime=0;
player.currTown ="Fey Forest";


	}
	if(state == stateForest3){
		player.currTown ="Fey Forest";
		document.getElementById('Gasteyer').play();
		var audio = document.getElementById("Gasteyer");
	audio.volume = 0.0; audio.currentTime=0;
	var audio = document.getElementById("Thomas");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('myaudio').play();
var audio = document.getElementById("myaudio");
audio.volume = 1.0; 
document.getElementById('Mountain').play();
var audio = document.getElementById("Mountain");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('Ruins').play();
var audio = document.getElementById("Ruins");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('Castle').play();
var audio = document.getElementById("Castle");
audio.volume = 0.0; audio.currentTime=0;
	}
	if(state == stateTown){
		document.getElementById('Gasteyer').play();
		var audio = document.getElementById("Gasteyer");
	audio.volume = 0.0; audio.currentTime=0;
	var audio = document.getElementById("Thomas");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('myaudio').play();
var audio = document.getElementById("myaudio");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('Mountain').play();
var audio = document.getElementById("Mountain");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('Town').play();
var audio = document.getElementById("Town");
audio.volume = 1.0; audio.currentTime=0;
document.getElementById('Ruins').play();
var audio = document.getElementById("Ruins");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('Castle').play();
var audio = document.getElementById("Castle");
audio.volume = 0.0; audio.currentTime=0;
player.currTown ="Yoshyrule";

	}
	if(state == stateCastle){
		document.getElementById('Gasteyer').play();
		var audio = document.getElementById("Gasteyer");
	audio.volume = 0.0; audio.currentTime=0;
	var audio = document.getElementById("Thomas");
audio.volume = 1.0; audio.currentTime=0;
document.getElementById('myaudio').play();
var audio = document.getElementById("myaudio");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('Mountain').play();
var audio = document.getElementById("Mountain");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('Town').play();
var audio = document.getElementById("Town");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('Ruins').play();
var audio = document.getElementById("Ruins");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('Castle').play();
var audio = document.getElementById("Castle");
audio.volume = 0.0; audio.currentTime=0;
player.currTown ="Castle";
	}
	if(state == stateForestOut){
		document.getElementById('Gasteyer').play();
		var audio = document.getElementById("Gasteyer");
	audio.volume = 1.0; audio.currentTime=0;
	var audio = document.getElementById("Thomas");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('myaudio').play();
var audio = document.getElementById("myaudio");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('Mountain').play();
var audio = document.getElementById("Mountain");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('Castle').play();
var audio = document.getElementById("Castle");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('Ruins').play();
var audio = document.getElementById("Ruins");
audio.volume = 0.0; audio.currentTime=0;
player.currTown ="Gasteyer Garden";
	}
	if(state == stateNecro1){
		document.getElementById('Gasteyer').play();
		var audio = document.getElementById("Gasteyer");
	audio.volume = 0.0; audio.currentTime=0;
	var audio = document.getElementById("Thomas");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('myaudio').play();
var audio = document.getElementById("myaudio");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('Mountain').play();
var audio = document.getElementById("Mountain");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('Ruins').play();
var audio = document.getElementById("Ruins");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('Castle').play();
var audio = document.getElementById("Castle");
audio.volume = 1.0; audio.currentTime=0;
player.currTown ="Mulaney Madlands";
	}
	if(state == stateNecro2){
		document.getElementById('Gasteyer').play();
		var audio = document.getElementById("Gasteyer");
	audio.volume = 0.0; audio.currentTime=0;
	var audio = document.getElementById("Thomas");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('myaudio').play();
var audio = document.getElementById("myaudio");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('Mountain').play();
var audio = document.getElementById("Mountain");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('Ruins').play();
var audio = document.getElementById("Ruins");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('Castle').play();
var audio = document.getElementById("Castle");
audio.volume = 1.0; 
player.currTown ="Mulaney Madlands";
	}
	if(state == stateNecro3){
		document.getElementById('Gasteyer').play();
		var audio = document.getElementById("Gasteyer");
	audio.volume = 0.0; audio.currentTime=0;
	var audio = document.getElementById("Thomas");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('myaudio').play();
var audio = document.getElementById("myaudio");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('Mountain').play();
var audio = document.getElementById("Mountain");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('Ruins').play();
var audio = document.getElementById("Ruins");
audio.volume = 0.0; audio.currentTime=0;
document.getElementById('Castle').play();
var audio = document.getElementById("Castle");
audio.volume = 1.0; audio.currentTime=0;
document.getElementById('Ruins').play();
var audio = document.getElementById("Ruins");
audio.volume = 0.0; audio.currentTime=0;
player.currTown ="Mulaney Madlands";
	}

	clearArrays();
	
	if(state > 9){
		mapSelect = eval("map"+state);
		drawMap(mapSelect);
		var stateDigit = ((''+state)[1]);
		if(stateDigit > 0 && stateDigit < 9){
			spawnMonsters();
		}
		
	}
	
	//This gives NPCs a value so they can be uniquely indentified later.
	for(var i =0; i < npcs.length; i++){
		npcs[i].index = i;
	}
	
	//This gives Monsters a value so they can be uniquely indentified later.
	for(var i =0; i < monsters.length; i++){
		monsters[i].index = i;
	}
}

function updateScenes(){
	
	if(state > 9){
		//This part gets a little hairy because every movable object needs to 
		//check collision against every other object and in some cases (NPCs) against itself.
		
		//Check Wall Collision
		for(var i = 0; i < walls.length; i++){
			collision(player,walls[i]);
			for(var j = 0; j < npcs.length; j++){
				if(npcs[j].scene == state){
					collision(npcs[j],walls[i]);
				}
			}
			for(var j = 0; j < monsters.length; j++){
				collision(monsters[j],walls[i]);
			}
		}

		
		//Check Chest Collision
		for(var i = 0; i < chests.length; i++){
			if(chests[i].scene == state){
				collision(player,chests[i]);
				for(var j = 0; j < npcs.length; j++){
					if(npcs[j].scene == state){
						collision(npcs[j],chests[i]);
					}
				}
				for(var j = 0; j < monsters.length; j++){
					collision(monsters[j],chests[i]);
				}
			}
		}
		
		//Check door Collision
		for(var i = 0; i < doors.length; i++){
			if(doors[i].scene == state){
				collision(player,doors[i]);
				for(var j = 0; j < npcs.length; j++){
					if(npcs[j].scene == state){
						collision(npcs[j],doors[i]);
					}
				}
				for(var j = 0; j < monsters.length; j++){
					collision(monsters[j],doors[i]);
				}
			}
		}
		
		//Check Player and NPC Collision 
		for(var i = 0; i < npcs.length; i++){
			if(npcs[i].scene == state){
				var npcIndex = i + 1;
				collision(npcs[i],player);
				collision(player,npcs[i]);
				for(var j = 0; j < npcs.length; j++){
					if( j != i){
						collision(npcs[i],npcs[j]);
					}
				}
				for(var j = 0; j < monsters.length; j++){
					collision(monsters[j],npcs[i]);
				}
			}
		}
		
		//Check Player and Monster Collision 
		for(var i = 0; i < monsters.length; i++){
			var monIndex = i + 1;
			collision(monsters[i],player);
			collision(player,monsters[i]);
			
			for(var j = 0; j < monsters.length; j++){
				if( j != i){
					collision(monsters[i],monsters[j]);
				}
			}
			for(var j = 0; j < npcs.length; j++){
				if(npcs[j].scene == state){
					collision(npcs[j],monsters[i]);
				}
			}
		}
		
		//Check Warp Collision
		for(var i = 0; i < warps.length; i++){
			if(warps[i].sourceScene == state){
				collision(player,warps[i]);
			}
		}
		
		//Check Drop Collision
		for(var i = 0; i < drops.length; i++){
			collision(player,drops[i]);
		}
		
		//Checks dialogue and moves NPCs
		for(var i =0; i < npcs.length; i++){
			if(npcs[i].scene == state){
				moveChar(npcs[i],npcs[i].moveType);
			}
		}
		for(var i =0; i < monsters.length; i++){
			moveChar(monsters[i],monsters[i].moveType);
		}
		
		
		//Updates Walls, chests, and NPCs
		for(var i = 0; i < walls.length; i++){
			walls[i].update();
		}
		for(var i = 0; i < chests.length; i++){
			if(chests[i].scene == state){
				chests[i].update();
			}
		}	
		for(var i = 0; i < doors.length; i++){
			if(doors[i].scene == state){
				doors[i].update();
			}
		}
		for(var i = 0; i < npcs.length; i++){
			if(npcs[i].scene == state){
				npcs[i].newPos();
				npcs[i].update();
			}
		}
		for(var i = 0; i < monsters.length; i++){
			monsters[i].newPos();
			monsters[i].update();
		}
		for(var i = 0; i < textParts.length; i++){
			//textParts[i].newPos();
			textParts[i].update();
		}
		for(var i = 0; i < drops.length; i++){
			drops[i].update();
		}
		//Update warps for testing
		for(var i = 0; i < warps.length; i++){
			if(warps[i].sourceScene == state){
				warps[i].update();
			}
		}
	
		//HUD Menu Canvas hack

		ctx.fillStyle = "green";
	//	ctx.fillRect(0, 0, 100,40);
		ctx.fillRect(0, 390, gameArea.canvas.width,100);
		ctx.fillStyle = "green";
	//	ctx.fillRect(450, 0, 442, 40);
		ctx.font = "10px Egelston";
		ctx.fillStyle = "#000";
	//	ctx.fillText("HP: "+ player.currHP,0,10);
		ctx.fillText("Your HP: ",0,400);
		ctx.fillText("x"+player.currHP, 0,415);
		//ctx.fillText("Eggs:"+gold,0,10);


		
		ctx.font = "10px Egelston";
		ctx.fillStyle = "#000";
		//ctx.fillText("Location:",450,10);
		ctx.fillText("Location:",450,400);
	//	ctx.fillText(player.currTown,450,30);
		ctx.fillText(player.currTown,450,415);

		//Dialogue box
		if(player.inDialogue){
			ctx.fillStyle = "transparent";
			ctx.fillRect(0, 0, gameArea.canvas.width, 70);
			ctx.font = "normal 14px Egelston";
			ctx.fillStyle = "white";

			if(ctx.measureText(diaLine).width > ctx.canvas.width){
				diaLine2 = "";
				while(ctx.measureText(diaLine).width > ctx.canvas.width){
					diaLine2 = diaLine.substring(diaLine.lastIndexOf(" ")+1) + " " + diaLine2;
					diaLine = diaLine.substring(0, diaLine.lastIndexOf(" "));
				}
			}else{
		
				ctx.fillStyle = "green";
				ctx.fillRect(0, 0, gameArea.canvas.width, 70);
				ctx.font = "normal 14px Egelston";
				ctx.weight="normal";
				ctx.fillStyle = "white";
				ctx.fillText(diaLine,0,20);
				ctx.fillText(diaLine2,0,80);
			}
			for(var i = 0; i < buttons.length; i++){
				//ctx.fillStyle = "rgba(255,255,255,0.6)";
				ctx.fillStyle = "green";
				ctx.fillRect(0, (i*40+70), gameArea.canvas.width, 40);
				ctx.font = "normal 14px Egelston";
				ctx.fillStyle = "white";
				ctx.fillText(buttons[i][0],20,(i*40+100));
			}
			if(waiting){
				cursor.x = 0;
				cursor.y = buttonIndex * 40 + 80;
				cursor.visible = true;
			}else{
				
				cursor.visible = false;
			}
		}
	}else{
	
		switch(state){
			case stateStart:
				
				updateScene_startMenu();
				break;
			case stateMenu:
				
				updateScene_menu();
				break;
			case stateShop:
				updateScene_shop();
				break;
			case stateGameOver:
				updateScene_gameOver();
				break;
				case stateGameWon:
					updateScene_gameWon();
					break;
			
			default:
				updateScene_startMenu();
		}
	}
	
	
	//cursor at end so it's over everything else
	cursor.update();
	
	
}
if(type = "Forest"){

	var audio = document.getElementById("myaudio");
	audio.volume = 1.0; audio.currentTime = 0;
	var audio = document.getElementById("Thomas");
	audio.volume = 0.0; audio.currentTime = 0;
	var audio = document.getElementById("Mountain");
	audio.volume = 0.0; audio.currentTime = 0;
}
if(type = "Ruins"){


	var audio = document.getElementById("Thomas");
	audio.volume = 0.0; audio.currentTime = 0;
	var audio = document.getElementById("Mountain");
	audio.volume = 0.0; audio.currentTime = 0;
}

if(type = "Mountain"){


	var audio = document.getElementById("Thomas");
	audio.volume = 0.0; audio.currentTime = 0;
	var audio = document.getElementById("Mountain");
	audio.volume = 0.0; audio.currentTime = 0;
}

function spawnMonsters(){
	if(state < 38){
		var type = "Forest";
var rdm=2;
		if(state > 30){
			type = "Mountain";
			var rdm =2;
		}else if (state > 20){
			type = "Mountain";
			var rdm =4;
		}

	
		//Create Monsters
		for(var i = 0; i < rdm; i++){
			monsters.push(assignMon(bestMaster[type]));
		}
		//Place Monsters
		for(var m = 0; m < monsters.length; m++){
			var monPlaced = false;
			while(!monPlaced){
				//adjusted with -2 and +1 to prevent monsters from spawning on perimeter, preventing player from getting hit when entering a new screen.
				var newx = Math.floor(Math.random() * (mapSelect[0].length-2))+1;
				var newy = Math.floor(Math.random() * (mapSelect.length-2))+1;
				if(mapSelect[newy][newx] == 0){
					monPlaced = true;
					monsters[m].x = (newx*40)+1;
					monsters[m].y = (newy*40)+1;
				}
			}
		}
	}else{
		monsters.push(assignMon(bestMaster["Queen"]));
		monsters[0].x = 200;
		monsters[0].y = 62;
		monsters[0].type="monster";

		monsters.push(assignMon(bestMaster["Ruins"]));
		monsters[1].x = 280;
		monsters[1].y = 282;
		monsters[1].type="monster";
		monsters.push(assignMon(bestMaster["Ruins"]));
		monsters[2].x = 200;
		monsters[2].y = 182;
		monsters[2].type="monster";

		monsters.push(assignMon(bestMaster["Ruins"]));
		monsters[3].x = 280;
		monsters[3].y = 182;
		monsters[3].type="monster";


		var audio = document.getElementById("myaudio");
		audio.volume = 0.0; audio.currentTime = 0;

		var audio = document.getElementById("Mountain");
		audio.volume = 0.0; audio.currentTime = 0;

		var audio = document.getElementById("menu");
		audio.volume = 0.0; audio.currentTime = 0;
	}
}

