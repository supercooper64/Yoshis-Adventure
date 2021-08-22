var inventory = [];
var gold = 999;

//Master inventory list. 
//item(name, value, buy, sell, type, qty, description){
var invMaster = {
	"Potion": new item("Schweddy's Potion", 1, 1, 1, 0, 1, "The meh-quality HP. Good for certain things."),
	"Zora's Potion": new item("Zora's Potion", 2, 44, 15, 0, 1, "HP invented by Zora herself"),
	"MaxPotion": new item("MaxPotion", 60, 40, 30, 0, 1, "The big ticket potion that sadly beats Zora's Potion"),
	//Unused item due to glitches in game
	"Golden Yoshi Egg": new item("Golden Yoshi Egg", 0, 999, 500, 0, 1, "A rare item. Makes you feel like Wario."),
	
	"Wooden Sword": new item("Punch", 5, 100, 70, 1, 1, "A simple ability that all Yoshis have."),
	"Smash": new item("Smash", 10, 700, 288, 1, 1, "A more powerful ability where you can attack enemies"),
	"FURIOUS FALCONER": new item("FURIOUS FALCONER", 50, 1487, 100, 1, 1, "Superior ability where you can easily kill enemies on contact, unlike some."),
	
	"Leather Vest": new item("Meh Yoshi", 11, 320, 278, 2, 1, "Powerup that protects you partially at the start of this game, unlike SUPER SAIYAN YOSHI."),
	"SUPER SAIYAN YOSHI": new item("SUPER SAIYAN YOSHI", 99, 500, 430, 2, 1, "A  powerup where your HP does not decrease. Treat yo self to invincibility!"),
	
	"Locket": new item("Locket", 0, 0, 0, 3, 1, "A rusty old locket."),
	"Key": new item("Key", 0, 0, 0, 3, 1, "Used to unlock doors in certain courses.")
};
function startInventory(){
	
	//Builds starting inventory.
	inventory.push(assignItem(invMaster["Potion"]));
	inventory[0].qty = 5;
	inventory.push(assignItem(invMaster["Smash"]));
	console.log("Inventory Built");
}


//This copies an item from the master list to inventory so we do not overwrite values.
function assignItem(item){
	var copy = Object.assign({}, item);
	return copy;
}
//Adds item (duh) but also checks if item is already in inventory, then it just increases quantity.
function addItem(item){
	var found = false;
	for(var i =0; i < inventory.length; i++){
		if(inventory[i].name == item.name){
			inventory[i].qty += item.qty;
			found = true;
		
			break;
		}
	}
	if(!found){
	

		
	
		inventory.push(assignItem(invMaster[item.name]));
	}	
}
function addGold(value){
	var audio = document.getElementById("yoshi yaha");
	audio.volume = 1.0; audio.currentTime = 0;
		document.getElementById('yoshi yaha').play();
	var audio = document.getElementById("found item");
	audio.volume = 1.0; audio.currentTime = 0;
		document.getElementById('found item').play();
		document.getElementById('Kamek').play();
		var audio = document.getElementById("Kamek");
	audio.volume = 0.0; audio.currentTime=0;
				setTimeout(function(){ 		var audio = document.getElementById("ow");
				audio.volume = 0.0; audio.currentTime = 0;
					document.getElementById('ow').play();
					var audio = document.getElementById("scream");
					audio.volume = 0.0; audio.currentTime = 0;
					var audio = document.getElementById("throw");
					audio.volume = 0.0; audio.currentTime = 0;
						document.getElementById('throw').play();
						document.getElementById('scream').play();
						var audio = document.getElementById("shell");
						audio.volume = 0.0; audio.currentTime = 0;
							document.getElementById('shell').play();}, 2000);
				var audio = document.getElementById("ow");
				audio.volume = 0.0; audio.currentTime = 0;
					document.getElementById('ow').play();
					var audio = document.getElementById("scream");
					audio.volume = 0.0; audio.currentTime = 0;
					var audio = document.getElementById("throw");
					audio.volume = 0.0; audio.currentTime = 0;
						document.getElementById('throw').play();
						document.getElementById('scream').play();
						var audio = document.getElementById("shell");
						audio.volume = 0.0; audio.currentTime = 0;
							document.getElementById('shell').play();
	
	gold += value;
}

