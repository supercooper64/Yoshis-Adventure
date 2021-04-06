/* These Key/Value pairs hold the script. Eventually I want to move these
to plain text files where the key is the files name. This will be eaier to 
update and translate.

comments: line starts with #
Buttons: {ButtonText}
Labels: -LabelName (Must be on own line.)
Variables: [VariableName]  Right now, the variable name must match a player.variableName

GOTO-LabelName: Goes to LabelName after button has been clicked.
CALL-function: calls function from ../js/diaCallback.js **IN PROGRESS**
Random lines must be seperated with labels -rdmX. 

*/
var diaNPC = {
	"towna": "Yabe Yoscheinwald: Hi friend! \n My name is Yabe Yoscheinwald, but call me Tutorial or Red Yoshi. \n I am your tutorial guide. \n You are wanting to rescue Zora, right? \n You should get to know your surroundings. \n To attack (when necessary), press Z on your keyboard. \n Press Q to access your menu where your powers and stuff are stored. \n Finally, press space to talk to someone, \n open chests, \n and of course, restart the game. \n I hope you save Yoshyrule from Downerhausen. \n I will be there everywhere you go if you need me, except in some areas.",
	"townb": "Yoehler Poehlerberg: Hello, friend. \n My name is Yoehler Poehlerberg, but I prefer the name Purple Yoshi. \n It really suits me. \n I, like a reporter, reports on what is going on in our lovely Yoshyrule. \n Anyways, our princess, Zora has been kidnapped by a nefarious monster! \nNo, it ain't Bowser. \n No, it was not even King Boo. \n Turns out, the monster who kidnapped her was Dratchy Downenhausen. \n She is locked up in a cage located in Mulaney Madlands. \n Anyways, Downerhausen caused an entourage of Zombies to appear.\nNobody knows where the fork they came from.\nYou're very brave for going out there and saving her, Yoshi.",
	"townc": "Yoshneese: Hello, my Yoshi lad! \n I am Light Blue Yoshi. \n My real name is Yoshneese, but this name is 99x better. \n I am Yoshyrule's shopkeeper. \n It has been my job for nearly many years. \n If you want to buy (or sell) stuff that I have available, press the space button. \n{Yes.} CALL-openShop(0)\n{No thanks.} GOTO-bad\nThanks. Come back anytime soon. \n By the way, I will appear in other places if you need me. \n-bad\nSee you soon! Don't return as a Debbie Downer!",
	
	"Help1": "Yabe Yoscheinwald: This is the forest area of Yoshyrule, called Fey Forest. \n This place has Zombie horses. \n They appear randomly every time you go to any warp exit. \n You can defeat these enemies by attacking them. \n The time they defeat depends on what ability you have.\n Sometimes, you may see these enemies on top of me, but do not worry, my friend. \n I wear my invisible protection cloak so I cannot get hurt from them.\n Additionally, you lose 5% (or more) of your HP every time you get hit. ",
	"Help2": "Yabe Yoscheinwald: This is the second area of Fey Forest. \n The left side goes to the third area of Fey Forest. \n The right side goes to my favorite place, Gasteyer Garden.",
	"Help3": "Yabe Yoscheinwald: Whoa, stop the music here! \n This exit is a gated area. \n When you come across exits with a red zit on it, they require keys to proceed. \n Use the space button to open chests that appear randomly. \n Sometimes, chests don't just have keys! \n They have other stuff too. \n Don't be afraid to explore and see what you find. ",

	"HelpWaste": "Yabe Yoscheinwald: Welcome to Spivey Sewers. \nIt is filled with evil snakes. \n Unlike the zombie horses, they can give you extra HP damage. \n Boy, they sure give me the Yoshi creeps! \n I sure hope Luigi was here. \n He could vaccum up those enemies in seconds with his Poltergeist device. ",
	"HelpWaste2": "Yabe Yoscheinwald: Here is the place where Zora was kidnapped. \n I'll be waiting here for you.  \n By the way, Downerhausen is harder to attack and defeat than the enemies here. \n Also, some of his minions, the snakes, are present. \n One of his minions blocks the treasure chest, which contains a key. \n Two of them block the area where the boss is. \n One blocks the door where Zora is locked up.  \n Turns out, the final key that you unlock here is magical. \n It causes both Downerhausen and the Zombies to die, \nregardless if you killed Downerhausen or not.\n Good luck, my friend. \n Next stop, Zora!!!",
	"HelpNecro": "Yabe Yoscheinwald: Welcome to Mulaney Madlands! \n There are more enemies here than Fey Forest or Spivey  Sewers.",



	"foresta": "Yabe Yoscheinwald: This is Gasteyer Garden. \n Us Yoshis like to come here a lot. \n It is like our happy place. \nIt is the ONLY place where the zombie scourage hasn't taken place. \n I have great hopes for you to rescue Zora.",
	"forestb": "Yoehler Poehlerberg: Congratulations on making it this far, Yoshi.\nThey say the only way to restore Yoshyrule is to defeat Downerhausen himself.\n He is located in a land called Mulaney Madlands.",
	"forestc": "Yoshneese: Wanna buy/sell something?\n{Yes.} CALL-openShop(2)\n{No thanks.} GOTO-bad\nThanks, come again soon.\n-bad\nI understand. I hope you have good luck saving Yoshyrule.",
	"wastea": "Yabe Yoscheinwald: Looks like you are almost here to defeat Downerhausen! \n Here's a tip: \n On the left side of Spivey Sewers, there is a secret zone where the key is. \n On the bottom side, there is another entrance where the gated red zit resides.\n This exit directs to Mulaney Madlands. \n I'll wait here while you explore. \n You can always come back if you need me. ",
	"wasteb": "Yoehler Poehlerberg: The zombies come out every year.\nNobody knows what they want.\nDo they want anything at all?\nOr are they just here to kill us Yoshis? \n Sorry for being such a Debbie Downer! My apologies. \n I am just so afraid that something like that could happen to us!\n Things we say now, right?\nAnyways, may Yoshyrule be with you!",
	"wastec": "Yoshneese: Wanna buy/sell something?\n{Yes.} CALL-openShop(2)\n{No thanks.}  GOTO-bad\nThanks. Come back anytime soon.\n-bad\nI understand. I hope you have good luck saving Yoshyrule.",
	"Alex's BFF": "Princess Zora: Thank god you are here Yoshi! \n You are my hero! \n Not every Yoshi could travel this far to save me. \n They either are eaten alive or not brave enough.\n Thank you for restoring Yoshyrule! \n This game was made by:\n DJ STUDIO and Cooper Columbus \n Game Design by: \n DJ STUDIO \n Music and Sprites by: \n Cooper Columbus \n Yoshi's Adventure (C) 2019 by DJ STUDIO. All rights reserved.\nCALL-openEnd(2)\n{End Game (press up button).}",
	
};
 var diaObjects = {
	/*"door": "It's locked\nCALS-checkKey('Key')\n-notHave\nIt's still locked\n-doesHave\nYou unlocked the door\nCALL-addGold(10)",
	"chest": "\nThis is multiple lines\n#I hope everyone is Well!\nYAY!\n-next",
	"testGoto": "\nHi. Let's skip the small talk.\nGOTO-end\nI hope everyone is Well!\nYAY!\n-end\nSee isn't that easy?\n-more",
	"random": "-rdm0\nHi How are you?\n-rdm1\nToday is a beautiful day!\nIsn't it?\n-rdm2\nThe birds are singing and the sun is shining.\n-rdm3\nREDRUMREDRUMREDRUM!!!!",
	"repeat": "Let me tell you a story!\nIt's a really good one!!\neh... I forgot.",
	"question":"I have a question.\n\nHow are you today?\n{Good.} GOTO-Good\n{Not good.} GOTO-bad\n-Good\nI am glad to hear!\n-bad\nThat is unfortunate.",
	"testInput":"Hello [name], my friend.\nI heard you like [food]!",
	"gameOver":"Would you like to test Game Over Function?\n{Yes.} CALL-testEndGame()\n{No thanks.} GOTO-bad\n\n\n-bad\nThat is unfortunate.",
	"openShop":"Would you like to buy something?\n{Yes.} CALL-openShop()\n{No thanks.} GOTO-bad\nThanks\n-bad\nThat is unfortunate.",
	"testKey": "Hello! Can you find me a McGuffin?\nCALS-checkKey('McGuffin')\n-notHave\nI sure could use a McGuffin!\n-doesHave\nOh thank you! This is exactly what I needed! Here is some Gold!\nCALL-addGold(10)\nThanks again.\nCALL-endKey()\n-end\nThank you so much for finding that McGuffin!",
	"testAudio": "Hello, let's make some noise!\nCALL-playAudio('Coin.wav')\nThanks!",
	"testMove": "Hello, what do you want me to do?\n{Follow Me} CALL-changeMove(2)\n{Go Away!} CALL-changeMove(3)\n{Whatever you want.} CALL-changeMove(1)\n{Stop} CALL-changeMove(0)\n#Comment!\nok!",
	"testLabelCall": "Hello, pick a card!\n{Heart} GOTO-Heart\n{Club} GOTO-Club\n{Spade} GOTO-Spade\n{Diamond} GOTO-Diamond\n-Heart\nCALL-changeMove(2)\nI love you!\n-Club\nCALL-playAudio('Coin.wav')\nThanks!\n-Spade\nYou picked Spade\n-Diamond\nIf I was a rich bot! NAH NAH NAH",
	"iterated": "-dia1\nHola!\n-dia2\nThis is the second line.\n-dia3\nThis is the third Line.\n-dia4\nThat's all I got."*/
}; 

var diaEvent = {
	"test": "Hi\nI am a static event.\nDid I work?",
	"door": "It's locked\nCALS-checkKey('McGuffin')\n-notHave\nI sure could use a McGuffin!\n-doesHave\nOh thank you! This is exactly what I needed! Here is some Gold!\nCALL-addGold(10)\nThanks again.\nCALL-endKey()\n-end\nThank you so much for finding that McGuffin!",
};