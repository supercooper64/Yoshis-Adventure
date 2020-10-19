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

	chests.push(new chest(446,126, 0, 100, stateForest2));
	chests.push(new chest(42,82, 1, assignItem(invMaster["Potion"]), stateForest2));
	chests.push(new chest(272,247, 0, 100, stateForestOut));
	chests.push(new chest(530,38, 1, assignItem(invMaster["Key"]), stateForest3));
	chests.push(new chest(122,282, 1, assignItem(invMaster["Zora's Potion"]), stateWaste1));
	chests.push(new chest(42,122, 1, assignItem(invMaster["Key"]), stateWaste2));

	chests.push(new chest(442,42, 1, assignItem(invMaster["Key"]), stateNecro2));

	chests.push(new chest(526,42, 1, assignItem(invMaster["MaxPotion"]), stateNecro3));
	
	
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
	npcs.push(new npc(33, 31, 200, 150, 0, 2, "towna", stateTown, "img/NPC Red Yoshi.png"));
	npcs.push(new npc(33, 31, 242, 242, 0, 2, "townb", stateTown, "img/NPC Purple Yoshi.png", 2));
	npcs.push(new npc(34, 31, 321, 242, 0, 0, "townc", stateTown, "img/NPC Blue Yoshi.png", 4));

	npcs.push(new npc(33, 31, 92, 156, 0, 0, "HelpWaste2", stateNecro3, "img/NPC Red Yoshi.png", 0));
	npcs.push(new npc(33, 31, 92, 156, 0, 0, "HelpWaste", stateWaste1, "img/NPC Red Yoshi.png", 2));
	npcs.push(new npc(32, 31, 172, 156, 0, 0, "Help3", stateForest3, "img/NPC Red Yoshi.png", 4));
	npcs.push(new npc(33, 31, 157, 156, 0, 0, "Help2", stateForest2, "img/NPC Red Yoshi.png", 2));
	npcs.push(new npc(33, 31, 206, 91, 0, 0, "Help1", stateForest1, "img/NPC Red Yoshi.png", 4));
	/*monsters.push(assignMon(bestMaster["Forest"]));
	monsters[0].x = 250;
	monsters[0].y = 150;	*/
	
	npcs.push(new npc(33, 31, 84, 204, 0, 2, "foresta", stateForestOut, "img/NPC Red Yoshi.png",1));
	npcs.push(new npc(33, 31, 164, 124, 0, 2, "forestb", stateForestOut, "img/NPC Purple Yoshi.png"));
	npcs.push(new npc(31, 31, 384, 284, 0, 0, "forestc", stateForestOut, "img/NPC Blue Yoshi.png",1));

	npcs.push(new npc(32, 31, 324, 202, 0, 2, "wastea", stateWasteOut, "img/NPC Red Yoshi.png"));
	npcs.push(new npc(33, 31, 162, 202, 0, 2, "wasteb", stateWasteOut, "img/NPC Purple Yoshi.png"));
	npcs.push(new npc(31, 31, 200, 60, 0, 0, "wastec", stateWasteOut, "img/NPC Blue Yoshi.png"));
	
	npcs.push(new npc(32, 32, 61, 102, 0, 0, "Alex's BFF", stateCastle, "img/hero.png"));
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
	warps.push(new warp(false, true, 6, stateNecro3, stateCastle,false,true));
	warps.push(new warp(false, true, 7, stateCastle, stateNecro3));
	
	console.log("Scenes built");
}

function buildScenes(change) {
	

	
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
		
		//HUD Menu
		ctx.font = "18px Egelston";
		ctx.fillStyle = "#000";
		ctx.fillText("HP: "+ player.currHP,10,20);
	
		
		//Dialogue box
		if(player.inDialogue){
			ctx.fillStyle = "rgba(255,255,255,0.6)";
			ctx.fillRect(0, 0, gameArea.canvas.width, 100);
			ctx.font = "14px Egelston";
			ctx.fillStyle = "#000";
			if(ctx.measureText(diaLine).width > ctx.canvas.width){
				diaLine2 = "";
				while(ctx.measureText(diaLine).width > ctx.canvas.width){
					diaLine2 = diaLine.substring(diaLine.lastIndexOf(" ")+1) + " " + diaLine2;
					diaLine = diaLine.substring(0, diaLine.lastIndexOf(" "));
				}
			}else{
				ctx.fillText(diaLine,20,20);
				ctx.fillText(diaLine2,20,60);
			}
			for(var i = 0; i < buttons.length; i++){
				ctx.fillStyle = "rgba(255,255,255,0.6)";
				ctx.fillRect(0, (i*40+100), gameArea.canvas.width, 40);
				ctx.font = "14px Egelston";
				ctx.fillStyle = "#000";
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
	var audio = document.getElementById("Boss");
	audio.volume = 0.0; audio.currentTime = 0;
	var audio = document.getElementById("myaudio");
	audio.volume = 1.0; audio.currentTime = 0;
	var audio = document.getElementById("Thomas");
	audio.volume = 0.0; audio.currentTime = 0;
	var audio = document.getElementById("Mountain");
	audio.volume = 0.0; audio.currentTime = 0;
}
if(type = "Ruins"){
	var audio = document.getElementById("Boss");
	audio.volume = 0.0; audio.currentTime = 0;

	var audio = document.getElementById("Thomas");
	audio.volume = 0.0; audio.currentTime = 0;
	var audio = document.getElementById("Mountain");
	audio.volume = 0.0; audio.currentTime = 0;
}

if(type = "Mountain"){
	var audio = document.getElementById("Boss");
	audio.volume = 0.0; audio.currentTime = 0;

	var audio = document.getElementById("Thomas");
	audio.volume = 0.0; audio.currentTime = 0;
	var audio = document.getElementById("Mountain");
	audio.volume = 0.0; audio.currentTime = 0;
}
function spawnMonsters(){
	if(state < 38){
		var type = "Forest";
	
		if(state > 30){
			type = "Ruins";
		
		}else if (state > 20){
			type = "Mountain";
		
		}
		var rdm = Math.floor(Math.random() * 4) + 1;
	
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
		monsters[0].x = 282;
		monsters[0].y = 152;
monsters[0].type = "boss";
player.hit = true;
		var audio = document.getElementById("myaudio");
		audio.volume = 0.0; audio.currentTime = 0;
		var audio = document.getElementById("Thomas");
		audio.volume = 1.0; audio.currentTime = 0;
		var audio = document.getElementById("Mountain");
		audio.volume = 0.0; audio.currentTime = 0;
		var audio = document.getElementById("Boss");
		audio.volume = 0.0; audio.currentTime = 0;
		var audio = document.getElementById("menu");
		audio.volume = 0.0; audio.currentTime = 0;
	}
}

