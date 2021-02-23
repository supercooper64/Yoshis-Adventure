function door(x, y, w, h, scene){
	this.scene = scene;
	this.w = w;
	this.h = h;
	this.x = x;
	this.y = y;
	this.type = "door";
	this.color = "red";
	this.index = 0;
	//this.newImg = document.createElement("IMG");
	//this.newImg.setAttribute("src", "img/door.png");
	
	//This is all dialogue stuff.
	this.inDialogue = false;
	this.diaEnd = false;
	this.label = "";
	this.opened = false;
	this.diaCounter = 0;

	this.dialogue = ["It's locked. In some places, talk to Yabe Yoscheinwald about opening this door."];
	//this.script = script;
	this.update = function() {
	
		var destframe = 0;
		if(this.opened){
			var destframe = 30;
		}
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
		//ctx.strokeStyle="#000";
		//ctx.strokeRect(this.x, this.y, this.w, this.h);
		//ctx.drawImage(this.newImg, destframe, 0, 15, 15, this.x, this.y, this.w, this.h);
    }
	this.checkLock = function(){

		if(!this.opened){
			gameArea.clear();
			for(var i = 0; i < inventory.length; i++)
			{
				if(inventory[i].name == "Key"){
					this.dialogue[0] = "Key activated!";
					this.opened = true;
					gameArea.clear();
					document.getElementById('key').play();
					var audio = document.getElementById("key");
				audio.volume = 1.0; audio.currentTime = 0;
				document.getElementById('note').play();
				var audio = document.getElementById("note");
			audio.volume = 0.0; audio.currentTime=0;
				//	inventory[i].useCureItem();
				}
			}
		}
	}
	
}