var shopRef = [
	[
		assignItem(invMaster["Potion"]),
		assignItem(invMaster["Smash"]),
		assignItem(invMaster["Zora's Potion"])
	],
	[
		assignItem(invMaster["Potion"]),
		assignItem(invMaster["Zora's Potion"]),
	    assignItem(invMaster["Smash"])
	],
	[
		assignItem(invMaster["Zora's Potion"]),
		assignItem(invMaster["MaxPotion"]),
	    assignItem(invMaster["EGELSTON"]),
	    assignItem(invMaster["SUPER YOSHI"]),
		assignItem(invMaster["Potion"])
	]
];

function initShops(){

}

//Buys an item. Checks if you have enough gold.
function buyItem(item){
	var cost = item.buy;
	if(gold < cost){
		console.log("I am sorry, you don't have enough Yoshi eggs.");
	}else{
		console.log("Thank you for your purchase, Yoshi ! See you soon!");
		gold -= cost;
		addItem(item);
	}
}


function sellItem(item){
	console.log("Thank you for this "+item.name);
	gold += item.sell;
	if(item.qty > 1){
		item.qty--;
	}else{
		var index = inventory.indexOf(item);
		inventory.splice(index, 1);
	}
}

