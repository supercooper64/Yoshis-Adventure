var inventory = [];
var gold = 9999;

//Master inventory list. 
//item(name, value, buy, sell, type, qty, description){
var invMaster = {
	"Potion": new item("Potion", 1, 1, 1, 0, 1, "The meh-quality HP. Good for certain things."),
	"Zora's Potion": new item("Zora's Potion", 20, 55, 15, 0, 1, "HP invented by Zora herself"),
	"MaxPotion": new item("MaxPotion", 100, 100, 100, 0, 1, "The big ticket potion that sadly beats Zora's Potion"),
	//Unused item due to glitches in game
	"Golden Yoshi Egg": new item("Golden Yoshi Egg", 0, 999, 500, 0, 1, "A rare item. Makes you feel like Wario."),
	
	"Wooden Sword": new item("Punch", 5, 100, 70, 1, 1, "A simple ability that all Yoshis have."),
	"Smash": new item("Smash", 10, 700, 288, 1, 1, "A more powerful ability where you can attack enemies by 50%."),
	"EGELSTON": new item("EGELSTON", 50, 1487, 1400, 1, 1, "Superior ability where you can easily kill enemies on contact."),
	
	"Leather Vest": new item("Meh Yoshi", 11, 320, 278, 2, 1, "Powerup that protects you at the start of this game, unlike SUPER YOSHI."),
	"SUPER YOSHI": new item("SUPER YOSHI", 99, 500, 430, 2, 1, "An invincible powerup where your HP does not decrease."),
	
	"Locket": new item("Locket", 0, 0, 0, 3, 1, "A rusty old locket."),
	"Key": new item("Key", 0, 0, 0, 3, 1, "Used to unlock doors in certain courses.")
};
function startInventory(){
	
	//Builds starting inventory.
	inventory.push(assignItem(invMaster["Potion"]));
	inventory[0].qty = 5;
	inventory.push(assignItem(invMaster["Locket"]));
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
	var audio = new Audio('music/cheerful.wav');
	audio.play();


	gold += value;
}

