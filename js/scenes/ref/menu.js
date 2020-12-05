var menuIndex = 0;
var menuLevel = 0;
var backIndex = 0;

var discripOut = "";

var rightOffset = 300;
var itemDiff = 0;
var showStat = false;

const menu0 = [
	"Items",
	"Abilities",
	"Powerups",
	"Lockets and Keys",
	"Back (or press Q to exit)",
	"Goodbye"
]

var currMenu = [];

var cursorX = 0;
var cursorY = (menuIndex*40 + 100)-17;

function updateScene_menu(){
	
	ctx.font = "28px Egelston";
	ctx.fillStyle = "black";
	ctx.fillText("Menu",220,20);

	ctx.font = "13px Egelston";
	ctx.fillText("Name: "+player.name,10,100);
	ctx.fillText("HP: "+player.currHP+"/"+player.maxHP,  10,140);
	ctx.fillText("Yoshi Egg Meter: "+gold,10,180);
	//ctx.fillText(player.EXP,50,220);

	if(menuLevel == 0){
		currMenu = menu0;
		for(var i = 0; i < currMenu.length; i++){
			ctx.fillText(currMenu[i],rightOffset,(i*40 + 100));
		}
	}else{
		for(var i = 0; i < currMenu.length; i++){
			if(i >= scrollOffset){
				ctx.fillText(currMenu[i].name+" ["+currMenu[i].qty+"]",rightOffset,((i-scrollOffset)*40 + 100));
			}
		}
		ctx.fillText("Back", rightOffset, (currMenu.length - scrollOffset) * 40 + 100);
	}
	
	cursor.x = cursorX;
	cursor.y = cursorY;
	
	
	//Display equipped Items
	var equipOut = "";
	if(menuLevel == 2){
		equipOut = "Equipped: "+player.equippedWeapon.name+" "+player.equippedWeapon.value+" per ABLTY";
	}else if (menuLevel == 3){
		equipOut = "Equipped: "+player.equippedArmor.name+" "+player.equippedArmor.value+" per POW";
	}
	ctx.fillText(equipOut, rightOffset-50, 50);
	
	ctx.fillStyle = '#000';
	ctx.fillText(discripOut, 10, 380);
	
	if(showStat){
		if(itemDiff > 0){
			ctx.fillStyle = '#0F0';
		}else if(itemDiff < 0){
			ctx.fillStyle = '#F00';
		}
		ctx.fillText(itemDiff, rightOffset-60, cursorY);
	}
}

function openMenu(){


	var audio = document.getElementById("menu");
	audio.volume = 0.0; audio.currentTime = 0;
		menuLevel = 0;
		menuIndex = 0;
		resetCursor();
		prevState = state;
		state = stateMenu;
		cursorX = rightOffset-30;
		scrollOffset = 0;
		cursor.visible = true;
}

function closeMenu(){
	state = prevState;
	scrollOffset = 0;
	cursor.visible = false;
}

function menuControl(key){
	if (key == 37 || key == 65) {}
	if (key == 39 || key == 68) {}
	if (key == 38 || key == 87) {
		if(menuIndex > 0){
			var audio = new Audio('nsmbwiiMenuSelect.wav');
			audio.play();
			menuIndex--;
			if(menuIndex < scrollOffset){
				
				scrollOffset--;
			}
			resetCursor();
		}
	}
	if (key == 40 || key == 83) {
		var menuLength = currMenu.length;
		if(menuLevel == 0){
			menuLength--;
		}
		if(menuIndex < menuLength){
			var audio = new Audio('nsmbwiiMenuSelect.wav');
			audio.play();
			menuIndex++;
			if(menuIndex > 7){
				scrollOffset = menuIndex - 7;
			}
			resetCursor();
		}
	}
	if(menuLevel > 0 && menuIndex < currMenu.length){
		discripOut = currMenu[menuIndex].description;
	}else{
		discripOut = "";
	}
	
	if(menuLevel == 2 &&  menuIndex < currMenu.length){
		checkItem(currMenu[menuIndex].value, 1);
		document.getElementById('audiotag2').play();
	var audio = document.getElementById("audiotag2");
audio.volume = 1.0; audio.currentTime = 0;
		showStat = true;
	}else if(menuLevel == 3 &&  menuIndex < currMenu.length){
		checkItem(currMenu[menuIndex].value, 2);
		document.getElementById('audiotag2').play();
		var audio = document.getElementById("audiotag2");
	audio.volume = 1.0; audio.currentTime = 0;
		showStat = true;
	}else{
		showStat = false;
	}
}

function checkMenu(){
	if(menuLevel == 0){
		if(menuIndex < 4){
			menuLevel = menuIndex+1;
			currMenu = [];
			for(var i = 0; i < inventory.length; i++){
				if(inventory[i].type == menuIndex){
					document.getElementById('audiotag2').play();
					var audio = document.getElementById("audiotag2");
				audio.volume = 1.0; audio.currentTime = 0;
					currMenu.push(inventory[i]);
				}
			}
			menuIndex = 0;
			resetCursor();
		}else if(menuIndex == 4){
			//Exit Menu
		
			closeMenu();
		

			var audio = document.getElementById("menu");
			audio.volume = 0.0; audio.currentTime = 0;
			document.getElementById('audiotag1').play();
			var audio = document.getElementById("audiotag1");
		audio.volume = 1.0;
		}else if (menuIndex == 5){
			//Exit Game
			var audio = document.getElementById("myaudio");
			audio.volume = 0.0; audio.currentTime = 0;
	
			var audio = document.getElementById("menu");
			audio.volume = 0.0; audio.currentTime = 0;
			document.getElementById('byebye').play();
			var audio = document.getElementById("byebye");
		audio.volume = 1.0; audio.currentTime = 0;
				var audio = document.getElementById("myaudio");
				audio.volume = 0.0;
					setTimeout(function(){ window.location.replace("Title Screen.html");}, 1000);
			scrollOffset = 0;
			cursor.visible = false;
		}
	}else if(menuIndex == currMenu.length){
		//Back button is clicked inside a sub menu
		document.getElementById('audiotag1').play();
		var audio = document.getElementById("audiotag1");
	audio.volume = 1.0;audio.currentTime = 0;
		menuIndex = 0;
		menuLevel = 0;
		scrollOffset = 0;
		resetCursor();
	}else if(menuLevel < 4){
		//Use item
		currMenu[menuIndex].action();
		currMenu = [];
		for(var i = 0; i < inventory.length; i++){
			if(inventory[i].type == menuLevel-1){
				document.getElementById('audiotag2').play();
				var audio = document.getElementById("audiotag2");
			audio.volume = 1.0; audio.currentTime = 0;
				currMenu.push(inventory[i]);
			}
		}
	}
}

function resetCursor(){

	cursorY = ((menuIndex-scrollOffset)*40 + 100)-17;
}

function checkItem(itemVal, type){
	var equippedVal = 0;
	if(type == 1){
		equippedVal = player.equippedWeapon.value
	}else if (type == 2){
		equippedVal = player.equippedArmor.value
	}
	itemDiff = itemVal - equippedVal;
}

