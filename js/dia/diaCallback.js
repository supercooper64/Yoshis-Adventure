//This will be used to hold all functions called by dialogue script.
function testEndGame(){

	gameOver();
}

function playAudio(name){
	console.log("SUCCESS!");
	sfx.src = "music/yoshi1.wav";
	sfx.play();
}

function changeMove(mode){
	npcs[tempChar].moveType = mode;
}

function openShop(index){


	var audio = document.getElementById("menu");
	audio.volume = 0.0; audio.currentTime = 0;
	openShop(index);
	var audio = new Audio('Mario Kart Wii Menu Character Select.wav');
	audio.play();

}

function openEnd(index){


	openEnd(index);
}
function testVar(output){
	console.log(output);
}
function testVarNo(){
	console.log(npcs[tempChar].name);
}

function callAddItem(name){
	addItem(assignItem(invMaster[name]));
}
function endKey(){
	npcs[tempChar].label = "end";
}
function checkKey(item){
	//if Item is in inventory
	var counter = 0;
	for(var i = 0; i < inventory.length; i++){
		if(inventory[i].name == item){
			counter++;
		}
	}
	if(counter > 0){

		console.log("Open Sesame");
		var index = inventory.indexOf(item);
		inventory.splice(index,1);
	}
}