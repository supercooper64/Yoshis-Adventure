//Master monster list. 
var bestMaster = {
	//monster(value, width, height, moveType, maxHp, image)
	"Forest":  new monster(30, 32, 32, 1, 20, "img/mon1.png"),
	"Mountain": new monster(57, 48, 48, 2, 14, "img/mon2.png"),
	"Ruins": new monster(82, 48, 48, 3, 60, "img/mon2.png"),
	
	"Queen": new monster(1, 96, 96, 1, 1000, "img/Queen.png")
};

function assignMon(mon){
	var copy = Object.assign({}, mon);
	return copy;
}